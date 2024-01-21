const fs = require("fs");
const path = require("path");
const secretFolderPath = path.join(__dirname, "secret-folder");


fs.readdir(secretFolderPath, {withFileTypes: true}, (err, results) => {
    results.forEach((result) => {
        if (err) console.log(err); 
      else { 
        if (result.isFile()) {
            const pathToFile = path.join(__dirname, "secret-folder", result.name);
            const fileName = path.basename(pathToFile);
            const extension = path.extname(pathToFile);
            const extensionResult = extension.replace('.', '');

        fs.stat(pathToFile, (err, stats) => {
            if (err) console.log(err); 
            else {
            console.log(`${fileName} - ${extensionResult} - ${stats.size / 1000}kb`);
            }
        })
        }
        }
    })
});
