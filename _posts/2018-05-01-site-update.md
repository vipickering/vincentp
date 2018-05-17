---
layout: "post"
title: "Site Updates"
date: "2018-05-01 14:20:00 +/-GMT"
meta: "Recent tweaks to the website"
summary: "Recent tweaks to the website"
category: "Lifestream"
modified :
modifiedReason:
twitterCard: false
tags: "Jekyll"
---

You might have noticed a few changes on the website recently. As part of my move towards supporting the [Indie Web](https://indieweb.org/){:rel="external"} I have made it easier to write long and short form blog posts, categorised separately.

I've also tried to enhance the reading experience on mobile, by reducing the header. This feels much cleaner and easier to dive in to.

[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout){:rel="external"}  is now adopted throughout the site, which has cut the code down considerably.

Javascript has been completely removed from the site. I used to still have code for my [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API){:rel="external"} running, having previously removed the tracking scripts and other JS code. It was fun to write a service worker, but I don't think it fits the use case for a blog. Content changes regularly requiring a highly complex system to flush the cache and ensure the user it viewing the latest version of the website. Given how much JavaScript it required to download in order to make this happen, it felt unnecessarily punishing for users wanting to read a quick article on mobile and downloading a lot of JavaScript they would never use again.

Service Workers are a great technology but I don't think (at this time) it makes sense to implement one in this context.

Finally, I've stopped using Feedburner for my feeds. You may need to resubscribe to the RSS links (at the bottom of the page) using your chosen type XML/JSON.

Moving forward this site will be the sole owner of the content on it, and syndicated to other platforms, but more on that in a future update :-)
