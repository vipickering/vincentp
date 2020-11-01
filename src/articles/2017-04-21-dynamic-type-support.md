---
title: "Improving Accessibility With Dynamic Text Support"
date: "2017-04-21T16:15:00Z"
timezone: "GMT"
meta:  Adding support for dynamic text.
summary: Improving the site accessibility support using Dynamic Text in iOS.
permalink: "/blog/improving-accessibility-with-dynamic-text-support/"
tags:
- typography
- css
- jekyll
- html
---
Today I got some spare time to spend fixing the small issues I have had with the typography on the site.

During testing I resized the text on iOS using the Accessibility slider.

```(General -> Accessibility -> Larger Text)```

I noticed the text didn't resize. Whoops. It seems I forgot to support Dynamic Text.

If your unfamiliar with Dynamic Text on iOS this is Apple's accessibility solution to resizing text across native apps. Change the text in one place and it increases across all the apps that support it in one go. Pretty neat.

A lesser known fact is that this [works in Safari](https://webkit.org/blog/3709/using-the-system-font-in-web-content/). In the past it was problematic to add support in this way due to the way Dynamic Text is implemented. Let me explain.

We can support Dynamic Text by writing any of the following in our CSS:

{% highlight css %}
font: -apple-system-body;
font: -apple-system-headline;
font: -apple-system-subheadline;
font: -apple-system-caption1;
font: -apple-system-caption2;
font: -apple-system-footnote;
font: -apple-system-short-body;
font: -apple-system-short-headline;
font: -apple-system-short-subheadline;
font: -apple-system-short-caption1;
font: -apple-system-short-footnote;
font: -apple-system-tall-body;
{% endhighlight %}

You will notice this is the short-hand method. It is actually setting multiple properties under the hood dynamically:

- font-family
- font-weight
- font-size
- font-style
- font-variant

Attempting to hard-code the individual properties will start to override the values Dynamic Text will assign. When supporting Dynamic Text in the past you would be enveloped in a Jenga-like series of Stylesheets and rules to try and apply all your desired font rules.


To provide a high level of accessibility and legibility I already use a font stack that supports native fonts:

{% highlight css %}
:root {
    font-family: -apple-system-body, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
{% endhighlight %}

All I needed to do was update my stack to override my pre-set values if Dynamic Text has been turned on.

These days it is much easier using ```@supports```

All I had to do was add the following code at the end of my file.

{% highlight css %}
@supports (font: -apple-system-body) {
    :root {
        font: -apple-system-body;
    }
}
{% endhighlight %}

This ensures if the user has turned on Dynamic Text then pre-set values will be overridden and the Dynamic values used.
