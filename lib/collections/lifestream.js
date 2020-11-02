module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/articles/*.md",
        "src/notes/*.md",
        "src/photos/*.md"
    ]);
});
