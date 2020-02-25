const moment = require("moment");
const fs = require("fs");

module.exports = function(eleventyConfig) {
   // Configure Markdown
    let markdownIt = require("markdown-it");
    let markdownItFootnote = require("markdown-it-footnote");
    let markdownItEmoji = require("markdown-it-emoji");
    let markdownItAttrs = require('markdown-it-attrs');
    let options = {
        html: true,
        linkify: true,
        typographer: true
    };
    let markdownLib = markdownIt(options)
        .use(markdownItEmoji)
        .use(markdownItFootnote)
        .use(markdownItAttrs, { leftDelimiter: '{', rightDelimiter: '}', allowedAttributes: ['id', 'class', 'hcard'] });

    markdownLib.renderer.rules.footnote_block_open = () => (
    '<div class="f-mono black f7 ttu" data-type="notes"><span>Notes</span></div>\n' +
    '<section class="footnotes">\n' +
    '<ol class="footnotes-list">\n'
    );

    // Libraries
    eleventyConfig.setLibrary("md", markdownLib);

    // Configure Plugins
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
    eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'));

    //Collections
    eleventyConfig.addCollection("articles", function(collection) {
        return collection.getFilteredByGlob(["src/_content/articles/*.md", "src/_content/articles/legacy/*.md"]);
    });

    eleventyConfig.addCollection("checkins", function(collection) {
        return collection.getFilteredByGlob(["src/_content/checkins/*.md"]);
    });

    eleventyConfig.addCollection("favourites", function(collection) {
        return collection.getFilteredByGlob(["src/_content/favourites/*.md"]);
    });

    eleventyConfig.addCollection("links", function(collection) {
        return collection.getFilteredByGlob(["src/_content/links/*.md"]);
    });

    eleventyConfig.addCollection("notes", function(collection) {
        return collection.getFilteredByGlob(["src/_content/notes/*.md"]);
    });

    eleventyConfig.addCollection("photos", function(collection) {
        return collection.getFilteredByGlob(["src/_content/photos/*.md"]);
    });

    eleventyConfig.addCollection("replies", function(collection) {
        return collection.getFilteredByGlob(["src/_content/replies/*.md"]);
    });

    eleventyConfig.addCollection("rsvps", function(collection) {
        return collection.getFilteredByGlob(["src/_content/rsvp/*.md"]);
    });

    eleventyConfig.addCollection("weeknotes", function(collection) {
        return collection.getFilteredByGlob(["src/_content/weeknotes/*.md"]);
    });

    eleventyConfig.addCollection("lifestream", function(collection) {
        return collection.getFilteredByGlob(["src/_content/articles/*.md", "src/_content/articles/legacy/*.md", "src / _content / rsvp/*.md", "src/_content/checkins/*.md", "src/_content/favourites/*.md", "src/_content/links/*.md","src/_content/notes/*.md", "src/_content/photos/*.md", "src/_content/replies/*.md", "src/_content/weeknotes/*.md"]);
    });

    //Copy in to site
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/images');
    eleventyConfig.addPassthroughCopy('src/humans.txt');
    eleventyConfig.addPassthroughCopy('src/robots.txt');
    eleventyConfig.addPassthroughCopy('src/favicon.ico');
    eleventyConfig.addPassthroughCopy('src/browserconfig.xml');
    eleventyConfig.addPassthroughCopy('src/manifest.webmanifest');

    // Enable Deep Merge
    eleventyConfig.setDataDeepMerge(true);

    // Nunjucks Date formatter for pretty dates
    eleventyConfig.addNunjucksFilter("date", function(date, format) {
        return moment(date).format(format);
    });

    // Nunjucks convert dates to  ISO format for html Dates
    eleventyConfig.addNunjucksFilter("dateToISO", function(date) {
        return moment(date).toISOString();
    });

    // Nunjucks convert dates RFC for JSON feeds
    eleventyConfig.addNunjucksFilter("dateToRFC", function(date) {
        return moment(date).toDate().toUTCString();
    });

    // Nunjucks convert dates W3C for XML feeds
    eleventyConfig.addNunjucksFilter("dateToW3C", function (date) {
        return moment(date).format();
    });

    // Nunjucks convert content safe for JSON feeds
    eleventyConfig.addNunjucksFilter('jsonify', function (value, spaces){
        value = value.toString();
        const jsonString = JSON.stringify(value, null, spaces).replace(/</g, '\\u003c')
        return jsonString;
    });

    //  This is only needed in dev. Can we isolate it?
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function(err, bs) {
                const content_404 = fs.readFileSync('dist/404.html');
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
            output: 'dist',
            layouts: '_layouts'
        },
        templateFormats: ['njk', 'md'],
        passthroughFileCopy: true
    };
};