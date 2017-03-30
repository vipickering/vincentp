---
layout: post
title: "Optimising My Jekyll Workflow"
date: 2017-02-16 00:00:01 +/-GMT
modified : 2017-03-15 22:00:00 +/-GMT
modifiedReason: to correct style, readability and punctuation
meta: Jekyll Workflow
summary: Where I discuss how I have optimised my Jekyll website, code-base and processes
category: Articles
---
## Jekyll, Netlify and HTTPS

Over the last 2 years I have experienced the greatest degree of happiness and change in my life. I got married, blessed with a beautiful child and started my own business. It’s been an intense couple of years and It’s fair to say the blog has been a little unloved as a result.

I decided to begin by refocusing the site around user need. What can I provide to the user and how should I achieve it.

This question, caused me to look at every aspect of the site down to the smallest detail.

## HTTPS

I started with serving the site over HTTPS. Granted this blog is a static site built on Jekyll, there isn’t a whole lot to secure. But there are great speed benefits in serving over HTTPS and anything to assure the user they are in safe hands is a good thing.

Prior, I served this site using GitHub pages. It is no secret I found the process a little messy, but it was always better than dealing with FTP clients and the alternatives. This thought process lead me to the wonderful [Netlify](https://www.netlify.com/).

I found Netlify easy to set-up and get underway.

Netlify works by granting access to your code-base on GitHub. It then watches your chosen branch and every-time you push to the branch (it acts like [Jenkins](https://jenkins.io)) and builds then deploys it.

Netlify allow you to configure HTTPS and some basic controls over your domain, which are all most people need.

This process is simple to adapt in to your workflow and feels much more like a professional set-up. Code is wrote on the develop branch then merged to master locally and pushed when I want to deploy. Netlify handles the rest and at the time of writing [their Pro tier is free](https://www.netlify.com/pricing) for all open source projects.

When working on Netlify make sure your Jekyll repository is in the root, and not contained within a folder. This ensures the watcher knows where to find the code.

I looked at all the other content I was loading in to the page. Anything that wasn’t basic site structure or content was up for scrutiny.

## Custom Fonts

Previous iterations of this site used custom fonts loaded via CSS. I decided to serve a native font stack without the need for the extra loading and page weight.

Font blocking is a primary source of page slowdown and is noticeable on mobile. Anything we can do to mitigate against this (and maintain good legibility in our type) is a good thing.

## Sass and CSS

I took a look at the current Sass I was using. it wasn’t written well, coded to get the site up and running. It did the job well enough (for what it was) but it wasn’t reflective of my abilities or had any care put in to it. I started again.

The goal of good CSS is to write as little as possible. Make code maintainable, easy to read and avoid continually adding to the code base. That last point is important. We don’t wish to continually add to the code base.

Create CSS flexible enough to work with future code additions. Not overly prescriptive to need specific patterns for future additions.

It’s a fair assumption that anyone reading my blog is in the web industry, and thus, not a leap to assume they are using a modern browser. I decided for this blog to embrace cutting edge web standards and just write CSS.

Sass can be a needless abstraction these days and distance you from writing good code. I settled on using [pleeease](http://pleeease.io/){:rel="external"} a Post CSS plugin.

Pleeease allows me to write vanilla CSS. But it also provides modern Post CSS tooling such as:

- Autoprefixer
- File concatenation
- Minification
- Comments stripping

This affords me the modern tools I need without abstraction and keeps me closer to my code.

Sass certainly still has a place in some projects, but it is no longer my way to solve the issues it sets out to remedy.

I started by writing my own ```normalise.css``` file. As I mentioned before, the aim is to write as little code as possible, then not need to add any code at a later date. The first step to doing this is to write your own file that resets and normalises elements to suit your own needs.

Apply border-box to all elements, we get a lot of mileage out of declaring this and save writing it out over and over.

``` css
* {
    box-sizing: border-box;
}
```

Set-up our CSS variables. Assigning all our variables at the root level applies to all cascading elements.

**Update 17-02-2017** :  Since posting this, I spotted a small error. Edge 14 doesn’t support CSS variables, the Edge team are [working on it](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/csscustompropertiesakacssvariables/){:rel="external"}.

``` css
:root {
    --black: rgba(17, 17, 17, 1);
    --grey: rgba(35, 35, 35, 1);
    --blue: rgba(213, 232, 243);
    --lightGrey: rgba(138, 138, 138, 0.5);
    --white: rgba(255, 255, 255, 1);
    --red: rgba(200, 53, 57, 1);
    --paleGrey: rgba(128, 128, 128, 0.08);
    --column-width: 35em;
    --heading-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --body-font: "Menlo", "Monaco", "Lucida Console", "Liberation Mono", "DejaVu Sans", "Mono", "Bitstream Vera Sans Mono", "Courier New", "monospace", serif;
}
```

Style the branches of the tree not each individual leaf. You will write a lot less code and be better for it.  If you style at the topmost level and let CSS naturally cascade down, you shouldn’t need to  assign things more than once.

``` css
:root {
    font-family: var(--body-font);
    background-color: var(--white);
    color: var(--black);
    font-size: 12px;
    text-rendering: geometricPrecision;
}
```

If the screen size is over 640px, increase the baseline font size, which will cascade to other elements.

``` css
@media all and (min-width: 640px) {
    :root {
        font-size: 15px;
    }
    ...
}
```

The other notable point is the grid.

``` css
body,
.grid {
    display: flex;
    flex-flow: row wrap;
}

body {
    padding: 40px;
}

body > * {
    display: block;
    padding: 0;
    flex: 1 100%;
    min-width: 240px;
    max-width: 620px;
}

.grid-header > * {
    display: block;
    width:100%;
}
```

Flexbox makes writing grid systems lightweight.

Screen sizes below 640px have the running order on the footer containers re-arranged.

``` css
@media all and (min-width: 640px) {
    body > * {
        margin: auto;
        max-width: 740px;
        min-width: 620px;
    }

    .grid-header > * {
        flex: 2 50%;
    }

    .grid-footer > * {
        flex: 3 33%;
    }

    .grid-footer > nav {
        order: 2;
    }

    .grid-footer > address {
        order: 3;
        text-align: right;
    }

    .grid-footer > small {
        order: 1;
    }

    .grid-footer > :nth-child(0n+1) {
        text-align: left;
    }
}
```

Simple rules such as this can go a long way and reduce your page weight, while keeping you close to your real CSS output.

You can see all my CSS code used on the blog [here](https://github.com/vipickering/vincentp/tree/master/_css){:rel="external"}. **I managed to reduce the entire CSS code-base down to 5KB** down from 20KB in the previous version.

## Google Analytics

User tracking seems like a given. On all the professional sites I work on there is a business need to analyse what is happening.

Previous versions of this site had Google Analytics implemented. My reasoning being it would be helpful to understand browser stats and usage. When I examined this logic in more detail I found it faulty.

During the time the blog has been running I have viewed the Google Analytics a handful of times. Viewing the data has not informed me of anything relevant to my needs.

Slowing down the users experience at the expense of tracking when I didn't have a user need for their data was wrong. This lead me to delete the code.

In the future, if I feel the *need* for Google Analytics then I will revisit my decision. Degrading the user experience doesn‘t seem an honest approach to designing sites.

## Summary

By taking the time to question seemingly innocuous decisions made years ago on a small blog such as this. Yielded a better, tighter code-base and resulted in a faster experience for the end-user. I would encourage the reader to look again at previous decisions and see what else they can improve.
