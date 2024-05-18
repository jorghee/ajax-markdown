import { listMarkdownFiles } from "./listMarkdown.js";
// import { viewMarkdownFiles } from "./viewMarkdown.js";
import { createMarkdownFile } from "./createMarkdown.js";

listMarkdownFiles();
document.getElementById("createFile").addEventListener("click", createMarkdownFile);
