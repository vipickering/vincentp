const markdownIt = require('markdown-it');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItEmoji = require('markdown-it-emoji');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = (() => {
    let options = {
        html: true,
        linkify: true,
        typographer: true
    };

    let markdownLib = markdownIt(options)
        .use(markdownItEmoji)
        .use(markdownItFootnote)
        .use(markdownItAnchor)
        .use(markdownItAttrs, { leftDelimiter: '{', rightDelimiter: '}', allowedAttributes: ['id', 'class', 'hcard'] });

    markdownLib.renderer.rules.footnote_block_open = () => (
        '<div class="f-mono black f7 ttu" data-type="notes"><span>Notes</span></div>\n' +
        '<section class="footnotes">\n' +
        '<ol class="footnotes-list">\n'
    );

    return markdownLib;
})();
