---
layout : "category"
category : "Articles"
permalink : "/articles{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Articles"
cardname: "cards/article.njk"
meta : "All content tagged Articles by Vincent Pickering"
summary : "Articles & Written Work"
type : "Articles"
twitterCard: false
pagination:
    data: collections.articles
    size: 10
    alias: posts
    reverse: true
---
