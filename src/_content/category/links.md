---
layout : "category"
permalink : "/links{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Links"
cardname: "cards/link.njk"
meta : "All content tagged Links by Vincent Pickering"
summary : "Shared Links"
type : "Links"
twitterCard: false
pagination:
    data: collections.links
    size: 10
    alias: posts
    reverse: true
---
