# Vincent Pickering [blog]

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvipickering%2Fvincentp.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvipickering%2Fvincentp?ref=badge_shield) ![npm Dependencies](https://david-dm.org/vipickering/vincentp.svg) [![Known Vulnerabilities](https://snyk.io/test/github/vipickering/vincentp/badge.svg?targetFile=Gemfile.lock)](https://snyk.io/test/github/vipickering/vincentp?targetFile=Gemfile.lock) [![Known Vulnerabilities](https://snyk.io/test/github/vipickering/vincentp/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vipickering/vincentp?targetFile=package.json)

[![Netlify Status](https://api.netlify.com/api/v1/badges/379720f4-d38c-4a53-84b1-856d725d8d44/deploy-status)](https://app.netlify.com/sites/vincentp/deploys)

## Requirements

This blog runs on [Eleventy](https://www.11ty.dev/).

[Node](https://nodejs.org) packages are used with [PostCSS](https://postcss.org) to compile the CSS.

It uses [Bundler](https://bundler.io) to package the Gems.

Deployment and hosting is via [Netlify](https://www.netlify.com).

[Mastr Cntrl](https://github.com/vipickering/mastr-cntrl) supplies webmentions and other [indieweb](https://indieweb.org) content such as Micropub, syndication and a media endpoint.

## Setup

Clone the directory and install the Node packages:

```
npm install
```

## Running

To run in the development environment run the command:

```
npm run dev
```

If you need to modify the CSS in any way, you can run the command:

```
npm run build:css
```

## Configuration

- Post CSS is configured in the ``postcss.config.js`` file.
- [Stylelint](https://github.com/stylelint/stylelint) is configured in the ``.stylelintrc`` file and ``postcss.config.js`` file.
- Netlify configuration is done via [netlify.toml](https://www.netlify.com/docs/netlify-toml-reference/) file.

## Deploy

The site is served by Netlify. Deployment happens automatically when the master branch is pushed to GitHub.

## Webmentions

- [Brid.gy](https://brid.gy/)
- [Webmention.io](https://webmention.io/) - Webmentions are managed by Webmention.io and sent to Mastr Cntrl; Which creates a unique file for each Webmention in the data folder.

## Publish Elsewhere, Syndicate (to your) Own Site(PESOS) Content

Backfeed content is provided by [ownyourswarm](https://ownyourswarm.p3k.io/) and published to the site via the Micropub API in Mastr Cntrl


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvipickering%2Fvincentp.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvipickering%2Fvincentp?ref=badge_large)
