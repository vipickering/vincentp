---
layout : "category"
permalink : "/rsvp{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Events"
cardname: "cards/rsvp.njk"
meta : "All content tagged RSVP by Vincent Pickering"
summary : "My attendance to events"
type : "Rsvp"
twitterCard: false
pagination:
    data: collections.rsvps
    size: 10
    alias: posts
    reverse: true
---
