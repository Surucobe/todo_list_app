import {renderTodoLists} from "../utils";

const main = renderTodoLists();

const todoMonth = (query) => {
  const month = document.createElement('div');
  month.classList.add('feature-list');

  main.renderList(month, query);

  return month;
}

export default todoMonth;