const app = document.getElementById('app');

//importation of modules
import sidebar from "./src/sidebar.js";
import toDoContainer from "./src/main.js";

import './styles/global.css';

app.appendChild(sidebar());
app.appendChild(toDoContainer());