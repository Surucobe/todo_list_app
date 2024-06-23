import {renderTodoLists} from '../utils';

import todoWeek from '../atoms/todo_week';
import todoMonth from '../atoms/todo_month';
import todoYear from '../atoms/todo_year';

import '../../styles/to-do.css';

const main = renderTodoLists()

const toDoContainer = (query) => {
  const toDo = document.createElement('div');
  toDo.classList.add('to-do_list_container');

  switch (query) {
    case 'week':
      console.log('week')
      toDo.appendChild(todoWeek(query));
      break;
    case 'month':
      console.log('month')
        toDo.appendChild(todoMonth(query));
        break;
    case 'year':
      console.log('year')
        toDo.appendChild(todoYear(query));
        break;
  }
  
  return toDo;
}

export default toDoContainer;