import {renderTodoLists} from "./src/utils/index.js";

const main = renderTodoLists()

const app = document.getElementById('app');

import toDoContainer from "./src/components/todo-container.js";
import sidebar from "./src/components/sidebar.js"

import './styles/global.css';

//TODO: add the changelist method in order to start rendering the new component every time the user navigates
app.appendChild(sidebar(main.changeList));
//todoContainer needs to receive a parameter to decided what is it going to render
main.changeList(toDoContainer('week'));