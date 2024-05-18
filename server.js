const express = require("express");
const app = express();

/** 
  * Creamos el servidor, request maneja las solicitudes que hacemos y 
  * response es el objeto que maneja las respuestas que envia el servidor.
  */ 
app.get('/', (request, response) => {
  return response.send("Hello jijijaja");
});

// 3000 es el puerto
app.listen(3000, () => console.log("Listing on http://localhost:3000"));
