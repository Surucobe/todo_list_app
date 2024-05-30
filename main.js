const app = document.getElementById('app');

//importation of modules
import sidebar from "./src/components/sidebar.js";
import toDoContainer from "./src/components/feature-list.js";

import './styles/global.css';

app.appendChild(sidebar());
app.appendChild(toDoContainer());