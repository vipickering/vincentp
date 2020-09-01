---
layout: "home"
category : "home"
title: "Lifestream"
meta: "A blog about Service Design, My life, UX, Service Design, HTML, CSS and Javascript"
summary :  "A feed of my life"
permalink : "/{% if pagination.pageNumber > 0 %}/{{ pagination.pageNumber + 1}}{% endif %}/"
pagination:
    data: collections.lifestream
    size: 10
    alias: posts
    reverse: true
---
