import {renderTodoLists} from '../utils';

import todoWeek from '../atoms/todo_week';

import '../../styles/to-do.css';

const main = renderTodoLists()

const toDoContainer = () => {
  //Crea contenedor para las listas
  const toDo = document.createElement('div');
  toDo.classList.add('to-do_list_container');

  toDo.appendChild(todoWeek());
  
  return toDo;
}

export default toDoContainer;