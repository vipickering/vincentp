---
layout : "category"
category : "Favourites"
permalink : "/favourites{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Favourites"
cardname: "cards/favourite.njk"
meta : "All content tagged Favourites by Vincent Pickering"
summary : "Things I like"
type : "Favourites"
twitterCard: false
pagination:
    data: collections.favourites
    size: 10
    alias: posts
    reverse: true
---
