---
layout: post
title: "Improving Accessibility With Dynamic Text Support"
date: 2017-04-21 00:00:01 +/-GMT
meta: Adding support for dynamic text.
summary: Improving the site accessibility support using Dynamic Text in iOS.
category: Articles
---

Today I finally got some spare time to spend to fix many of the small niggles I have had with the typography on the site.

During testing I resized the text on iOS, using the Accessibility slider (General -> Accessibility -> Larger Text) and noticed nothing changed.

Whoops. It seems I forgot to support Dynamic Text.

If your not familiar with Dynamic Text on iOS, this is Apple's accessibility solution to resizing text across native apps. Change the text in one place and it increases across all the apps that support it in one go. Pretty neat.

A lesser known fact is that it is [also works in Safari](https://webkit.org/blog/3709/using-the-system-font-in-web-content/). Previously, this was a bit of a pain to add support for due to the way it's implemented. Let me explain.

We can support Dynamic Text by writing ***any of the following*** in our CSS:

```
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
```

However, you will notice this is the short-hand method. It is actually setting quite a few things under the hood dynamically:

- font-family
- font-weight
- font-size
- font-style
- font-variant

If you try to hard-code these individual properties, you will start to override the values Dynamic Text will assign. Particularly if you set font-size, it will break completely. When supporting Dynamic Text in the past, you would be enveloped in a Jenga-like series of Stylesheets and rules to try and apply custom fonts, in the right circumstances and for iOS serve different font properties.


In order to provide a high level of accessibility and legibility I already use a font stack that supports native fonts:

```
:root {
    font-family: -apple-system-body, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
```

So all I needed to do was update my stack to override my pre-set values if Dynamic Text has been turned on.

These days this is *much easier* using ```@supports```

All I had to do was add the following code at the end of my file, which ensures *if* the user has turned on Dynamic Text, pre-set values will be overridden and Dynamic values used.

```
@supports (font: -apple-system-body) {
    :root {
        font: -apple-system-body;
    }
}
```

If you have access to iOS give it a try and [let me know what you think]({{site.data.author.twitter.url}}).

