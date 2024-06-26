import {renderTodoLists} from '../utils';

import '../../styles/to-do.css';

const main = renderTodoLists()

const toDoContainer = (query) => {
  const mainToDoContainer = document.createElement('div');
  mainToDoContainer.classList.add('to-do_list_container');

  const todoSection = document.createElement('div');
  todoSection.classList.add('feature-list');

  main.renderList(todoSection, query);

  mainToDoContainer.appendChild(todoSection);
  
  return mainToDoContainer;
}

export default toDoContainer;