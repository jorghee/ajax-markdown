import { listMarkdownFiles } from "./listMarkdown.js";
import { showMarkdownFile } from "./showMarkdown.js";
import { createMarkdownFile } from "./createMarkdown.js";

listMarkdownFiles();
document.getElementById('files').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
    
      showMarkdownFile(event.target.textContent);
    }
  });
document.getElementById("createFile").addEventListener("click", createMarkdownFile);
