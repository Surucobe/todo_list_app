import { createListContainer, addTodoListContainer, createHtmlElm } from './utils'; 

import '../styles/to-do.css';

function handleCheckClick(){ alert('i exist!');}

const toDoContainer = () => {
  const toDo = document.createElement('div');
  toDo.classList.add('to-do_list_container');

  const featuredContainer = document.createElement('div');
  featuredContainer.classList.add('feature-list');
  featuredContainer.innerHTML = `<div>
    <h2>Main</h2>
    <p>Total accurate descripton</p>
    </div>`
  toDo.appendChild(featuredContainer);

  const featuredItem = document.createElement('div');
  featuredItem.classList.add('feature-item');
  featuredItem.innerHTML = `<div>
  <h3>Project</h3>
  <hr class="solid">
  </div>
  <ul>
  <li><input onclick="handleCheckClick()" type='checkbox' /> Make the project look good</li>
  <li><input type='checkbox' /> Make the project fully functional</li>
  <li><input type='checkbox' /> Test for any potential bugs</li>
  <li><input type='checkbox' /> Deploy</li>
  </ul>`;
  const addNew = createHtmlElm('div');
  addNew.classList.add('add-new-element')
  addNew.innerHTML = '<span>+</span>';
  featuredItem.appendChild(addNew);
  featuredContainer.appendChild(featuredItem);
  const addNewSection = createHtmlElm('div');
  addNewSection.innerHTML = '<span>+</span>';
  addNewSection.classList.add('add-new-element')
  featuredContainer.appendChild(addNewSection);
  
  return toDo;
}

export default toDoContainer;