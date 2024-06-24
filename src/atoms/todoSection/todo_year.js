import {renderTodoLists} from "../../utils";

const main = renderTodoLists();

const todoYear = (query) => {
  const year = document.createElement('div');
  year.classList.add('feature-list');

  main.renderList(year, query);

  return year;
}

export default todoYear;