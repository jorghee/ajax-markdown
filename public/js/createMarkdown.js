import { listMarkdownFiles } from "./listMarkdown.js";

function createMarkdownFile() {
  const filename = document.getElementById("newFileName").value;
  const content = document.getElementById("newFileContent").value;
  console.log(filename, content);

  // Generamos los parametros de la solicitud
  const request = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
    
    // Pasamos el objeto con los valores de filename y content
		body: JSON.stringify({ filename, content }),
	};
  
  fetch("/files", request)
    .then(response =>  response.json())
    .then(data => {
      console.log(data.message);
      listMarkdownFiles();
    })
    .catch(error => console.error("Error al crear el archivo", error));
}

export { createMarkdownFile };
