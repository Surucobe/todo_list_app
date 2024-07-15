import {editButton} from './cells/editButton';
import {deleteButton} from './cells/deleteButton';
import {changeModalVisibility} from '../../components/modal/modalContainer';

const listContainer = (function(){
  const properDataSetValue = (str) => str.split(' ').join('_');

  const createListContainer = (todoTitle, id) => {
    const container = document.createElement('div');
    container.classList.add('feature-item');

    container.setAttribute(`data-${id}`, properDataSetValue(todoTitle.toLocaleLowerCase()))

    const titleContainer = document.createElement('div');
    
    const titleHeader = document.createElement('div');
    titleHeader.classList.add('container_header');

    const title = document.createElement('h3');
    title.innerHTML = todoTitle;
    titleHeader.appendChild(title)
    
    const divider = document.createElement('hr');
    divider.classList.add('solid');

    const modalEditButton = editButton();
    titleHeader.appendChild(modalEditButton);

    modalEditButton.addEventListener('click', () => changeModalVisibility(todoTitle.toLowerCase(), 'title'));

    const headerDeleteButton = deleteButton(changeModalVisibility, todoTitle.toLowerCase());
    headerDeleteButton.addEventListener('click', () => changeModalVisibility(todoTitle.toLowerCase(), 'delete'));

    titleContainer.appendChild(titleHeader);
    titleContainer.appendChild(divider);
    titleContainer.appendChild(headerDeleteButton);
    
    container.appendChild(titleContainer);

    return container;
  };

  return { createListContainer }
})()

export default listContainer