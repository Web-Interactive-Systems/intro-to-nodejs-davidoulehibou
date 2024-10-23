/**
 Todo: Complete this lab 

 - Add a new task in scripts of package.json to run `lab4.js`
 - Use argv of process module to get `filename` (a path to an existing file './utils/content.txt') and `text` (a text)
 - Use writeFile of fs module to write text in filename
 - Use readFile of fs module to read nameFile
 */

 const fs = require("fs");


 const filename = process.argv[2]; 
 const text = process.argv[3]; 
 
console.log(text);
 

 fs.writeFile(filename, text, (err) => {

   console.log(`Le texte a été écrit dans ${filename}`);
 

 });

 fs.readFile(filename, "utf8", (err, data) => {
    console.log(`Contenu du fichier ${filename} :\n${data}`);
  });