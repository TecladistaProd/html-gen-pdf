let app = require("..");

app("./index.html", "./file.pdf", {
  format: "A4",
  // landscape: false
  landscape: true
});
