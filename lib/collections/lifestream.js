module.exports = (function (collection) {
    return collection.getFilteredByGlob([
        "src/_content/articles/*.md", 
        "src/_content/articles/legacy/*.md", 
        "src/_content/rsvp/*.md", 
        "src/_content/checkins/*.md", 
        "src/_content/favourites/*.md", 
        "src/_content/links/*.md", 
        "src/_content/notes/*.md", 
        "src/_content/photos/*.md", 
        "src/_content/replies/*.md", 
        "src/_content/weeknotes/*.md"
    ]);
});