// const { promisify } = require("util")
// const readFilePromise = promisify(fs.readFile)

const fs = require("node:fs/promises");

fs.readFile("./fs.txt", "utf-8").then((txt) => {
  console.log(txt);
});
