const fs = require("fs"); // Used by BrowserSync

module.exports = function(eleventyConfig) {
    // Libraries
    eleventyConfig.setLibrary("md", require('./lib/parsers/markdown/markdown.js'));

    // 11ty Plugins
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'));

    // Collections
    eleventyConfig.addCollection("articles", require('./lib/collections/articles.js'));
    eleventyConfig.addCollection("notes", require('./lib/collections/notes.js'));
    eleventyConfig.addCollection("lifestream", require('./lib/collections/lifestream.js')); //Builds everything in to a date ordered list

    // Copy to site
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/humans.txt');
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');
    eleventyConfig.addPassthroughCopy('src/downloads');

    // Nunjucks Filters
    eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit)); // limit array to first X items
    eleventyConfig.addFilter("lastly", (array, limit) => array.slice(-limit)); //limit array to last X items
    eleventyConfig.addNunjucksFilter("jsonify", require('./lib/parsers/nunjucks/filters/jsonify.js')); //Make it JSON friendly
    eleventyConfig.addNunjucksFilter("doubleToSingleQuotes", require('./lib/parsers/nunjucks/filters/double-to-single-quotes.js')); //Swap double quotes to singles so JSON remains valid

    eleventyConfig.addNunjucksFilter("niceDate", require('./lib/parsers/nunjucks/filters/nice-date.js')); // UTC Date formatter for pretty dates

    // Enable Deep Merge
    eleventyConfig.setDataDeepMerge(true);

    // Browser Sync Redirect for 404 testing.
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function(err, bs) {
                const content_404 = fs.readFileSync('_site/404.html');
                bs.addMiddleware("*", (req, res) => {
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            }
        }
    });

    // Config
    return {
        dir: {
            input: 'src',
            output: '_site',
            layouts: '_layouts'
        },
        templateFormats: ['njk', 'md'],
        passthroughFileCopy: true
    };
};
