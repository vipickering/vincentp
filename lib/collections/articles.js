module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/_content/articles/*.md",
        "src/_content/articles/legacy/*.md"
    ]);
});