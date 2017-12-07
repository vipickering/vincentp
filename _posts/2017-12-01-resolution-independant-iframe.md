---
layout: "post"
title: "Resolution Independant iframe"
date: "2017-12-01 22:00:00 +/-GMT"
meta: "How to scale an iFrame size in proportion to the screen size"
summary: "How to scale an iFrame size in proportion to the screen size"
category: "Tips"
---

Every so often you get encumbered with integrating with an iframe (usually for a 3rd party payment provider) on a client service.

Getting an iframe to display consistently in a resolution independent world has been a real pain. Usually involving horrible JS calculation hacks, or many CSS media queries trying to make the height of the window scale correctly to fit the content to the screen.

Fortunately there is a really easy way to solve this that works in all modern browsers and even works in IE 11. Viewport Units.

Setting the height (or width) of an iframe using viewport units will resize the iframe regardless of the viewport dimensions and make it fit every time.

```
iframe {
    width: 100%;
    height: 80vh;
}
```

In this code we set the iframe to 100% of the width of its parent container. We then set it to 80% of the height of the viewport to allow for space around the iframe (tailor this height to whatever suits).

Now we have an iframe that behaves consistently across multiple screen sizes and won't end up with extra scrollbars.
