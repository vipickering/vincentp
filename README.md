# Vincent Pickering [blog]

## Setup

Install Grunt CLI:

```
npm install -g grunt-cli
```

Then get all the node modules :

```
npm update
```

## Running

Launch the default Gulp task from the site root. This will build and watch for local changes, along with loading the jekyll site to watch.

```
gulp
```

## Deploy

Package Jekyll

```
jekyll build
```

## Testing Tools

### [Broken link Checker](https://github.com/stevenvachon/broken-link-checker)

Install BLC

```
npm install broken-link-checker -g
```

Running Link Checker. Recursively go through all pages in the website and report broken links

```
blc http://localhost:4000/ -r
```

### P4llly

### SASS Lint
