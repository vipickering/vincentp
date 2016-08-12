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

Launch Grunt from the site root:

```
grunt
```

To launch the site. Navigate to the website folder, then type:

```
Jekyll serve --watch --drafts
```

## Deploy

Package Jekyll

```
jekyll build
```

## Testing Tools

### [Borken link Checker](https://github.com/stevenvachon/broken-link-checker)

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
