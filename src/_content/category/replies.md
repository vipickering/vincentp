---
layout : "category"
permalink : "/replies{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Replies"
cardname: "cards/reply.njk"
meta : "All replies by Vincent Pickering"
summary : "All replies by Vincent Pickering"
type : "Replies"
twitterCard: false
pagination:
    data: collections.replies
    size: 10
    alias: posts
    reverse: true
---
