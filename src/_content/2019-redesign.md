---
layout : "about"
permalink : "/2019-redesign/"
title : "2019 Redesign Notes"
meta : "All the notes so far on my 2019 redesign"
summary : "This page will be updated after each blog post"
type : "2019 Redesign Notes"
twitterCard: false
---
## Previous Posts

- [Planning Out The Redesign](/articles/2019/06/19/21-00/)
- [The Static Website](/articles/2019/06/30/22-00/)
- [Mapping out my IndieWeb functionality](/articles/2019/09/07/12-00/)

## Recap

### Research Notes

- [#1](/articles/2019/06/19/21-00/)
    - I need to make what I build adaptive. Do not assume one type of content will be utilised more than another because that is what I do right now.
    - The design is not doing the heavy lifting I require from it.
    - While I have the overall trajectory in the right direction, the website needs fine tuning in all areas.
- [#2](/articles/2019/06/30/22-00/)
    - I am happy in general with the technical way the static website works.
    - I need to re-examine the technology it is built upon, [Eleventy](https://www.11ty.io/) looks to be the favoured platform to switch.
    - Build time needs to be reduced it is creeping up and taking too long.
    - I have some custom areas of my Jekyll build that need to be documented and ascertained if I can get feature parity by it's replacement.
- [#3](/articles/2019/09/07/12-00/)
    - The static site model on Netlify is working well
    - Github as my singular code source is the right choice
    - Flow on effects from Mastr Cntrl can cause all sorts of consequences (see below)
    - The architecture I built organically isn't bad for a first attempt.
    - Heroku feels like it could be an unnecessary complication.
    - Can Lambda functions replace Mastr Cntrl or key functions?
    - Can I reduce 3 ecosystems?

### Future Actions

- [#1](/articles/2019/06/19/21-00/)
    - Do a deep dive on the UX.
    - Look in to the user interface design at a later date, once I understand requirements better.
    - I have yet to review where Mastr Cntrl is not meeting my requirements.
    - I have not looked at the overall architecture and this needs reviewing.
- [#2](/articles/2019/06/30/22-00/)
    - Explore [Eleventy](https://www.11ty.io/) and build a POC to demonstrate I can migrate successfully.
    - Revisit the design and UX of the current site. Explore this in detail to design a system that works for my needs.
    - Investigate improving the quality of my RSS feeds and general syndication content.
    - Investigate Avatar loading, caching and progressive loading techniques.
    - Minimise external load content such as Mapbox images and Avatars.
    - Set some time to review my Netlify integration and set-up. How can this be improved?
    - Set some time to review future integrations and what I will be accommodating.
    - Automate syndicating to IndieNews.
- [#3](/articles/2019/09/07/12-00)
    - Explore the possibility of Lambda functions instead of Mastr Cntrl.
    - Explore the possibility of splitting Mastr Cntrl in to discreet modules with Mastr Cntrl acting as the gatekeeper.
    - Add testing coverage to Mastr Cntrl
    - Investigate the recurring issues

## Diagrams and Data

<a href="/images/blog/2019-08-27/architecture.jpg"><img src="/images/blog/2019-08-27/architecture.jpg" width="612" alt="My current architecture" class="w-100"/></a>

<div class="w-100 overflow-x-scroll mb3 ">
<table class="w-100 f7 ">
    <thead>
    <tr class="white">
        <th class="bg-black pa7">Input Source</th>
        <th class="bg-black pa7 ">Input Type</th>
        <th class="bg-black pa7 ">Input Format</th>
        <th class="bg-black pa7 ">Output Type</th>
        <th class="bg-black pa7 ">Output Format</th>
        <th class="bg-black pa7 ">Output Destination</th>
        <th class="bg-black pa7 ">Intended Audience</th>
        <th class="bg-black pa7 ">Purpose</th>
        <th class="bg-black pa7 ">Importance</th>
</tr>
</thead>
<tbody>
    <tr>
    <td class="pa7">Telegraph</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">Brid.gy</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">OwnYourSwarm</td>
    <td class="pa7">Micropub</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Checkin</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Website</td>
    <td class="pa7">Me</td>
    <td class="pa7">Record Life</td>
    <td class="pa7 tc">3</td>
</tr>
<tr>
    <td class="pa7">OwnYourSwarm</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Website</td>
    <td class="pa7">Me</td>
    <td class="pa7">Record Life</td>
    <td class="pa7 tc">3</td>
</tr>
<tr>
    <td class="pa7">OwnYourSwarm</td>
    <td class="pa7">Image</td>
    <td class="pa7">JPG</td>
    <td class="pa7">Image</td>
    <td class="pa7">JPG</td>
    <td class="pa7">Website</td>
    <td class="pa7">Me</td>
    <td class="pa7">Record Life</td>
    <td class="pa7 tc">3</td>
</tr>
<tr>
    <td class="pa7">Quill</td>
    <td class="pa7">Micropub</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Note</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">Quill</td>
    <td class="pa7">Micropub</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Bookmark</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">Quill</td>
    <td class="pa7">Micropub</td>
    <td class="pa7">JSON</td>
    <td class="pa7">RSVP</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>

</tr>
<tr>
    <td class="pa7">Quill</td>
    <td class="pa7">Micropub</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Like</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">Quill</td>
    <td class="pa7">Image</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Image</td>
    <td class="pa7">JPG</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">Quill</td>
    <td class="pa7">Micropub</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Syndication</td>
    <td class="pa7">XML</td>
    <td class="pa7">Zapier</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">Quill</td>
    <td class="pa7">Micropub</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Telegraph</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">2</td>
</tr>
<tr>
    <td class="pa7">Direct</td>
    <td class="pa7">Post Creation</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Post</td>
    <td class="pa7">HTML</td>
    <td class="pa7">Website</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">1</td>
</tr>
<tr>
    <td class="pa7">Direct</td>
    <td class="pa7">Post Creation</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Webmention</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Telegraph</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">1</td>
</tr>
<tr>
    <td class="pa7">Direct</td>
    <td class="pa7">Post Creation</td>
    <td class="pa7">Markdown</td>
    <td class="pa7">Syndication</td>
    <td class="pa7">XML</td>
    <td class="pa7">Zapier</td>
    <td class="pa7">All</td>
    <td class="pa7">Share With Community</td>
    <td class="pa7 tc">1</td>
</tr>
<tr>
    <td class="pa7">LastFM</td>
    <td class="pa7">Feed</td>
    <td class="pa7">XML</td>
    <td class="pa7">Post</td>
    <td class="pa7">HTML</td>
    <td class="pa7">Website</td>
    <td class="pa7">Me</td>
    <td class="pa7">Record Life</td>
    <td class="pa7 tc">3</td>
</tr>
<tr>
    <td class="pa7">Wacht</td>
    <td class="pa7">Feed</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Post</td>
    <td class="pa7">HTML</td>
    <td class="pa7">Website</td>
    <td class="pa7">Me</td>
    <td class="pa7">Record Life</td>
    <td class="pa7 tc">3</td>
</tr>
<tr>
    <td class="pa7">Untappd</td>
    <td class="pa7">Feed</td>
    <td class="pa7">JSON</td>
    <td class="pa7">Post</td>
    <td class="pa7">HTML</td>
    <td class="pa7">Website</td>
    <td class="pa7">Me</td>
    <td class="pa7">Record Life</td>
    <td class="pa7 tc">3</td>
</tr>
<tr>
    <td class="pa7">Mapbox</td>
    <td class="pa7">Image</td>
    <td class="pa7">JPG</td>
    <td class="pa7">Image</td>
    <td class="pa7">JPG</td>
    <td class="pa7">Website</td>
    <td class="pa7">Me</td>
    <td class="pa7">Record Life</td>
    <td class="pa7 tc">3</td>
</tr>
</tbody>
</table>
</div>
