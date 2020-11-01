module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/articles/*.md"
    ]);
});
