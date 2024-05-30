import {
  createListContainer, 
  addTodoListContainer, 
  createHtmlElm,
  addNewItem
} from '../utils'; 

import '../../styles/to-do.css';

function handleCheckClick(){
  alert('i exist!');
}

const toDoContainer = () => {
  const toDo = createHtmlElm('div');
  toDo.classList.add('to-do_list_container');

  const featuredContainer = createHtmlElm('div');
  featuredContainer.classList.add('feature-list');
  featuredContainer.innerHTML = `<div>
    <h2>Main</h2>
    <p>Total accurate descripton</p>
    </div>`
  toDo.appendChild(featuredContainer);

  const featuredItem = createHtmlElm('div');
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
  
  featuredItem.appendChild(addNewItem());
  featuredContainer.appendChild(featuredItem);
  
  featuredContainer.appendChild(addNewItem());
  
  return toDo;
}

export default toDoContainer;