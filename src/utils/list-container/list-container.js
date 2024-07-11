import { changeModalVisibility } from '../../components/modal';
import {editButton} from './cells/editButton';
import {deleteButton} from './cells/deleteButton';

const listContainer = (function(){
  const properDataSetValue = (str) => str.split(' ').join('_');

  const createListContainer = (todoTitle, id, handleDelete) => {
    const container = document.createElement('div');
    container.classList.add('feature-item');

    container.setAttribute(`data-${id}`, properDataSetValue(todoTitle.toLocaleLowerCase()))

    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h3');
    title.classList.add('container_header')
    title.innerHTML = todoTitle;
    
    const divider = document.createElement('hr');
    divider.classList.add('solid');

    title.appendChild(editButton());

    title.addEventListener('click', () => changeModalVisibility(todoTitle.toLocaleLowerCase()));

    const headerDeleteButton = deleteButton(handleDelete);

    titleContainer.appendChild(title);
    titleContainer.appendChild(divider);
    titleContainer.appendChild(headerDeleteButton);
    
    container.appendChild(titleContainer);

    return container;
  };

  return { createListContainer }
})()

export default listContainer