function showMarkdownFile(fileName) {
    fetch(`/files/${fileName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(htmlContent => {
        document.getElementById("content").innerHTML = htmlContent.html;
      })
      .catch(error => console.error("Error al mostrar el archivo:", error));
  }
  
  export { showMarkdownFile };
  