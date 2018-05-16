---
layout: post
title: Solving Twitters Mixed Metaphors
date: 2013-07-11 00:00:01 +/-GMT
meta: How to solve the problem of intent in a textual medium
summary: Where I discuss Twitters mixed UI metaphors.
category: Articles
modified :
modifiedReason:
twitterCard:
tags: "UI UX Process Thoughts"
---

It's highly likely that you found this blog post through Twitter, or at the very least you use Twitter on a daily basis. As social networks go, it's the one that has hit the sweet spot, indispensable for disseminating information and finding like minded people. Every day millions of people use it, every day somebody somewhere says something that grabs other peoples attention and at that point they reach for the "favourite" and "re-tweet" buttons…And that's when UX people like myself start to get a bit 'twitchy'.

## What's in a word?
Ever since the early days of Twitter the "favourite" button has bothered me, it's a confused metaphor that doesn't really know what it is. Try the following question to a group of people you know:

When you click the favourite button on a tweet are you:

1.  "Liking" the tweet, in the same way you use the Like Facebook button or +1 on Google Plus?

2.  Bookmarking the tweet, saving it for later?

I guarantee the answers will be mixed, especially if you ask a group of non-technical people. The problem really doesn't lie in the question or the users, is the dual use of this button to do both things in the context of Twitter where the metaphor breaks down and users are confused.

Extrapolating this further, let's look at some Use Cases for people pressing the favourite button in its current format and why that might be a bad idea.

## Scenario 1: The Blogger

-  User sees in their stream a series of controversial tweets from someone in the public eye. They disagree with them greatly and want to bookmark them for a blog post later.
-  The user clicks "favourite" on each tweet.

Clicking "favourite" isn't something that makes sense when you simply want to save something for later, the metaphor breaks down and is confusing, Twitter newbies are often unaware they can save a tweet at all.

## Scenario 2: Public Relations

-  A user is upset with a service and tweets at the company's Twitter account of the product to register their dis-satisfaction while pointing out a problem with the service received.
-  The Public relations person, responds to the tweet to placate the customer but would also like to bookmark this conversation for future reference, so they "favourite" the tweets.

In this scenario not only is the company "favouriting" a complaint against their own company, this favourite is publicly available on their Twitter stream for all their customers to see! It's hardly an ideal scenario for a company (or individual for that matter) to be saying:

"I like this complaint against me, so much I favourited it!"

By now, it's clear "favourite" and bookmark in a social context shouldn't really be mixed. If you favourite something for bookmarking purposes on a publicly available channel can send mixed messages to friends, followers or even worse to clients, but re-tweeting is totally fine and makes sense, that's still ok…Right?
Um. No. Sorry, it's also a muddled mess.

## Share and Share Alike
Re-tweeting is an odd beast, the first instinct is to think that if someone in your stream re-tweets something that implies automatic buy-in to the tweet.

"I like this, you should read it".

But this isn't the case, people re-tweet controversial views or opinions diametrically opposed from their own, not with the intent of agreeing but to try and co-opt opinion that the tweeters view is wrong and attempting to gain public acceptance that their opposing view is correct.

In essence, when debate happens opposing views are repeated by opposing parties as well as the people who hold that opinion, it's a natural part of debate and conversation. Repeating a view doesn't imply agreement with that view.

Use Case time!

## Scenario 1: Celebrity Faux Pas

-  Female celebrity X tweets "If you're not size zero, it's time to hit the gym".
-  Female celebrity x tweets "Double-D's too, seriously girls get some".
-  Women's rights group re-tweets both messages.
-  Women's rights group responds to female celebrity X "comments like that degrade women everywhere, be happy with who you are".

In this instance, the women's rights group is implying the context of disagreement by who they are, but not everyone may be familiar with their organisation and understand their position unless they read the final tweet back to the celebrity. Re-tweeting isn't implying agreement and context is unclear if all parts of the conversation are missing from a user's stream.

## Scenario 2: The big announcement

-  A popular band announces they are reforming for one last show.
-  Their followers all re-tweet the announcement.

In this scenario users are implying "I like this tweet, I have to share it". Re-tweeting in this scenario does imply agreement and a desire to share the "good news".

It's not quite as straight forward as it should be is it? Both these buttons have dual implications. You can't even rely on combining both buttons interactions as a valid context. It's perfectly plausible to re-tweet something you disagree with and bookmark it for future reference but to your followers it appears as if you "like" it and have shared it with them. The complete opposite to your intention.

## Connecting The Dots

What we need to do is:

-  Maintain all the existing functionality.
-  Remove the ambiguity around what "favouriting" is.
-  Add context to re-tweeting so intent is obvious.

What we want to do is show intent when a user clicks, we can do this by separating out functionality of bookmarking a tweet and "liking".

<figure>
  <figcaption>The bookmark link has been added, and in return the favourite button has been removed</figcaption>
  <img src="{{site.url}}/images/blog/2013-07-11/tweet-bookmark.jpg" alt="A tweet with the bookmark link added and favourite button removed" />
</figure>

OK, so now we have our bookmark link <sup><a href="#point1" class="reference--number">1</a></sup>, but by removing the "favourite" link we have lost the liking functionality.

Firstly we need to change the use of the term favourite, even with a bookmark link it is still an ambiguous word <sup><a href="#point2" class="reference--number">2</a></sup>. It's also worth bearing in mind that in order to add context to a re-tweet we will also need an opposite button.

## Enter "Sentiment" buttons.

I mulled over the terms for these buttons for quite some time before arriving at these options. In the context of Twitter we want to show our feelings without causing offence. Conversation is a two way street and introducing terminology that punishes or isolates people's opinions will only push those opinions somewhere else. Encouraging discussion moves society forward and that's the positive we want from this.

<figure>
  <figcaption>A quick and dirty mock-up to show how sentiment could work in a tweet.</figcaption>
  <img src="{{site.url}}/images/blog/2013-07-11/tweet-sentiment.jpg" alt="A tweet to show how sentiments could work" />
</figure>

In the end, my thought process arrived at "Loved" and "Unloved". These terms are used in normal conversation all the time and imply a term stronger than "like" or "dislike" but also allow room for perspective to change that viewpoint. The essence of how the buttons work is baked in to the terminology and should help to clarify each buttons purpose.

It's an obvious solution in some respects, but sometimes all that's needed is a gentle nudge to make a good thing great.

<ol>
  <li id="point1" class="reference">The bookmark link would save a tweet to a private list of tweets for reference later.</li>
  <li id="point2" class="reference">Let's not forget the I.E. term for bookmarks is favourite.</li>
</ol>
