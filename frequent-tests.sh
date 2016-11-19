#!/bin/bash
# Tests run on pre-commit hook.

# Start the test server in background
cd website && jekyll serve &

# Wait for the Node Server to start up
echo "Waiting for Jekyll to start..."
sleep 5

# Style Lint
stylelint "website/_css/*.css"

# Run Valimate HTML validation tests
cd testing
valimate

# Kill the running processes afterwards
jekyll_port=4000

lsof -i tcp:${jekyll_port} | awk 'NR!=1 {print $2}' | xargs kill
