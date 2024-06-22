import {renderTodoLists} from "./src/utils/index.js";

const main = renderTodoLists()

const app = document.getElementById('app');

import toDoContainer from "./src/components/todo-container.js";
import sidebar from "./src/components/sidebar.js"

import './styles/global.css';

app.appendChild(sidebar(main.changeList));
//todoContainer needs to receive a paramtere to decided what is it going to render
console.log(app)
main.changeList(app, toDoContainer);
console.log(app)