import { changeModalVisibility } from '../../components/modal';

import editIcon from '../../assets/images/edit-icon.svg';

const listContainer = (function(){
  const createListContainer = (todoTitle, id) => {
    const container = document.createElement('div');
    container.classList.add('feature-item');
    container.setAttribute(`data-${id}`, todoTitle.toLocaleLowerCase())

    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h3');
    title.classList.add('container_header')
    title.innerHTML = todoTitle;
    
    const divider = document.createElement('hr');
    divider.classList.add('solid');

    const editButton = document.createElement('div');
    editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.21 22 16.22V3.78C22 2.8 21.2 2 20.22 2M11.06 15H9V12.94L15.06 6.88L17.12 8.94L11.06 15M18.7 7.35L17.7 8.35L15.65 6.3L16.65 5.3C16.86 5.08 17.21 5.08 17.42 5.3L18.7 6.58C18.92 6.79 18.92 7.14 18.7 7.35M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z" /></svg>'
    title.appendChild(editButton);
    editButton.classList.add('edit-title-btn');

    title.addEventListener('click', () => changeModalVisibility(id));

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', () => handleListDelete())

    titleContainer.appendChild(title);
    titleContainer.appendChild(divider);
    titleContainer.appendChild(deleteButton);
    
    container.appendChild(titleContainer);

    return container;
  };

  return { createListContainer }
})()

export default listContainer