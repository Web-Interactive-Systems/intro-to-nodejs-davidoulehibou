/**
 Todo: create a function that sets a timeout of 3000ms and 
  do the following inside its callback:
  - console.table an array of elements
  - console.log __dirname
  - console.log __filename
  - console.log require
  - console.log module
  - console.log process
  - console.log window
 */

  function displayInfoAfterDelay() {
    setTimeout(() => {
      const elements = ['toto', 'tata', 'titi'];
      console.table(elements);
  
      console.log('__dirname:', __dirname);
  
      console.log('__filename:', __filename);
  
      console.log('require:', require);
  
      console.log('module:', module);
  
      console.log('process:', process.env);
  
    }, 3000);
  }

  displayInfoAfterDelay();