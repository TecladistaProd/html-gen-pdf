# html-to-pdf

Module to generate pdf file from html file using puppeteer.

This lib is both to use by terminal and js file.

## Terminal use

To use in terminal to create a pdf from html, using terminal in folder where is html file, use this command `html-to-pdf -i ./index.html -n ./file.pdf -f A4`.

### Terminal Commands

- -v or --version to show package version example
- -i or --input-file is to specify the html file
- -o or --output-file is to specify the file name to output
- -f or --format is paper format (A4 by default)
- -l or --landscape to use pdf orientation

> "You may ignore format and orientation options if want to use default"

## JS File use

_app.js_

```javascript
const toPdf = require("html-to-pdf");

toPdf("./index.html", "./just_example.pdf", {
  format: "A4",
  landscape: true
});
```

_index.html_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Just Example</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        width: 1122px;
        height: 792px;
        position: relative;
      }
      main {
        position: relative;
        width: 100%;
        height: 100%;
        background: #7a2f2c;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h1 {
        font-size: 7rem;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello World</h1>
    </main>
  </body>
</html>
```

> You may import external fonts, images, css, etc.

## Formats

### Types of format paper

    - Letter
    - Legal
    - Tabloid
    - Ledger
    - A0
    - A1
    - A2
    - A3
    - A4
    - A5
    - A6
