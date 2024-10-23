/**
 Todo: follow the todos in file to complete the lab
 - 
 */

 const EventEmitter = require("events");

 
 const myEmitter = new EventEmitter();
 
 
 myEmitter.on('dataReceived', (data, token) => {
   console.log(`Message reçu ${JSON.stringify(data, null, 2)} with token: ${token}`);
 });
 
 
 myEmitter.on('dataReceived', () => {
   console.log("chepa");
 });
 

 setInterval(() => {
   const data = { message: "Hello World", timestamp: new Date() };
   const token = "123456";
   
   myEmitter.emit('dataReceived', data, token);
 }, 2000);