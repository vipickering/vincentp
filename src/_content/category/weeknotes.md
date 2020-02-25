---
layout : "category"
permalink : "/weeknotes{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Weeknotes"
cardname: "cards/article.njk"
meta : "All content tagged Articles by Vincent Pickering"
summary : "Weeknotes"
type : "Weeknotes"
twitterCard: false
pagination:
    data: collections.weeknotes
    size: 10
    alias: posts
    reverse: true
---
