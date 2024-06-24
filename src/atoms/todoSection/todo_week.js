import {renderTodoLists} from "../../utils";

const main = renderTodoLists();

const todoWeek = (query) => {
  //this part contains all the lists inside the section
  const Week = document.createElement('div');
  Week.classList.add('feature-list');

  main.renderList(Week, query);

  return Week;
}

export default todoWeek;