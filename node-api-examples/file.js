const fs = require("fs");

(function () {
  const fileContent = fs.readFileSync("./index.txt");

  console.log(fileContent); //Should print whatever is put into the file
})();

//For the next one, let's open a folder and read all it's files and the file's contents;
