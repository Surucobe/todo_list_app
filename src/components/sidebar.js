import { Collection } from '../utils';
import toDoContainer from './todo-container';

//reserved for the import on the styles
import '../../styles/sidebar.css';

import userPicture from '../assets/images/diabellstar.jpg';

const sidebar = (callback) => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar-sections');

  const user = document.createElement('div');
  user.classList.add('user-container');
  const userImage = new Image();
  userImage.src = userPicture
  user.appendChild(userImage);
  const userSpan = document.createElement('span');
  userSpan.innerHTML = `small text`;
  user.appendChild(userSpan);
  sidebar.appendChild(user);

  const mainList = document.createElement('div');
  mainList.classList.add('main-list');
  const header = document.createElement('h2');
  header.innerText = 'My lists';
  const sidebarItemListContainer = document.createElement('ul');
  Collection.getTitles().forEach(title => {
    const newTitle = document.createElement('li');
    newTitle.innerText = title

    newTitle.addEventListener('click', (e) => {
    // callback(title, console.log('we got here'))
    callback(toDoContainer(title))
  })

    sidebarItemListContainer.appendChild(newTitle);
  });
  
  // console.log(Collection.getTitles());

  mainList.appendChild(header);
  mainList.appendChild(sidebarItemListContainer);

  sidebar.appendChild(mainList);

  return sidebar;
}

export default sidebar;