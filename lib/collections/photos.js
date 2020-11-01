module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/photos/*.md"
    ]);
});
