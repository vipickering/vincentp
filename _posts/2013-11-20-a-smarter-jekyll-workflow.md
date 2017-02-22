---
layout: post
title: "A Smarter Jekyll Workflow"
date: 2013-11-20
meta: A process to work quickly and easily with Jekyll.
summary:  Trying to work better with Jekyll
---

I selected [Jekyll](http://jekyllrb.com){:rel="external"} as the platform for my blog after trying out many other options. It's a great blogging platform, and its balancing between code flexibility and simple blogging software really hits my sweet spot.

One of the major selling points with Jekyll, is the tight integration with [Github Pages](http://pages.github.com){:rel="external"}. The easy deployment and removal of dealing with terrible hosting companies, FTP servers and all the usual deployment issues are a huge boon, especially when most people blog in their spare time. The last thing you want to deal with at 1AM is a server that has exceeded its bandwidth and gone down.

## Life Is Always Messy

The problem where this falls down is around the separation of development and live environments, it's fairly common to be working locally on material you are uncomfortable publishing to live because it isn't finished while working on a patch for a bug. During your free time you want to be productive because you get so little of it, so unlike your day job you might blog a bit, then code a bit, whatever takes your fancy.

## All Your Plans Unravel

The recommended approach for using Jekyll with Github is to do all your development on a separate branch because your site is hosted on the master branch.

The theory goes that you develop a separate branch, but only commit the compiled code in to the master branch to be served. But when you start to apply that to a personal time-sensitive environment unless you remain incredibly disciplined, having eleventy-billion branches on the go becomes the norm as you try things out, some things work, some gestate and others are failed experiments, but it does become a headache and will inevitably lead to hours of manually merging code later.

It starts to feel like the recommended approach is a bit of a bastardization of the Github branching methods to satisfy two environments on one repo.

## Time To Fix This

I hate bad workflows, and I do not want to give up my ability to play with code and release often and still blog without getting tangled in which branch needs to be merged in what order to, ugh **kill me now**.

So I came up with a simple stripped down way to have my cake and eat it.

I tried quite a few approaches to making this work (even looking at Git sub-modules) but ultimately settled on two repos. Now I know that make some developers frown to have your code in two places but bear with me the logic is reasonably sound and it makes things much easier to manage.

I have a development environment, this is my standard Jekyll environment and repo. I created a sub folder called website and run Jekyll here so that I can add elements to the repo (such as a README that will not get compiled by accident). In here I develop locally, play with code and try things out, I commit often but I don't have to worry if I swap and change between an unfinished blog post, code fix, update or anything else, I just write and commit, nothing gets lost, I can pick it up on another machine and carry on without getting myself tangled in knots.

My second repo is my live site. This is my Github pages site and only contains the compiled live code, plus things like a CNAME file and various live only files.

The final piece to the puzzle is that I have a very simple <a href="#automater">Automater</a> script that watches the _site compiled folder and copies the data in this to the live site repo. Automater is one of those tools that is quite powerful and often gets overlooked. It worth learning it can save you quite a lot of time in the long run, think [Grunt](http://gruntjs.com){:rel="external"} but for system tasks.

When it comes to deploying code from dev to live, I use Jekyll's inbuilt method of hiding files on compile. If you are not sure how this works all you simply need to do is add an underscore in-front of each file or folder you don't want live, these are then ignored by Jekyll when compiling.

Once I have done this I simply delete all the Jekyll files from the live repo, regenerate the site and commit.

The entire process becomes very quick, it keeps your commits clean and targeted so you are always aware what is and isn't in your committed code and not a branch swap in sight, everything is in the master. The beauty of this approach also means if you really want to use a branch on the development repo you still can, it's not getting in the way of your usual use of Github it's just abstracting the live deploy from the branching mess you had to begin with and giving you the freedom to use Github to it's full power.

You also get the added bonus that your live site is self-contained so should you ever decide to not host it on Github you can just upload it where ever you like and keep using your dev environment set up as is.

<h2 id="automater">Building The Automater Workflow.</h2>

If you haven't used Automater before on a Mac, it allows you to automate (duh) repetitive system tasks and one of these is to watch files and then perform an action. Its really easy to set-up. So if you want to watch a folder and automatically copy to another location, just follow these steps:

-  Open the Automater in Applications
-  Go To ```File -> New```
-  Select "Folder Action" and press choose.
-  In the bar across the middle it should say "Folder Action receives files and folders".
-  click the Choose Folder drop-down and select your ```_site``` folder location in your Jekyll development repo.
-  In the top left there is a search field type "copy" in the field and add the "Copy Finder Items" to your workflow.
-  It should appear on the right, workflows start at the top and flow down the screen, so if you choose to customise this later adding a workflow above this would happen before our action, below would be after the action occurred.
-  In  "Copy Finder Items" select your live repo, and tick "Replace existing files".
-  Go To ```File -> Save```
-  Your done. Try copying any file in to your ```_site``` folder and watch it magically copy across on its own.

This will continue to run on the folder until you disable it. You can disable it by browsing to the folder the action is applied to and right clicking and selecting "Folder Actions Set-up..." Then un-ticking, the box next to the chosen folder.
