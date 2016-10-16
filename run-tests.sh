#!/bin/bash
# Define list of urls for tests
urls=(index about hire error)

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
