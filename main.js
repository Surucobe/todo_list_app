import {renderTodoLists} from "./src/utils/index.js";

const main = renderTodoLists()

const app = document.getElementById('app');

import toDoContainer from "./src/components/feature-list.js";
import sidebar from "./src/components/sidebar.js"

import './styles/global.css';

app.appendChild(sidebar(main.changeList));
app.appendChild(toDoContainer());