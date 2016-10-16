#!/bin/bash
# Define list of urls for tests
urls=(index about hire error)

# ! Make sure you start the test server
# json-server --port 3004 testing/db.json

# Start Server in test mode
# NODE_ENV=test node ./bin/server.js

#Run Node securty checks (needs to be in route to scan package.json)
nsp check

# Run Valimate HTML validation tests
cd testing
valimate

# Run Broken Link Checker
for i in "${urls[@]}"
do
    blc http://localhost:4000/$i
done

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
