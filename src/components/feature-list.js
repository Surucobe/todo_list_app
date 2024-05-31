import todoListConstruction from '../utils';

import '../../styles/to-do.css';

const main = todoListConstruction()

const toDoContainer = () => {
  const toDo = document.createElement('div');
  toDo.classList.add('to-do_list_container');

  const featuredContainer = document.createElement('div');
  featuredContainer.classList.add('feature-list');
  featuredContainer.innerHTML = `<div>
    <h2>Main</h2>
    <textarea readonly>Total accurate descripton</textarea>
    </div>`
  toDo.appendChild(featuredContainer);

  const featuredItem = document.createElement('div');
  featuredItem.classList.add('feature-item');
  featuredItem.innerHTML = `<div>
  <h3>Project</h3>
  <hr class="solid">
  </div>
  <ul>
  <li><input type='checkbox'> Make the project look good</input></li>
  <li><input type='checkbox' /> Make the project fully functional</li>
  <li><input type='checkbox' /> Test for any potential bugs</li>
  <li><input type='checkbox' /> Deploy</li>
  </ul>`;
  
  featuredItem.appendChild(main.addNewItem());
  featuredContainer.appendChild(featuredItem);
  
  featuredContainer.appendChild(main.addNewItem());
  
  return toDo;
}

export default toDoContainer;