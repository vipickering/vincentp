---
layout: post
title: "Bridging The Gap Between the Physical and Virtual"
date: 2013-10-18
modified: 2013-10-18
meta: Use your name to design a website's look and feel
summary: I created a fun thing that generates a website based on your name
category: Articles
---

For most of my life, I have had a small personal obsession over influencing the virtual world with the real world, where the physical and virtual spaces overlap and begin to mingle, coalescing with each other based on factors from each.

This obsession has recently manifested itself in a small proof of concept project I like to call Fingerprint.

## There Is Only One Of You

Fingerprint was born from a passing thought I had one day while designing a login interface.

> What if the interface that was presented to the user, changed based on their login details?

As the thought expanded in my mind, I realised this is something that could go further, *much, much further*.

> When a user enters data in to your website or app they are feeding you information unique to their account, it's creating a digital legacy unique to them, so why not begin to shape the interface around that input?

## Leaving Your Mark

Fingerprint demonstrates the basic idea. It takes two strings, in this case your first and last name, but you can input anything (try it out!). It then turns each strings in to an MD5 hash.
These hashes are then used in various ways to generate:

- An identicon
- A typographic scale
- A fixed grid (following the same scale)
- A colour Scheme.

I find it quite addictive trying out various combinations and seeing how they look at a site. As a proof of concept, it encapsulates the reactive interface idea quite well, obviously for a customer facing site you could take it further: make the grid responsive, make the colour schemes more diverse, make the algorithm more complex and add more features.

## Reactive Interfaces

At a basic level we can use user data to shape branding, logos, typography and layout to make an experience unique to each user. Taking this idea further you can begin to evolve the interface as more data is collected. Time has elapsed or perhaps other services are connected to the account to shape it further.

For example:

> If a user (over a period of defined time) interacts very little with a particular toolbar, why not de-clutter the interface by hiding the toolbar and informing the user where it is hidden should they need it?

Age can also be something to consider (and will become a much larger issue in the near future):

> A user enters their DOB and we calculate it to be over 60, we could assume they have poorer eyesight than the average user and offer them a larger default font-size and typography selection to increase readability.

Or how about social services:

> If a user is tweeting far higher than the average number per hour, their followers could get a button that appears, allowing them to "vote for you to stop" enough of those votes received and you could start reducing the amount of characters they could type for each tweet. If the user persisted, it could enforce a delay in the tweets to space them out.

It feels like most sites and apps are generally built around input -> output with very little intelligence in between. We should be making interfaces that react and tailors themselves to users needs, that delight and surprise them at every turn. Offering unique experiences and delighters that make them want to share their experience with others. It's my belief it is time our interfaces became more intelligent, the technology is available and software is easy to write, hopefully I may have inspired you to think this way too.
