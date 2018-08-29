---
layout: "post"
title: "Conversation Pollutant"
date: "2018-08-24 07:00:00 +/-GMT"
meta: "POSSE can be abusive"
summary: "POSSE can be abusive"
category: "Articles"
modified :
modifiedReason:
twitterCard: true
tags: "thoughts ux indieweb cybernetics social"
---

I am still stealing hours in the day implementing features of the indieweb to this blog. Finding time has been tricky and iIt has required a lot of learning on my part. Especially around servers and REST API interaction but I feel like I am getting there.

Given that I can only work in short bursts, it has allowed me time to reflect between the work on the "why" and "how" substantially.

The largest piece of the implementation is the webmentions endpoint, it's been quite complicated because this is a static blog hosted on Netlify, and not a dynamic server implementation. In order to get up and running quickly I implemented the POSSE side of things by creating a custom RSS feed and hooking it up to Zapier. This allowed me to syndicate content out to Social networks and Medium. It seemed like a win-win. But on reflection I think this is a bad mistake, and it highlights one of the problems where the Venn-diagram of  POSSE  and social networks overlap creating what I am calling "Conversation pollutants".

To illustrate why this is a problem we need to refer to the conversation model.

- POSEE is akin to someone shouting in the middle of another conversation and hoping people join in. This is also a problem inherently wrong with Twitter.
- Adding to the noise, isn't helping anyone and is the type of thing that gets technologies like POSSE a bad reputation. If I am tweeting "Check out my new blog post" this is no different to the Ads screaming for attention. It's abusing the way the social network can work in a positive manner for extra eyeballs on my blog post. Not great.
- Good POSSE is syndicating content to another website, such as syndicating your blog post to other blogging outlets such as: Medium. By working in this way we are not breaking the conversation model and ensuring the original owner of the content is referenced and respected.
- Bad POSSE snippets, bite-sized information thrown in to the void fishing for a response.
