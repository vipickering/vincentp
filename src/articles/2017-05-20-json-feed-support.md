---
title: "JSON Feed Support"
timezone: "GMT"
date: "2017-05-20T11:15:00Z"
meta:  Adding JSON feed support
summary: Adding JSON Feed support
permalink: "/blog/json-feed-support/"
tags:
- javascript
- technology
- jekyll
---

Let's face it. RSS and ATOM Suck. That's not to say the format isn't useful. But XML is a trudge, it's not fun to work with at all.

Combined with the differing but similar formats. ATOM and RSS is just a bit of a confusing mess.

Enter [JSON Feed](https://jsonfeed.org/).

A well throughout specification for RSS that uses a format developers love. Furthermore it's really simple and **FUN to implement**.

It took me about an hour to add support to the Jekyll blog. But your time will be even quicker with [my file]({{site.data.author.github.url}}/vincentp/blob/master/feed.json) as a handy reference!

{% highlight javascript %}
---
layout: null
---
{
    "version": "https://jsonfeed.org/version/1",
    "title": {{ site.title | jsonify }},
    "home_page_url": "{{site.url}}",
    "feed_url": "{{site.url}}/feed.json",
    "description" : "Web design including: UI, UX, HTML, CSS, JavaScript and Node",
    "icon" : "{{site.url}}/images/vincentp-300.jpg",
    "favicon" : "{{site.url}}/apple-touch-icon-76x76.png",
    "author" : [
        {
            "name" : "{{site.data.author.name}}",
            "url" : "{{site.data.author.twitter.url}}",
            "avatar" : "{{site.url}}/images/vincentp-300.jpg"
        }
    ],
     "items": [{% for post in site.posts %}
        {
            "id": "{{site.url}}{{post.id}}",
            "title" : {{ post.title | jsonify }},
            "content_html": {{ post.content | jsonify}},
            "url": "{{site.url}}{{ post.url }}",
            "date_published" : "{{ post.date }}"{% if post.modified %},
            "date_modified" : "{{post.modified  | date_to_xmlschema}}"{% endif%}
        }{% if forloop.last != true %},{% endif %}{% endfor %}
    ]
}
{% endhighlight %}

The biggest gotcha, is that by using the jsonify filter in your liquid tags, you don't need the quotes. They are added automatically.

Finally, you will need to ensure you add commas if there are more items in your list and not output a comma if it is the final item.
