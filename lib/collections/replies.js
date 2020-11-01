module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/replies/*.md"
    ]);
});
