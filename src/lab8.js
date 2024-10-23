const { writeFileSync, createReadStream } = require("fs");
const http = require("http");
/**
 Todo: Follow the todos in this file to complete it
 */

// Todo run this code only once to generate a big file
// --
// Generate a big file using `writeFileSync`
/*
Array.from({ length: 100000 }, (_, i) => {
  writeFileSync("./src/utils/big.txt", `This will be a big text file ${i}\n`, {
    flag: "a",
  }); // flag: "a" for appending
});
*/
// Todo create an http server
const server = http.createServer((req, res) => {
  // Todo: serve text to the client.
  if (req.url === '/bigfile') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Todo: use `createReadStream` to file stream to serve text to the client.
    const readStream = createReadStream('./src/utils/big.txt');
    readStream.pipe(res); // Utilise le pipe pour envoyer le contenu au client

    // Gérer les erreurs
    readStream.on('error', (err) => {
      console.error('Error reading the file:', err);
      res.writeHead(500);
      res.end('Error reading the file');
    });
  } else {
    // Gérer les routes non définies
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Le serveur écoute sur le port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});