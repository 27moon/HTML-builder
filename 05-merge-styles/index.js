const fs = require("fs");
const path = require("path");

const stylesFolderPath = path.join(__dirname, "styles");
const bundlePath = path.join(__dirname, "project-dist", "bundle.css");

const createStream = fs.createWriteStream(bundlePath);

fs.readdir(stylesFolderPath, {withFileTypes: true}, (err, results) => {
    results.forEach((result) => {
        if (err) console.log(err); 
      else { 
        if (result.isFile()) {
            const pathToFile = path.join(__dirname, "styles", result.name);
            const extension = path.extname(pathToFile);
        if (extension === ".css") {
            // console.log('the extension is css');
            fs.createReadStream(pathToFile, "utf-8").pipe(createStream);
        }
        }
        }
    })
});