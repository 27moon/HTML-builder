// // Import all required modules.
// // Read and save the template file in a variable.
// // Find all tag names in the template file.
// // Replace template tags with the content of component files.
// // Write the modified template to the index.html file in the project-dist folder.
// // Use the script written in task 05-merge-styles to create the style.css file.
// // Use the script from task 04-copy-directory to move the assets folder into the project-dist folder.


// const fs = require("fs");
// const path = require("path");
// const fsPromises = fs.promises;

// const newFolderPath = path.join(__dirname, "project-dist");
// const assetsPath = path.join(__dirname, "assets");
// const assetsFolderPath = path.join(__dirname, "project-dist", "assets")

// function createFolder() { //project-dist

//       fs.mkdir(newFolderPath, (err) => {
//         if (err) {
//             console.log('');
//         }
//       });
//     }
//     createFolder();

// const origTemplateHTMLPath = path.join(__dirname, "template.html");
// const newHTMLPath = path.join(__dirname, "project-dist", "index.html");
// const componentsFolderPath = path.join(__dirname, "components");
// const componentsFolderPathArticles = path.join(__dirname, "components", "articles.html");
// const componentsFolderPathFooter = path.join(__dirname, "components", "footer.html");
// const componentsFolderPathHeader = path.join(__dirname, "components", "header.html");


    
// async function pasteArticles(){
//     fs.readFile(origTemplateHTMLPath, 'utf8', function (err,data) {
//         // if (err) {
//         //   return console.log(err);
//         // }
     
//         fsPromises.readFile(componentsFolderPathArticles, 'utf8', function (err, dataArticles) {
//         if (err) {
//           return console.log(err);
//         }
//         // console.log(dataArticles)
    
    
//         let result = data.replace(/{{articles}}/g, dataArticles);
      
//         fs.writeFile(origTemplateHTMLPath, result, function (err) {
//            if (err) return console.log(err);
//         });
//     })
//       });
// }


// async function pasteFooter() {
//   //footer
//   await fsPromises.readFile(origTemplateHTMLPath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
 
//     fsPromises.readFile(componentsFolderPathFooter, 'utf8', function (err, dataFooter) {
//     if (err) {
//       return console.log(err);
//     }
//     // console.log(dataFooter)


//     let result = data.replace(/{{footer}}/g, dataFooter);
  
//     fs.writeFile(origTemplateHTMLPath, result, function (err) {
//        if (err) return console.log(err);
//     });
// })
//   });
// }


// async function pasteHeader() {

// //header
//  fs.readFile(origTemplateHTMLPath, 'utf8', function (err,data) {
//     if (err) {
//       return console.log(err);
//     }
 
//     fs.readFile(componentsFolderPathHeader, 'utf8', function (err, dataHeader) {
//     if (err) {
//       return console.log(err);
//     }
//     // console.log(dataHeader)


//     let result = data.replace(/{{header}}/g, dataHeader);
  
//     fs.writeFile(origTemplateHTMLPath, result, function (err) {
//        if (err) return console.log(err);
//     });
// })
//   });
// }

