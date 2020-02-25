---
layout : "category"
permalink : "/notes{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
title : "Notes"
cardname: "cards/note.njk"
meta : "All content tagged Notes by Vincent Pickering"
summary : "Short form notes"
type : "Notes"
twitterCard: false
pagination:
    data: collections.notes
    size: 10
    alias: posts
    reverse: true
---
