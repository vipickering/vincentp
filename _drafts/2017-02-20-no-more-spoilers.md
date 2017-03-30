---
layout: post
title: "No More Spoilers"
date: 2017-02-20 16:50:00 +/-GMT
meta: Stop spoiling yourself
summary: Where I discuss various ways we could mark up spoilers
category: Articles
---

It's a familiar feeling. You open your browser and navigate to a website, as you scan down the page for articles to read, you see it.

The sports result you were trying to avoid, an important plot point to a TV show you haven't got round to viewing or the ending to a movie that isn't even released in your country yet.

A stream of information that never stops, that contains information from future time-zones, people with different priorities to your own, that really want to talk about the thing your life hasn't yet had time to accommodate.

Any attempt to complain about the situation leads to arguments such as:

> It already happened, it's fair game to talk about it.

This type of situation is particularly problematic around:

- Movies - the vast majority of blockbuster movies can be released up to 6 months ahead of Europe.
- TV Shows - even though it can only be 1-2 weeks ahead, that is often for premium channel subscribers, others can be up to 1 year behind.
- Sports Results - busy lives and jobs mean that often we can't experience a sporting event live. Technology gives us the ability to watch whenever, but to accidentally discover the result before even engaging in the content.

These are probably the biggest problems that come to mind, but I am sure there are plenty of others.

It should be up to the individual, not a headline grabbing journalist or loudmouth blogger to decide to read the content.

Until the user visits the website, how could they know that they could get spoiled at all. I've lost track of the number of times I've visited a seemingly unconnected blog to view one piece of content and instead been confronted by a spoiler for something unrelated, because the blogger decided they wanted to talk about it.

*We need a [micro-format](http://microformat.org) to allow users to consume content in the way they wish and not have it spoiled by others*. At the same time we need to permit others who wish to engage with the content to be unimpeded.

### Implementation

This is how I would envision a spoiler mechanism working:

``` html
<div class="spoiler">
    <div class="media">
        <p class="bojack-horseman"><span class="individual">Your boyfriend</span> <span class="outcome">is very obviously three kids stacked on top of each other under a trench coat.</span></p>
    </div>
</div>
```
Here we can see that we are specifying  the context of the spoiler is media. That the media name is "bojack horseman" and we are referencing an individual and an outcome. This should imply that some event occurs related to that individual.

The user would be able to add to their browser a watch-list of 'media names' to fuzzy filter on. Any the browser picks up you have flagged, would be hidden and require the user to click/tap to show the containing content.

Let take a look at another example:

``` html
<div class="spoiler">
    <div class="sport">
        <p class="F1"><span class="individual">Lewis Hamilton</span> <span class="outcome">wins</span> the <time class="event" datetime="2017-01-14">UK Silverstone Grand Prix.</time></p>
    </div>
</div>
```

In this example we are specifying that it is a sport and the type of sport is F1. Again we relate an outcome and an individual (this time referenced with name), but here we relate it to a an event and date-stamp it.

We're on a roll now, lets do some more:

``` html
<div class="spoiler">
    <div class="video-game">
        <p class="super-mario-bros"><span class="outcome">Princess Peach is in another castle.</span></p>
    </div>
</div>
```

Sometimes all we care about is the outcome and the context of that event. We can shield the user's eyes from accidentally discovering important information simply as above.

But what if we are discussing something obscure or it's hard to contextualise?

``` html
<div class="spoiler">
    <div class="comment">
        <p>The lizard people are everywhere</p>
    </div>
    <div class="comment">
        <p>My bus driver is definitely acting strange</p>
    </div>
</div>
```

We could simply classify the whole conversation as a spoiler and add no further context. The browser could hide everything and allow the user to reveal the content they wished to read.

Browsers could implement easy ways to allow the user to configure rules and omit/hide content, that they don't want spoiled, such as specifying TV shows, or sports they are interested in.

The proposed data structures could work as follows:

### Attributes

``` yml
Type: spoiler
Category: media
Tags: title, individual, outcome

Type: spoiler
Category: sport
Tags: type, individual, outcome
Event Date: YYYY-DD-MM

Type: spoiler
Category: video game
Tags: title, individual, outcome

Type: spoiler
Category: event
Tags: title, individual, outcome
Event Date: YYYY-DD-MM
```

## Further Ideas
A browser could allow a user to specify how long to hide the information for.

They could specify to hide data until:

- A particular day.
- A designated period.
- ’All’ time.
- X days/hours until after the event date.
