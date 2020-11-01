---
title: "Site Update"
timezone: "GMT"
date: "2017-07-06T08:00:00Z"
meta:  "Redesigning my site to be faster, better, smaller"
summary: "Redesigning my site to be faster, better, smaller"
permalink: "/blog/site-update/"
tags:
- jekyll
- html
- css
- process
- tools
---

It takes time to understand how to represent yourself through design. It takes even more time if you consider that the code you produce must also be a true representation of your abilities. Harder still, if  you want to write as little code as possible.

In redesigning the site I made the following decisions:

- It must be faster to download than before.
- Overall payload per page must be smaller.
- The visual aesthetic needs to improve greatly and better represent myself.

I think I managed to achieve all three.

The size of the CSS is down to 1.5kb (Gzipped). I achieved this by rolling my own functional CSS approach similar to [Tachyons](https://tachyons.io). I could reduce this further by replacing the Jekyll rendering with my own that supports my CSS. But at this point it feels like the amount of effort required might not be worth 0.5kb.

Functional CSS has totally won me over as a method to deliver CSS. It is smaller, compact and doesn't suffer from bloat that traditional BEM &amp; OOCSS approaches have.

Overall average payload is down to 12kb per page, which is extremely fast over a slow connection.

I Implemented CSS grid in a few places which reduced my code. Edge support is dropping any time now and I don't support IE11 with this site, so it seemed like a good time to use the new tech.

I found CSS grid to be pretty good, but there are a few caveats. I always mark my page up correctly, then apply the CSS. Using CSS Grid you can't pass through or ignore a div, which can lead to some frustrating situations when you want to apply a grid to the whole site but those pesky ```<main> ``` ```<header>``` ```<footer>``` tags get in the way.

It seems at the moment the solution is to roll several smaller grids, which seems like a poor compromise to me. It  is definitely a step forward, but not quite far enough.

Behind the scenes I am still playing with aspects of [The Indie Web](https://indieweb.org/) and a number of other technologies deciding what I want to implement. It is important to live with a new tech for a while before rolling it out when confident or implementation can become a mess.

I've added a new sections [Tips](/categories/tips). Where byte sized information will live whenever I have something that I think is helpful but doesn't warrant a full post. ~~I will also push the Tip out to my Twitter account~~.

Twitter account is now deactivated.
