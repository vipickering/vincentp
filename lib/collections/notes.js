module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/notes/*.md"
    ]);
});
