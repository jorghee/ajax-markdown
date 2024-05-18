# <samp>Task about Ajax - Markdown files</samp>
### Sobre cómo levantar un servidor con Nodejs
1. Lo primero que vamos a hacer es descargar nodejs, junto con este se descarga el manejador de paquetes `npm`.

2. Después creamos un directorio para nuestro proyecto y aqui iniciamos el proyecto con el framework Express, la ventaja de este framework es que solo se descarga en el directorio del proyecto, es decir, esta encapsulado, te brinda un entorno de trabajo para solo ese proyecto.

> Ejemplo de cómo levantar nuestro servidor con express
```javascript
// Usamos el modulo de express
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
app.listen(3000);
```

3. Utilizaremos una librería para realizar la conversion de Markdown a HTML. El profesor esta brindando un ejemplo sobre cómo hacerlo, leer el doc.
