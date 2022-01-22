---
layout : "category"
category : "Photos"
permalink : "/photos{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber  | plus: 1}}{% endif %}/"
title : "Photos"
cardname: "cards/photo.njk"
meta : "All content tagged photo by Vincent Pickering"
summary : "Photo posts"
type : "Photos"
pagination:
    data: collections.photos
    size: 10
    alias: posts
    reverse: true
---
