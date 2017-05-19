---
layout: post
title: "Jekyll Blog Speed"
date: 2017-05-19 12:00:00 +/-GMT
meta: Jekyll .
summary: Reducing the time to first paint on my Jekyll blog
category: Articles
---

I decided to set myself a challenge.

Over the past few weeks, I have spent pockets of time reducing the overall page weight as much as I possibly can and decreasing the <a href="https://github.com/tdresser/time-to-first-meaningful-paint" title="read more about time to meaningful first paint">Time To Meaningful First Paint</a>.

My current score on Google's [Lighthhouse](https://developers.google.com/web/tools/lighthouse/) plug-in was 84 out of 100. This wasn't a bad score, but I knew I could easily get to 100 out 100 by adding a service worker.

I've been wanting to implement a Service Worker on my site for some time now.

I spent some time reviewing other people's work. Service Workers are not a new technology and I knew others would already have solved most of the major problems. [Jeremy Keith](view-source:https://adactio.com/serviceworker.js) has a really nice implementation I liked, but it felt a little overkill for what I required. My basic need was to cache a few pages for offline use, and for any other requests to be directed to an offline page.

After further digging I decided to use [Harry Roberts](https://csswizardry.com/sw.js) implementation and tweak a few things. This made sense as Harry also has a Jekyll blog and his needs are much the same as my own.

After implementing the service worker I achieved the 100 score on the Lighthouse plug-in. But I knew I could go further.
