# Vincent Pickering [blog]

## Requirements

You will need to install Node and Brew to get rolling.

## Setup

Install global packages

```
sudo npm install -g pa11y broken-link-checker valimate pleeease-cli stylelint
```

## Running

Launch the pleeease watch in one window from the root.

```
pleeease watch
```

And in a separate window run jekyll

```
jekyll serve --watch --drafts
```

## Deploy

Package Jekyll

```
jekyll build
```

## Testing Tools

Run tests

```
./run-tests.sh
```
