const fs = require("fs"); // Used by BrowserSync

module.exports = function(eleventyConfig) {
    // Libraries
    eleventyConfig.setLibrary("md", require('./lib/parsers/markdown/markdown.js'));

    // 11ty Plugins
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'));

    // Collections
    eleventyConfig.addCollection("articles", require('./lib/collections/articles.js'));
    eleventyConfig.addCollection("checkins", require('./lib/collections/checkins.js'));
    eleventyConfig.addCollection("favourites", require('./lib/collections/favourites.js'));
    eleventyConfig.addCollection("links", require('./lib/collections/links.js'));
    eleventyConfig.addCollection("notes", require('./lib/collections/notes.js'));
    eleventyConfig.addCollection("photos", require('./lib/collections/photos.js'));
    eleventyConfig.addCollection("replies", require('./lib/collections/replies.js'));
    eleventyConfig.addCollection("rsvps", require('./lib/collections/rsvps.js'));
    eleventyConfig.addCollection("weeknotes", require('./lib/collections/weeknotes.js'));
    eleventyConfig.addCollection("lifestream", require('./lib/collections/lifestream.js')); //Builds everything in to a date ordered list

    // Copy to site
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/humans.txt');
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');

    // Nunjucks Filters
    eleventyConfig.addFilter("limit", (array, limit) => array.slice(0, limit)); // limit array to first X items
    eleventyConfig.addFilter("lastly", (array, limit) => array.slice(-limit)); //limit array to last X items
    eleventyConfig.addNunjucksFilter("date", require('./lib/parsers/nunjucks/filters/date.js')); // Date formatter for pretty dates
    eleventyConfig.addNunjucksFilter("dateNow", require('./lib/parsers/nunjucks/filters/date-now.js')); // Date now
    eleventyConfig.addNunjucksFilter("dateToISO", require('./lib/parsers/nunjucks/filters/date-to-iso.js')); // Convert dates to  ISO format for html Dates
    eleventyConfig.addNunjucksFilter("dateToRFC", require('./lib/parsers/nunjucks/filters/date-to-rfc.js')); // Convert dates RFC for JSON feeds
    eleventyConfig.addNunjucksFilter("dateToW3C", require('./lib/parsers/nunjucks/filters/date-to-w3c.js')); // Convert dates to W3C format for XML feeds
    eleventyConfig.addNunjucksFilter("jsonify", require('./lib/parsers/nunjucks/filters/jsonify.js')); //Make it JSON friendly
    eleventyConfig.addNunjucksFilter("doubleToSingleQuotes", require('./lib/parsers/nunjucks/filters/double-to-single-quotes.js')); //Swap double quotes to singles so JSON remains valid

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
