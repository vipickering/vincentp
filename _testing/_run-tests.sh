#!/bin/bash
# Define list of urls for tests
urls=(index about)

cd ../

# Start the test server in background
jekyll serve &

# Wait for the Node Server to start up
echo "Waiting for Jekyll to start..."
sleep 5

# Style Lint
stylelint _css/*/*.css

# Run Valimate HTML validation tests
cd _testing
valimate

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

# Run Broken Link Checker
blc http://localhost:4000/$i -ro

# Kill the running processes afterwards
jekyll_port=4000

lsof -i tcp:${jekyll_port} | awk 'NR!=1 {print $2}' | xargs kill
