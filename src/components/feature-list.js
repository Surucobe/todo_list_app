import renderTodoLists from '../utils';

import '../../styles/to-do.css';

const main = renderTodoLists()

const toDoContainer = () => {
  //Crea contenedor para las listas
  const toDo = document.createElement('div');
  toDo.classList.add('to-do_list_container');

  //this part contains all the lists inside the section
  const featuredContainer = document.createElement('div');
  featuredContainer.classList.add('feature-list');

  //this part hold the header of the section, it must be move somewhere else in the future
  const listHeader = document.createElement('div');
  listHeader.classList.add('header');
  listHeader.innerHTML = `<h2>Main</h2>
    <textarea>Total accurate descripton</textarea>`
  featuredContainer.appendChild(listHeader);
  toDo.appendChild(featuredContainer);


  featuredContainer.appendChild(main.returnListContainer('Main Testing List'));
  const addNewList = main.addNewItemToPage();
  // addNewList.addEventListener('click', () => main.handleNewElement(featuredContainer, main.returnListContainer('Template'), addNewList))
  // featuredContainer.appendChild(addNewList);
  
  return toDo;
}

export default toDoContainer;