const pup = require("puppeteer");
const url = require("url");
const path = require("path");

module.exports = (html, pdf, printOptions = {}) =>
  new Promise(async (res, rej) => {
    try {
      const browser = await pup.launch();
      const page = await browser.newPage();
      let urlFile = url.pathToFileURL(path.resolve(html));

      let pdfFile = path.resolve(pdf);
      await page.goto(urlFile, { waitUntil: "networkidle0" });
      await page.emulateMedia("screen");

      // await wait(waitSeconds);

      await page.pdf({
        path: pdfFile,
        printBackground: true,
        ...printOptions
      });

      await browser.close();
      res("ok");
    } catch (err) {
      rej(err);
    }
  });
