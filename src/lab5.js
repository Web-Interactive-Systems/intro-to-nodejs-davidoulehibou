/**
 Todo: Complete this lab 

 - Explore node `path` module
 - Add console log in addition to
  a brief explanation of the most important functions of path module
 
 */

const path = require("path");

console.log("\n\n *** path dirname", path.dirname(__dirname));
console.log("\n\n *** path join", path.join(__dirname, "toto", "labx.js"));

console.log("\n\n *** path basename", path.basename(path.join(__dirname, "toto", "labx.js"),"js"));