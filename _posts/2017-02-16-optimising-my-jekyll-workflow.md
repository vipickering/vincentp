---
layout: post
title: "Optimising My Jekyll Workflow"
date: 2017-02-16
modified: 2017-02-16
meta: Jekyll Workflow
summary: Where I discuss how I have optimised my Jekyll website, code-base and processes
category: Articles
---

## Jekyll, Netlify and HTTPS

In the last few years I have experienced the greatest degree of happiness and change in my life. I got married, blessed with a beautiful son and started my own business. It’s been an intense few years and It’s fair to say the blog has been a little unloved as a result.

I decided to begin by refocusing the site around user need. What can I provide to the user and how should I do it?

This question, caused me to look at every aspect of the site down to the smallest detail.

## HTTPS

I started with serving the site over HTTPS. Granted this blog is a static site built on Jekyll, there isn’t a whole lot to secure. But there are great speed benefits in serving over HTTPS and anything to assure the user they are in safe hands is a good thing.

I previously served this site, as many do, using GitHub pages. It’s no secret I found the process a little messy, but it was always better than dealing with FTP clients and the alternatives. This thought process lead me to the wonderful [Netlify](https://www.netlify.com/).

I found Netlify really easy to set-up and transition towards using. The process is quite simple, you give access to your code-base to Netlify and it watches your chosen branch. Every-time you push to the branch (it acts like Jenkins) and builds the repository and deploys it. Netlify allow you to configure HTTPS and some basic controls over your domain and your off!

This process is super simple to adapt in to your workflow and feels much more like a professional set-up, I simply work on my develop branch then merge to master and push when I want to deploy, Netlify handles the rest. [Their Pro tier is currently free](https://www.netlify.com/pricing) for all open source projects.

A small gotcha I found with Netlify. Make sure your Jekyll repo is in the root, and not contained within a folder, this ensures the watcher knows where to look and build from.

The easiest way to manage serving over HTTP locally and HTTPS in live is to create a site variable and assign this to your https domain. When you build locally this will be swapped out for ``` http://localhost:4000 ```.

## Further Speed Optimisations

HTTPS is a great start, coupled with a better deployment process to boot and keeping the site on GitHub so the code can remain open source. But we can do much more.

I looked at all the other content I was loading in to the page. Anything that wasn’t basic site structure or content was up for scrutiny.

### Custom Fonts

Previous iterations of this site used custom fonts loaded via CSS. Upon scrutinising this approach, I found I could serve a perfectly good font stack without the need for the extra loading and page weight. Font blocking is  a primary source of page slowdown and is especially noticeable on mobile. Anything we can do to mitigate against this (and maintain good legibility in out type) should be implemented.

### SASS And CSS

I took a good look at the current SASS I was using, it wasn’t written very well, and had been written quickly to get the site up and running. It did the job well enough (for what it was) but it wasn’t reflective of my abilities or had any care put in to it. I started again.

The goal of good CSS is to write as little as possible, make it easily maintainable, easy to read and above all the goal is not to need to continually add to  the code base. That last point is quite important and bears meditating upon for a moment. We don’t want to continually be adding to the code base. The code should be flexible enough to work within future additions, and not so overly prescriptive that it requires specific patterns for new tags added in unexpected places. We will revisit this point in a minute.

Upon re-thinking my whole approach to my CSS I came to a simple revelation. Why am I even using SASS at all?

SASS was created to polyfill things that CSS couldn’t (at the time) do. Variables, calculations etc. It’s a fair assumption to make that anyone reading my blog is in my industry, and therefore not a huge leap to assume they are using a modern browser. It seems silly to not embrace modern web standards and just write CSS. SASS is a needless abstraction these days and distances you from writing good code.

I settled on using [pleeease](http://pleeease.io/) a Post CSS plugin. Pleeease allows me to write CSS, but provides an Autoprefixer, file concatenation, minification and comments stripping. This gives me the modern tools I usually get without the tooling hassle, but allows me to keep close to my code. Since settling on this approach I haven’t needed to write SASS in a client project. SASS was only ever supposed to be a stopgap for the modern web developer, remember it isn’t a web standard, so I would question every projects real need to use it and scrutinise that decision pretty hard. It certainly still has a place in some projects, but it is no longer the only way to solve the issues it sets out to remedy.

I started by writing my own normalise.css file. As I mentioned previously, the aim is to write as little code as possible, then not need to add any code at a later date. The first step to doing this is to write your own file that resets and normalises elements to suit your own needs.


First let’s apply border-box to all elements, we get a lot of mileage out of declaring this and save writing it out over and over.

``` css
* {
    box-sizing: border-box;
}
```

Then set-up our CSS variables. If we assign all our variables at a root level, they can be applied easily to all cascading elements.

**Update 17-02-2017** :  Since posting this, I spotted a small error. Edge 14 doesn’t currently support CSS variables, the Edge team are [working on it](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/csscustompropertiesakacssvariables/) and support will be added very soon.

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

Now because this site is written mobile-first, we need to ensure that the baseline font is increased at the appropriate screen width for our body font.

``` css
@media all and (min-width: 640px) {
    :root {
        font-size: 15px;
    }
    ...
}
```

Finally the other notable point is my grid

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

Flexbox makes writing simple grid systems pretty lightweight, for desktop I tweaked the running order of the footer containers and re-assigned different min and max widths, simply like so.

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

A few simple rules such as this can go a long way and reduce your page weight significantly while keeping you close to your real CSS output.

You can see all my CSS code used on the blog [here](https://github.com/vipickering/vincentp/tree/master/_css). **I managed to reduce the entire CSS code-base down to 6KB** down from 20KB in the previous version.

### Google Analytics

Google Analytics seems like a given right? On all the professional sites I work on there is a business need to analyse what’s happening, so in most cases, GA is used.

On previous versions of this site I also used GA, my reasoning being it would be helpful to understand browser stats and usage. When  I examined this logic in more detail I found it pretty faulty.

I’ve only ever viewed the GA a few times, it hasn’t informed me on anything I didn’t already know, and ultimately I thought, what am I getting at the expense of tracking my users and slowing down their experience consuming my content?

The answer was nothing. So I removed it.

If there is a time in the future where I feel I *need* GA then I will revisit this decision, but tracking users and slowing down their experience when there isn’t a real need isn’t a good, honest approach to designing sites.

### Summary

Just by taking the time to question even seemingly innocuous decisions on a small blog, such as this, has yielded a much better, tighter code-base and resulted in a much faster experience for the end-user. I would encourage you to also look again at previous decisions and see what else you can improve.
