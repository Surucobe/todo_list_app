import {renderTodoLists} from "../utils";

const main = renderTodoLists();

const todoMonth = () => {
  const month = document.createElement('div');
  month.classList.add('feature-list');

  main.renderList(month, 'month');

  return month;
}

export default todoMonth;