# Testing

Start the Node server in Test mode:

```
npm run test
```

Also start the fake database JSON server:

```
json-server --port 3004 testing/db.json
```

Run the bash script from the root dir to begin tests:

```
./run-tests.sh
```

## Tests Run

* Node Security Platform Checker - This checks all the installed node packages for any known security issues.
* Valimate - Validate all the HTML used
* Broken Link Checker - Test all the links in each page and make sure nothing is broken.
* Pa11y - Accessibility audit of all pages.
* Pageres - Screenshot all the pages in the application at the following resolutions:
 * 320x480
 * 360x640
 * 768x1024
 * 1024x768
 * 1280x800
