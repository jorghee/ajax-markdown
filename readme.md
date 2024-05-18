# <samp>Task about Ajax - Markdown files</samp>
### Sobre cómo levantar un servidor con Nodejs
1. Lo primero que vamos a hacer es descargar nodejs, junto con este se descarga el manejador de paquetes `npm`.
> Descargar en OS linux con el package manager 'pacman'
```sh
$ sudo pacman -S nodejs
```

2. Después creamos un directorio para nuestro proyecto y aqui iniciamos un proyecto con node.js 
> comenzar proyecto node.js
```sh
$ npm init -y
```

3. El framework Express hace productivo a node.js, la ventaja de este framework es que solo se descarga en el directorio del proyecto, esto quiere decir que está encapsulado, nos brinda un entorno de trabajo para solo ese proyecto.
> Descargar express son el package manager de node.js
```sh
$ npm install express
```
4. Ya tenemos el entorno necesario para iniciar el proyecto, ahora levantemos el servidor
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

3. Utilizaremos una librería para realizar la conversion de Markdown a HTML. El profesor esta brindando un ejemplo sobre cómo hacerlo, leer el doc virtual.
