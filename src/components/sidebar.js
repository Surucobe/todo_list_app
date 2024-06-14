import { Collection } from '../utils';

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

    sidebarItemListContainer.appendChild(newTitle);
  });
  
  console.log(Collection.getTitles());

  mainList.appendChild(header);
  mainList.appendChild(sidebarItemListContainer);

  mainList.addEventListener('click', (e) => {
    callback()
  })

  sidebar.appendChild(mainList);

  return sidebar;
}

export default sidebar;