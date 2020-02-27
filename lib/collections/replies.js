module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/_content/replies/*.md"
    ]);
});