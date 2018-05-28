---
layout: "post"
title: "Fluid Type"
date: "2017-07-03 22:02:00 +/-GMT"
meta: "Make Your Type Scale With Your Screen Size In Proportion"
summary: "Make Your Type Scale With Your Screen Size In Proportion"
category: "Lifestream"
modified :
modifiedReason:
twitterCard: false
tags: "typography css html"
permalink : /blog/:title
---

Make type scale in proportion to the viewport size

px width is the min font size.

vw unit is your scale.

{% highlight css %}
h1{ font-size: calc(16px + 3.5vw); }
{% endhighlight %}
