# Vincent Pickering blog

## Requirements

This blog runs on [Eleventy](https://www.11ty.dev/).

[Node](https://nodejs.org) packages are used with [PostCSS](https://postcss.org) to compile the CSS.

Deployment and hosting is via [Netlify](https://www.netlify.com).

- [Mastr Cntrl](https://github.com/vipickering/mastr-cntrl) is the Microservice responsible for recieving Micropub content, webmentions and social content.
- [MC Webmebtion](https://github.com/vipickering/mc-webmention) is the webmention service. Designed to send and recieve [Webmentions](https://indieweb.org/Webmention).
- [MC Syndication](https://github.com/vipickering/mc-syndicate-content) is the syndication service. Designed to syndicate content to other platforms.

These service operate independantly to the website, adding additonal content and are not required to run it.

## Setup

Clone the directory and install the Node packages:

```bash
npm install
```

## Running

To run in the development environment run the command:

```bash
npm run dev
```

If you need to modify the CSS in any way, you can run the command:

```bash
npm run build:css
```

## Configuration

- Post CSS is configured in the ``postcss.config.js`` file.
- [Stylelint](https://github.com/stylelint/stylelint) is configured in the ``.stylelintrc`` file and ``postcss.config.js`` file.
- Netlify configuration is done via [netlify.toml](https://www.netlify.com/docs/netlify-toml-reference/) file.

## Deploy

The site is served by Netlify. Deployment happens automatically when the master branch is pushed to GitHub.
