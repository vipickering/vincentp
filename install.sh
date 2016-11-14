#!/bin/bash

#install dependancies
brew install phantomjs

# Install all global packages
# - Pa11y
# - Node Security Platform
# - Broken Link Checker
# - pleeease-cli
sudo npm install pa11y nsp broken-link-checker valimate pleeease-cli

# Install local packages
npm update
