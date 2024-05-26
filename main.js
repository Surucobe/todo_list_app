const app = document.getElementById('app');

//importation of modules
import sidebar from "./src/sidebar.js";
import header from './src/header.js';
import toDoContainer from "./src/main.js";

import './styles/global.css';

app.appendChild(sidebar());
//header is being put under survillance to see if it will stay
// app.appendChild(header());
app.appendChild(toDoContainer());