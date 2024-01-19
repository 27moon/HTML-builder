const fs = require("fs");
const path = require("path");


const pathResult = path.join(__dirname, "text.txt");
const stream = fs.createReadStream(pathResult, "utf-8");

stream.on("data", data => console.log(data));