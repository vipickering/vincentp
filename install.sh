#!/bin/bash

#install dependancies
brew install phantomjs

# Install all global packages
# - Pa11y
# - Broken Link Checker
# - Valimate
# - pleeease-cli
sudo npm install pa11y broken-link-checker valimate pleeease-cli

# Install local packages
# npm update

#Install pre-git hooks
ln -s ../../pre-commit.sh .git/hooks/pre-commit
