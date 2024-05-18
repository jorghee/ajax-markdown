function listMarkdownFiles() {
  fetch("/files")
    .then(response => response.json())
    .then(files => {
      let fileList = "";
      files.forEach(file => fileList += `<li>${file}</li>`);
      document.getElementById("files").innerHTML = fileList;
    })
    .catch(error => console.error("Error al listar los archivos:", error));
}

export { listMarkdownFiles };
