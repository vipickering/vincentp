---
layout: post
title: "No More Spoilers"
date: 2017-02-20
meta: Stop spoiling yourself
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

```
<div class="spoiler">
    <div class="media">
        <p class="bojack-horseman">Princess Caroline, <span class="character">Vincent Adultman</span> <span class="outcome">is definitely 3 kids stacked on top of each other in a trench coat</span>.</p>
    </div>
</div>
```
Here we can see that we are specifying  the context of the spoiler is media. That the media name is "Bojack Horseman" and we are referencing a character and an outcome. This should imply that some event occurs related to that character.

The user would be able to add to their browser a watch-list of 'media names' to fuzzy filter on. Any the browser picks up you have flagged, would be hidden and require the user to click/tap to show the containing content.

Let take a look at another example:

```html
<div class="spoiler">
    <div class="sport">
        <p class="F1"><span class="name">Lewis Hamilton</span> <span class="outcome">wins</span> the <time class="event" datetime="2017-01-14">UK Silverstone Grand Prix</time>.</p>
    </div>
</div>
```

In this example we are specifying that it is a sport and the type of sport is F1. Again we relate an outcome and an individual (this time referenced with name), but here we relate it to a an event and date-stamp it.


We're on a roll now, lets do some more:

```html
<div class="spoiler">
    <div class="news">
        <p class="politics"><span class="name">Lewis Hamilton</span> <span class="outcome">wins</span> the <time class="event" datetime="2017-01-14">UK Silverstone Grand Prix</time>.</p>
    </div>
</div>
```



Browsers could implement easy way to set rules to auto parts omit content.

### Attributes
Type: Spoiler
Category: Media, Sport, Event
Content-type: Result, Individual, Information, News
Context: Name, Grouping (e.g Sci-Fi),
Date: YYYY-DD-MM

## User specified
A user can specify how long to hide the information for. This would use the current date as a starting point.
They can specify:

 - A particular day.
- A designated period.
- ’All’ time.
-
Duration: YYYY-DD-MM, Range, All.
