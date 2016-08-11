# grunt-typeset

> A grunt wrapper for [Typeset](https://www.npmjs.com/package/typeset)
Feel free to contribute to the code.

## Installation
```
npm install grunt-typeset --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-typeset');
```

Add the following css to your project:
```css
/* Small caps */
.small-caps {font-family: 'Charter SC', serif}

/* Double quote (") marks */
.pull-double{margin-left:-.38em}
.push-double{margin-right:.38em}

/* Single quote (') marks */
.pull-single{margin-left:-.15em}
.push-single{margin-right:.15em}

/* Optical margin alignment for particular letters */
.pull-T, .pull-V, .pull-W, .pull-Y {margin-left: -0.07em}
.push-T, .push-V, .push-W, .push-Y {margin-right: 0.07em}

.pull-O, .pull-C, .pull-o, .pull-c {margin-left: -0.04em}
.push-O, .push-C, .push-o, .push-c {margin-right: 0.04em}

.pull-A {margin-left: -0.03em}
.push-A {margin-right: 0.03em}
```

## The "typeset" task

### Overview
In your project's Gruntfile, add a section named `typeset` to the data object passed into `grunt.initConfig()`.

### Usage Examples
```js
grunt.initConfig({
  typeset: {
    options: {
      ignore: '.skip, #anything, .which-matches', // string of a CSS selector to skip
      only: '#only-typeset, .these-elements'    // string of a CSS selector to only apply typeset
    },
    files: {
      [
        '*.html',
        '**/*.html,
        'index.html'
      ]
    },
  },
});
```
## Info
This plugin requires Grunt `~0.4.5`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1: Initial release
0.0.2: Documentation
0.0.3: Removed unnecessary files
