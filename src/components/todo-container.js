import {renderTodoLists} from '../utils';

import '../../styles/to-do.css';

const toDoContainer = (query) => {
  const { renderList } = renderTodoLists();

  const mainToDoContainer = document.createElement('div');
  mainToDoContainer.classList.add('to-do_list_container');

  const todoSection = document.createElement('div');
  todoSection.classList.add('feature-list');

  renderList(todoSection, query);

  mainToDoContainer.appendChild(todoSection);
  
  return mainToDoContainer;
}

export default toDoContainer;