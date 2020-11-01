module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/articles/*.md",
        "src/rsvp/*.md",
        "src/checkins/*.md",
        "src/favourites/*.md",
        "src/links/*.md",
        "src/notes/*.md",
        "src/photos/*.md",
        "src/replies/*.md",
        "src/weeknotes/*.md"
    ]);
});
