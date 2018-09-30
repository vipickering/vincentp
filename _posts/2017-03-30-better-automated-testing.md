---
layout: post
title: "Better Automated Testing"
date: 2017-03-30 18:00:00 +/-GMT
meta:  Using bash scripts for better automated testing
summary: Where I discuss FED automated tests and a consistent method to implement them
category: "Articles"
modified :
modifiedReason:
twitterCard: false
tags: "process technology tools"
permalink : /blog/:title
---

I'm a stickler for automated testing and being consistent in writing good code. When I work in a company environment I always imbue good testing practices and habits in the colleagues around me.

Part of my rhetoric is to define project specific automated tests that are configurable.

There are a plethora of tests you *may* want to do in a project, my tests stub starts with the following:

* [Mocha](https://mochajs.org) or whatever your preferred test coding framework is.
* [Istanbul](https://github.com/gotwarlost/istanbul)  for code coverage tests.
* JavaScript coding style checks, [ESLint](https://eslint.org) is my preferred option.
* Sass coding style checks, [stylelint](https://stylelint.io) is my go to tool.
* HTML validation tests with [Valimate](https://github.com/jamesseanwright/valimate)
* [Broken Link Checker](https://github.com/stevenvachon/broken-link-checker).
* Accessibility Checks with [Pa11y](https://pa11y.org)
* Screenshot software, I like [Pageres](https://github.com/sindresorhus/pageres-cli).
* [Textlint](https://textlint.github.io) to check for typos and writing style.

I create two bash scripts. One that runs through the tests and one to create screenshots of the site at different sizes.

Screenshots form a focal discussion point with designers, developers and usability people.

Screenshots are helpful for circulating to non-technical stakeholders in the business. This allows stakeholders to see the outcome of new features and prompts them for feedback.

Run the test script through Jenkins (or your preferred alternative). I also run linting and validation tests hooked up to a task runner, sharing the same configuration rules. This process ensures simple coding style check results get to the coder at the right time. In case a rebel developer doesn't play by the rules, Jenkins would catch them later.

In environments where companies don't use a build server. Add the script to a git hook.

Here is a sample script. I will step through some of the important points.

{% highlight bash %}
#!/bin/bash
# Runs ALL TESTS

# Define list of urls for tests
urls=(page1 page2 page3 page4 page5)

echo "Please Note: An internet connection is REQUIRED for all tests to run successfully"

# Mocha unit tests
echo "Starting Mocha tests"
npm run test

# Start Node in test mode in background
npm run testing --scripts-prepend-node-path &

# Wait for the Node Server to start up
echo "Waiting for Node to start..."
sleep 5

# Javascript Lint checks
echo "Starting esLint..."
eslint -c testing/configs/.eslintrc.json */*.js

# Sass Lint checks
echo "Starting Sass Lint..."
sass-lint -c testing/configs/.sass-lint.yml 'assets/scss/*.scss' -v -q
# open -g testing/linting/sass-lint.html

# Run Valimate HTML validation tests
cd testing/configs
valimate

cd ../

# Run Broken Link Checker
for i in "${urls[@]}"
do
    blc https://localhost:3000/$i
done

# Pa11y accesibility checks
echo "Starting Pa11y..."
for i in "${urls[@]}"
do
    pa11y https://localhost:3000/$i --reporter html > accessibility/$i.html
    # open -g accessibility/$i.html
    echo $i processed
done
echo "Finished Pa11y"

echo "Tests Complete"

# Kill the running processes afterwards
Node_port=3000
lsof -i tcp:${Node_port} | awk 'NR!=1 {print $2}' | xargs kill
{% endhighlight %}

This is how to define an array in a bash script. A useful technique to create a single point of truth for common objects to test.

I define key pages to test at the start of the script, for accessibility testing and broken link checks.

{% highlight bash %}
# Define list of urls for tests
urls=(page1 page2 page3 page4 page5)
{% endhighlight %}

When I start Mocha I use an [npm run script](https://docs.npmjs.com/cli/run-script). The test command code is in my package.json file. The more site specific code we can move to one place, such as the package.json file, the better. The test script will be more portable which is always a good thing.

{% highlight bash %}
# Mocha unit tests
echo "Starting Mocha tests"
npm run test
{% endhighlight %}

This is a snippet from a package.json file. Running ```npm run test``` will call the Istanbul script and run mocha.

{% highlight bash %}
 "scripts": {
    "start": "NODE_ENV=dev node ./bin/server.js",
    "dev": "NODE_ENV=dev node ./bin/server.js",
    "prod": "NODE_ENV=prod node ./bin/server.js",
    "test": "istanbul cover node_modules/.bin/_mocha -- testing/mocha/**/*",
    "testing": "NODE_ENV=test node ./bin/server.js"
  }
{% endhighlight %}

The broken link checker is inside a loop. Assign each item to a variable and pass it in to the <abbr title="Uniform Resource Locator">URL</abbr>.

{% highlight bash %}
# Run Broken Link Checker
for i in "${urls[@]}"
do
    blc https://localhost:3000/$i
done
{% endhighlight %}

Loop through the <abbr title="Uniform Resource Locator">URL</abbr>s. Save each report in to a folder named “accessibility”. Named the <abbr title="Uniform Resource Locator">URL</abbr>.

{% highlight bash %}
# Pa11y accesibility checks
echo "Starting Pa11y..."
for i in "${urls[@]}"
do
    pa11y https://localhost:3000/$i --reporter html > accessibility/$i.html
    echo $i processed
done
echo "Finished Pa11y"
{% endhighlight %}

Prevent the process running after the tests have completed.

{% highlight bash %}
# Kill the running processes afterwards
Node_port=3000
lsof -i tcp:${Node_port} | awk 'NR!=1 {print $2}' | xargs kill
{% endhighlight %}

I run text linting in a separate script. Writing is subjective so it shouldn't fail the build.

My [text-lint config](https://github.com/vipickering/vincentp/blob/master/.textlintrc) is on GitHub and a list of tech terms validated against on the blog in [this Gist](https://gist.github.com/vipickering/73c14510fd40b0ec4ba6b5c5d323bee4).

Running bash scripts such as this  will catch fixable problems. Leaving you free to ponder over the trickier issues that need attention.
