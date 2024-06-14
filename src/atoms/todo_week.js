import {renderTodoLists} from "../utils";

const main = renderTodoLists();

const todoWeek = () => {
  //this part contains all the lists inside the section
  const Week = document.createElement('div');
  Week.classList.add('feature-list');

  //render header
  Week.appendChild(main.renderHeader());
  
  //render first container inside the section
  Week.appendChild(main.returnListContainer());

  const addNewList = main.addNewItemToPage();
  addNewList.addEventListener('click', () => main.handleNewElement(Week, main.returnListContainer('Template'), addNewList))
  Week.appendChild(addNewList);

  return Week;
}

export default todoWeek;