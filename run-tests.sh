#!/bin/bash
# Define list of urls for tests
urls=(index about hire)

echo "Please Note: An internet connection is REQUIRED for all tests to run successfully"

# Start the test server in background
cd website && jekyll serve &

# Wait for the Node Server to start up
echo "Waiting for Jekyll to start..."
sleep 5

# Javascript Lint checks
echo "Starting esLint..."
eslint */*.js

# Sass Lint checks
echo "Starting Sass Lint..."
sass-lint -c .sass-lint.yml 'assets/scss/*.scss' -v -q
open testing/linting/sass-lint.html

#Run Node securty checks (needs to be in route to scan package.json)
nsp check

# Run Valimate HTML validation tests
cd testing
valimate

# Run Broken Link Checker
blc http://localhost:4000/$i -ro

# Pa11y accesibility checks
echo "Starting Pa11y..."
for i in "${urls[@]}"
do
    pa11y localhost:4000/$i --reporter html > accessibility/$i.html
    open accessibility/$i.html
    echo $i processed
done
echo "Finished Pa11y"

echo "Tests Complete"

# Kill the running processes afterwards
jekyll_port=4000

lsof -i tcp:${jekyll_port} | awk 'NR!=1 {print $2}' | xargs kill
