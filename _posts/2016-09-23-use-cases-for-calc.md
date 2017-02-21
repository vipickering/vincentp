---
layout: post
title: "Use Cases For Css Calc"
date: 2015-09-23
meta: Some fun use cases for CSS Calc operator
---

## Vertical centre

If you know the height of the element, [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc){:rel="external"} can make it super simple to position an element vertical centre *and* respect a responsive layout.

By using this simple equation:

``` css
calc(50vh – 1/2 the height of element);
```

50vh is always half the height of the viewport, so we position the element half way down the screen. But this isn't the absolute centre because we haven't taken in to account the height of the object. So we need to remove half the height of the object from the distance to get the final result.

## 100% fluid width next to a fixed element

This is my most common use of calc, often used on layouts with main area and a sidebar, for example. When dealing with a responsive layout and we need one area to fill the space and the other to be a fixed width (which could also be controlled via media queries for extra flare).

Element 1, our fluid container, is simply calculated using the following formula:

``` css
calc(100% - width of element2);
```

So long as you are also using border-box, then adding padding, margins etc will also be taken in to account by the 100% width and automatically adjusted accordingly.

## Background positioning from the right side

[Chris Coyer](https://css-tricks.com/a-couple-of-use-cases-for-calc/){:rel="external"} has already covered this, but it's worth mentioning if you haven't seen it, since it can be useful occasionally.

Sometimes you want a background image to sit near but not absolutely in the bottom right corner of a container. Since background positioning is calculated from the top left corners, other work around or additional containers were needed to add the padding.

Calc can save this simply by doing the following:

``` css
calc(100% - padding desired);
```

So in the example below, we use calc to position the image all the way to the right then remove 50px and all the way to the  bottom then remove 20px to emulate the padding.

## 100% container, equally distribute multiple containers within the box and account for “tweaks”

A quite common design decision is to have multiple containers within a wrapping container. The inner containers will be a percentage width of the outer container, so are equally spaced. Given this scenario, you would usually just assign ```width:33%;``` to each container and move along. But sometimes, you want extra flexibility for those containers. For example, if you want each box to have a border, you then have to take this in to account as well.

Calc to the rescue again!

``` css
calc(100% / number of boxes – total margin size);
```

This means that the 3 containers will all be equally spaced within their parent container, and account for additional box modifications such as border.

## 100% fluid width accounting for negative margins

There are times when you want a child element to be 100% width of its parent container which has a negative margin. This is a pain, because the 100% width will not account for the negative margin and remove it from the calculation, thankfully calc can help:

``` css
calc(100% + margin width);
```

This simply makes the width a bit bigger than 100% to account for the negative value.

## Quick and dirty grid system

This is a development only technique and certainly isn't advisable for a live system, but if you need to put together a quick demo or technical proof of concept for your colleagues, calc can very quickly apply a rudimentary grid system in a few lines:

``` css
calc(100% / total columns on a row * columns it should span)
```

so we can simply do:

``` css
.col-1 { width:calc(100% /5*1); }
.col-2 { width:calc(100% /5*2); }
.col-3 { width:calc(100% /5*3); }
```
