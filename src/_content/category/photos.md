---
layout : "category"
permalink : "/photos{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Photos"
cardname: "cards/photo.njk"
meta : "All content tagged photo by Vincent Pickering"
summary : "Photo posts"
type : "Photos"
twitterCard: false
pagination:
    data: collections.photos
    size: 10
    alias: posts
    reverse: true
---
