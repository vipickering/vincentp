module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/_content/checkins/*.md"
    ]);
});