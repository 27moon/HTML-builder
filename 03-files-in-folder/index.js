const fs = require("fs");
const path = require("path");
const secretFolderPath = path.join(__dirname, "secret-folder");


fs.readdir(secretFolderPath, {withFileTypes: true}, (err, results) => {
    results.forEach((result) => {
        if (err) console.log(err); 
      else { 
        if (result.isFile()) {
            const pathToFile = path.join(__dirname, "secret-folder", result.name);
            const extension = path.extname(pathToFile);
            const extensionResult = extension.replace('.', '');
            const fileName = path.basename(pathToFile);
            const fileNameResult = fileName.replace(`.${extensionResult}`, '')

        fs.stat(pathToFile, (err, stats) => {
            if (err) console.log(err); 
            else {
            console.log(`${fileNameResult} - ${extensionResult} - ${stats.size / 1000}kb`);
            }
        })
        }
        }
    })
});
