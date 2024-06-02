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
  <div><input type='checkbox'> Make the project look good</input></div>
  <div><input type='checkbox' /> Make the project fully functional</div>
  <div><input type='checkbox' /> Test for any potential bugs</div>
  <div><input type='checkbox' /> Deploy</div>`;
  
  featuredItem.appendChild(main.addNewItemToPage());
  featuredItem.appendChild(main.addTodoItemToList('testing'));
  featuredContainer.appendChild(featuredItem);
  featuredContainer.appendChild(main.returnListContainer('Testing'));
  
  featuredContainer.appendChild(main.addNewItemToPage());
  
  return toDo;
}

export default toDoContainer;