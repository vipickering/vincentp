#!/bin/bash

#install dependancies
brew install phantomjs

# Install all global packages
# - Gulp CLI
# - Pa11y
# - Node Security Platform
# - Broken Link Checker
# - Valimate
sudo npm install -g gulp-cli pa11y nsp broken-link-checker valimate

# Install local packages
npm update
