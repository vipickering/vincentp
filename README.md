# Vincent Pickering [blog]

## Requirements

You will need to install Jekyll, Node and Brew to get rolling.

## Setup

Install global packages

```
./install.sh
```

## Running

Launch the [pleeease](http://pleeease.io/) watch in one window from the root.

```
pleeease watch
```

And in a separate window run jekyll

```
jekyll serve --watch
```

## Deploy

This should happen automatically when the master branch is pushed to Github. If you want to manually see the live HTTPS URLs to error check, run:

```
jekyll build
```

## Testing Tools

Make sure the website or pleeease isn't running then:

```
./run-tests.sh
```
