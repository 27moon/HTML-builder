const fs = require("fs");
const path = require("path");
const fsPromises = require('fs').promises; 

const originalPath = path.join(__dirname, "files");
const newPath =  path.join(__dirname, "files-copy");




function check() {

    fs.access(newPath, function(error) {
        if (error) {
        //   console.log("") проверка на наличие новой папки

          fs.access(newPath, (err) => { //создаем новую папку
            if (err) {
              fs.mkdir(newPath, (err) => {
                copyDir ();
                if (err) {
                    console.log('');
                }
              });
            }
          }); 


        } else {
        //   console.log("Directory exists.")
          fs.readdir(newPath, (err, files) => {
            if (err) throw err;
          for (const file of files) {
            // files.forEach(file => {
              fs.unlink(path.join(newPath, file), (err) => { //delete the past files
                if (err) throw err;
                copyDir ();
              });
            }
            // })
          });
        }
      })
}
check(); 
  function copyDir () {
    
    // fs.readdir(newPath, (err, files) => {
    //     if (err) throw err;
    //   for (const file of files) {
    //     // files.forEach(file => {
    //       fs.unlink(path.join(newPath, file), (err) => {
    //         if (err) throw err;
    //       });
    //     }
    //     // })
    //   });

    fs.readdir(originalPath, (err, files) => { //копируем файлы
    
    files.forEach(file => {
    //   console.log(file);
      
      const fileOrigPath = path.join(originalPath, file);
      const fileNewPath = path.join(newPath, file);

      fsPromises.copyFile(fileOrigPath, fileNewPath);
    });
  });
  }

//  copyDir ();
