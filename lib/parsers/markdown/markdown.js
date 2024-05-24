const markdownIt = require("markdown-it");
const footnote = require('markdown-it-footnote');
// const emoji = require('markdown-it-emoji');
const attrs = require('markdown-it-attrs');
const anchor = require('markdown-it-anchor');

module.exports = (() => {
    let options = {
        html: true,
        linkify: true,
        typographer: true
    };

    let markdownLib = markdownIt(options)
        // .use(emoji)
        .use(footnote)
        .use(anchor)
        .use(attrs, { leftDelimiter: '{', rightDelimiter: '}', allowedAttributes: ['id', 'class', 'hcard'] });

    markdownLib.renderer.rules.footnote_block_open = () => (
        '<div class="f-mono black f7 ttu" data-type="notes"><span>Notes</span></div>\n' +
        '<section class="footnotes">\n' +
        '<ol class="footnotes-list">\n'
    );

    //Support Twitter handles. Anything preceeded by @ symbol in markdown will be rendered as a Twitter link
    // markdownLib.linkify.add('@', {
    //     validate: function (text, pos, self) {
    //       var tail = text.slice(pos);

    //       if (!self.re.twitter) {
    //         self.re.twitter =  new RegExp(
    //           '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
    //         );
    //       }
    //       if (self.re.twitter.test(tail)) {
    //         // Linkifier allows punctuation chars before prefix,
    //         // but we additionally disable `@` ("@@mention" is invalid)
    //         if (pos >= 2 && tail[pos - 2] === '@') {
    //           return false;
    //         }
    //         return tail.match(self.re.twitter)[0].length;
    //       }
    //       return 0;
    //     },
    //     normalize: function (match) {
    //       match.url = 'https://twitter.com/' + match.url.replace(/^@/, '');
    //     }
    //   });

    // Anything preceeded by # symbol and prefix it with the tag url
      markdownLib.linkify.add('#', {
        validate: function (text, pos, self) {
          var tail = text.slice(pos);

          if (!self.re.tagsy) {
            self.re.tagsy =  new RegExp(
              '^([a-zA-Z0-9_]){1,15}(?!_)(?=$|' + self.re.src_ZPCc + ')'
            );
          }
          if (self.re.tagsy.test(tail)) {
            // Linkifier allows punctuation chars before prefix,
            // but we additionally disable `#` ("##mention" is invalid)
            if (pos >= 2 && tail[pos - 2] === '#') {
              return false;
            }
            return tail.match(self.re.tagsy)[0].length;
          }
          return 0;
        },
        normalize: function (match) {
          match.url = 'https://vincentp.me/tags/' + match.url.replace(/^#/, '');
        }
      });

    return markdownLib;
})();
