---
title: "Fluid Type"
timezone: "GMT"
date: "2017-07-03T22:02:00Z"
meta:  "Make Your Type Scale With Your Screen Size In Proportion"
summary: "Make Your Type Scale With Your Screen Size In Proportion"
permalink: "/blog/fluid-type/"
tags:
- typography
- css
- html
---

Make type scale in proportion to the viewport size

px width is the min font size.

vw unit is your scale.

{% highlight css %}
h1{ font-size: calc(16px + 3.5vw); }
{% endhighlight %}
