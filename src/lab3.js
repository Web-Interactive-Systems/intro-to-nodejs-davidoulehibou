/**
 Todo: Complete this lab by importing the needed 
 module
 and a comment to each function used inside `_os` object to explain 
 ./utils/constants.js and ./utils/helpers.js
 */

 const os = require('os');

const _os = {
  name: os.type(), //Le nom de l'os
  release: os.release(), //La version de l'OS
  totalMem: os.totalmem(), // La valeur totale de la memoire??
  freeMem: os.freemem(), // La valeur libre de la memoire??
  uptime: os.uptime(),
  user: os.userInfo(), // des info sur l'utilisateur
};

console.log(_os);
