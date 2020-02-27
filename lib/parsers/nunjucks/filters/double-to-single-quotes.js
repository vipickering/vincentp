module.exports = (function (content) {
    return content.replace(/"/g, "'"); //I can't do this using the Nunjucks replace filter. This will work for now!
});

