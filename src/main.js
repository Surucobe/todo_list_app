import '../styles/to-do.css';

const toDoContainer = () => {
  const toDo = document.createElement('div');
  toDo.classList.add('to-do_list_container');

  const featuredConatiner = document.createElement('div');
  featuredConatiner.classList.add('feature-list');
  featuredConatiner.innerHTML = `<div>
    <h2>Main</h2>
    <p>Total accurate descripton</p>
    </div>`
  toDo.appendChild(featuredConatiner);

  const featuredItem = document.createElement('div');
  featuredItem.classList.add('feature-item');
  featuredItem.innerHTML = `<div>
  <h3>Project</h3>
  <hr class="solid">
  </div>
  <ul>
  <li><input type='checkbox' /> Make the project look good</li>
  <li><input type='checkbox' /> Make the project fully functional</li>
  <li><input type='checkbox' /> Test for any potential bugs</li>
  <li><input type='checkbox' /> Deploy</li>
  </ul>`;
  featuredConatiner.appendChild(featuredItem);

  return toDo;
}

export default toDoContainer;