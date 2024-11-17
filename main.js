import { renderTodoLists } from "./src/utils/index.js";

const app = document.getElementById('app');

import toDoContainer from "./src/components/todo-container.js";
import sidebar from "./src/components/sidebar.js"
import modalContainer from "./src/components/modal/modalContainer.js";

import './styles/global.css';

const main = renderTodoLists();

app.appendChild(sidebar());

app.appendChild(modalContainer());

main.changeList(toDoContainer('week'));