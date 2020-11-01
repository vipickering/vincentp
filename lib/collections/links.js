module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/links/*.md"
    ]);
});
