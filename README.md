# Vincent Pickering [blog]

## Requirements

This blog runs on [Jekyll](https://jekyllrb.com/).

[Node](https://nodejs.org/en/) packages are used with [PostCSS](http://postcss.org/) to compile the CSS.

It uses [Bundler](http://bundler.io/) to package the Gems.

Deployment and hosting is via [Netlify](https://www.netlify.com/).

**Ruby version 2.4.3 is a minimum requirement.**

## Setup

Clone the directory and install the Node packages:

```
npm install
```

Install the gems you need:

```
bundle install
```


## Running

To run in the development environment run the command:

```
npm run dev
```

If you need to modify the CSS in any way, you can run the command:

```
npm run watch:css
```

To watch the CSS for any changes and recompile automatically.

If you just want to (re)build the CSS run:

```
npm run build:css
```

## Configuration

- Post CSS is configured in the ``postcss.config.js`` file.
- [Stylelint](https://github.com/stylelint/stylelint) is configured in the ``.stylelintrc`` file and ``postcss.config.js`` file.
- Netlify configuration is done via [netlify.toml](https://www.netlify.com/docs/netlify-toml-reference/) file.

## Deploy

The site is served by Netlify. Deployment happens automatically when the master branch is pushed to GitHub.

If you want to manually see the live compiled site with HTTPS URLs to error check, run:

```
jekyll build
```

## Syndication

Content is syndicated to Medium and pushed to a draft via Zapier and a [custom Javascript](https://gist.github.com/reganstarr/153968d6444b9281a9bc291277984be1).

Content is syndicated to Twitter and LinkedIn via RSS updates triggering a Zapier script then pushed to Buffer to prevent spamming.

RSS is syndicated to Feedburner, since everything else never works properly. Feel free to help me out with this if you know this stuff :-)

## Webmentions

Replies, reposts and likes are generated via [Jekyll-Get plugin](https://github.com/18F/jekyll-get), [Brid.gy](https://brid.gy/) and [Webmention.io](https://webmention.io/).

This content is stored in Webmention.io and generated at build, it is not currently cached (working on it).
