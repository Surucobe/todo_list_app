import '../styles/to-do.css';

const toDoContainer = () => {
  const toDo = document.createElement('div');
  toDo.classList.add('to-do_list_container');

  const featuredConatiner = document.createElement('div');
  featuredConatiner.classList.add('feature-list');
  featuredConatiner.innerHTML = `<ul>
    <li>Make the project look good <input type='checkbox' /></li>
    <li>Make the project fully functional <input type='checkbox' /></li>
  </ul>`
  toDo.appendChild(featuredConatiner);

  return toDo;
}

export default toDoContainer;