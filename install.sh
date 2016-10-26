#!/bin/bash

#install dependancies
brew install phantomjs

# Install all global packages
# - Gulp CLI
# - Pa11y
# - Node Security Platform
# - Broken Link Checker
# - Pageres CLI
# - Valimate
# - Jasmine
# - Sass-lint
# - Istanbul
sudo npm install -g gulp-cli pa11y nsp broken-link-checker valimate jasmine eslint sass-lint pageres-cli istanbul

# Install local packages
npm update
