---
layout : "category"
category : "Checkins"
permalink : "/checkins{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Checkins"
cardname: "cards/checkin.njk"
meta : "All content tagged Checkins by Vincent Pickering"
summary : "Places I've been, things I've seen"
type : "Checkins"
twitterCard: false
pagination:
    data: collections.checkins
    size: 10
    alias: posts
    reverse: true
---
