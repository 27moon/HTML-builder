// // Import all required modules.
// // Read and save the template file in a variable.
// // Find all tag names in the template file.
// // Replace template tags with the content of component files.
// // Write the modified template to the index.html file in the project-dist folder.
// // Use the script written in task 05-merge-styles to create the style.css file.
// // Use the script from task 04-copy-directory to move the assets folder into the project-dist folder.

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

const projectDistPath = path.join(__dirname, 'project-dist');

const pathTemplate = path.join(__dirname, 'template.html');

const componentsFolderPath = path.join(__dirname, 'components');

// streamTemplate.on('data', (data) => console.log(data));

function check() {
  fs.access(projectDistPath, async function (error) {
    console.log(projectDistPath);
    if (error) {
      //   console.log("") проверка на наличие новой папки
      fs.access(projectDistPath, async (err) => {
        //создаем новую папку
        if (err) {
          fs.mkdir(projectDistPath, (err) => {
            createHTMLPage();
            if (err) {
              console.log('');
            }
          });
        }
      });
    } else {
      createHTMLPage();
      await fsPromises.readdir(
        projectDistPath,
        { recursive: true },
        async (err, files) => {
          if (err) throw err;
          for (const file of files) {
            // files.forEach(file => {
            await fsPromises.unlink(path.join(projectDistPath, file), (err) => {
              //delete the past files
              if (err) throw err;
              createHTMLPage();
            });
          }
        },
      );
    }
  });
}
check();

const createHTMLPage = () => {
  fs.stat(projectDistPath, (err) => {
    if (err) console.log(err);
    else {
      fs.createWriteStream(path.join(projectDistPath, 'index.html'));
      rewriteHTML();
      linkStyles();
    }
  });
};

async function rewriteHTML() {
  let template = '';
  fs.readFile(pathTemplate, 'utf-8', (err, data) => {
    template = data;
    // console.log(template);
  });
  const pathIdexHTML = path.join(__dirname, 'project-dist', 'index.html');
  fs.readdir(componentsFolderPath, { withFileTypes: true }, (err, results) => {
    results.forEach(async (result) => {
      if (err) console.log(err);
      else {
        if (result.isFile()) {
          const pathToFile = path.join(__dirname, 'components', result.name);
          const extension = path.extname(pathToFile);
          if (extension === '.html') {
            const dataFromComponent = await fs.promises.readFile(
              pathToFile,
              'utf-8',
            );
            // console.log(dataFromComponent);
            let txtInParenthesis = result.name.slice(0, -5);
            template = template.replace(
              `{{${txtInParenthesis}}}`,
              dataFromComponent,
            );
            fsPromises.writeFile(pathIdexHTML, template);
          }
        }
      }
    });
  });
}

function linkStyles() {
  const stylesFolderPath = path.join(__dirname, 'styles');
  const bundlePath = path.join(__dirname, 'project-dist', 'style.css');

  const createStream = fs.createWriteStream(bundlePath);

  fs.readdir(stylesFolderPath, { withFileTypes: true }, (err, results) => {
    results.forEach((result) => {
      if (err) console.log(err);
      else {
        if (result.isFile()) {
          const pathToFile = path.join(__dirname, 'styles', result.name);
          const extension = path.extname(pathToFile);
          if (extension === '.css') {
            fs.createReadStream(pathToFile, 'utf-8').pipe(createStream);
          }
        }
      }
    });
  });
}
