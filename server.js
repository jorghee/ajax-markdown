const MarkdownIt = require('markdown-it'),
	md = new MarkdownIt();
const path = require('path');
const fs = require("fs");
// const MarkdownIt = require("markdown-it");
const bp = require("body-parser");
const express = require("express");

const app = express();
// const md = new MarkdownIt();
const MARKDOWN_DIR = path.resolve(__dirname, "files_markdown");

app.use(bp.json());
app.use(express.static("public"));

/** 
  * Creamos el servidor, request maneja las solicitudes que hacemos y 
  * response es el objeto que maneja las respuestas que envia el servidor.
  */ 
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, "public/index.html"));
});

// Listar archivos Markdown
app.get("/files", (request, response) => {
  fs.readdir(MARKDOWN_DIR, (error, files) => {
    if (error) {
      console.error("No se pudo leer los archivos:", error);
      return;
    }
    response.json(files);
  });
});

app.get('/files/:fileName', (req, res) => {
  const filename = req.params.fileName;
  const filePath = path.resolve(MARKDOWN_DIR, filename);
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read file" });
    }
    const htmlContent = md.render(data);
    res.json({html: htmlContent});
  });
});

// 3000 es el puerto
app.listen(3000, () => console.log("Listing on http://localhost:3000"));
