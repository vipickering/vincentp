# Vincent Pickering [blog]

## Requirements

You will need to install Jekyll, Node and Brew to get rolling.

## Setup

Run the bash script to install global packages.

```
./install.sh
```

## Running

```
npm run dev
```

## Deploy

The site is served by Netlify. Deployment should happen automatically when the master branch is pushed to GitHub.

If you want to manually see the live compiled site with HTTPS URLs to error check, run:

```
jekyll build
```

## Testing Tools

Make sure Jekyll and pleeease are not running then:

```
cd testing

./run-tests.sh
```

## Browser Support

I aim to support the latest versions of the following browsers:

- Edge
- Chrome
- Firefox
- Opera
- Safari
- Chrome
- Android
- iOS Safari

Please note : Internet Explorer is *not* supported via CSS. The content should be available anytime and consumable.
