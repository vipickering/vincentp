---
layout: "post"
title: "Modal No JS"
date: "2018-04-16 16:00:00 +/-GMT"
meta: "Create a modal without the need for JavaScript"
summary: "Create a modal without the need for JavaScript"
category: "Notes"
modified :
modifiedReason:
twitterCard: false
tags: "css html"
permalink : /blog/:title
---

In general a modal as a UX mechanisim is bad, but there are a few edge cases where they serve a viable purpose on your website.

Recently I had to create a modal for a client that required no JavaScript. Here is how I solved it.

<p data-height="265" data-theme-id="0" data-slug-hash="wmVpXv" data-default-tab="css,result" data-user="vipickering" data-embed-version="2" data-pen-title="Modal - NoJS" class="codepen">See the Pen <a href="https://codepen.io/vipickering/pen/wmVpXv/">Modal - NoJS</a> by Vincent Pickering (<a href="https://codepen.io/vipickering">@vipickering</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Essentially, I am using a radio button to act as the mechanisim to show/hide an overlay. In this case an SVG blur is drawn over the content to prevent clicking, and its content is stacked above it.

I haven't found an issue with this working in modern browsers, or mobile browsers yet. It may be a solution you find useful.
