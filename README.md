# Vincent Pickering [blog]

## Requirements

You will need to install Jekyll, Node and Brew to get rolling.

## Setup

Run the bash script to install global packages.

```
./install.sh
```

## Running

Launch the [pleeease](http://pleeease.io/) watch in one terminal window from the root of the project.

```
pleeease watch
```

In another terminal window run Jekyll in the dev set-up. Drafts are enabled and watching for changes is activated.

```
npm run dev
```

## Deploy

This website uses Netlify to host, and should happen automatically when the master branch is pushed to Github.

If you want to manually see the live compiled site with HTTPS URLs to error check, run:

```
jekyll build
```

## Testing Tools

Make sure Jekyll and pleeease are not running then:

```
cd testing

./run-tests.sh
```
