module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/_content/links/*.md"
    ]);
});