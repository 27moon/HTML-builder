// Inside the 02-write-file folder, there is 1 file index.js.

// When executing the command node 02-write-file in the root directory of the repository, 
// a text file is created in the 02-write-file folder, 
// and a prompt for text input is displayed in the console (the text of prompt is of your choice).

// After entering text, the entered text should be written to the previously created file in the 02-write-file directory.
// The process does not terminate and awaits new input.

// After the next input, the initially created text file is appended with new text, 
// and the process continues to wait for input.

// When pressing the ctrl + c key combination or entering exit into the console,
//  a farewell phrase is displayed (the text of farewell phrase is of your choice), 
//  and the process terminates.

const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;
const pathResult = path.join(__dirname, "text.txt");
const pathFile = fs.createWriteStream(pathResult); //creates the file
stdout.write('Hi, hope you are having a wonderful day! Please enter some text, it will be put into your newly created text file\n');
stdin.on("data", (data) => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }
    pathFile.write(data);
    });
    process.on("exit", () => stdout.write("Goodbye! May the Force be with you\n"));
    process.on("SIGINT", () => process.exit());
