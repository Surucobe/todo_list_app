import { Collection, renderTodoLists } from '../utils';

import userProfile from '../atoms/sidebar/user';
import list from '../atoms/sidebar/list';

//reserved for the import on the styles
import '../../styles/sidebar.css';

import userPicture from '../assets/images/diabellstar.jpg';

const main = renderTodoLists();

const sidebar = (callback) => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar-sections');

  const user = userProfile(userPicture, 'Suru');
  sidebar.appendChild(user);
  
  const mainList = document.createElement('div');
  mainList.classList.add('main-list');
  
  const header = document.createElement('h2');
  header.innerText = 'My lists';

  const sidebarItemListContainer = list(Collection.getTitles(), callback);

  mainList.appendChild(header);
  mainList.appendChild(sidebarItemListContainer);
  mainList.appendChild(main.addNewItemToPage())

  sidebar.appendChild(mainList);

  return sidebar;
}

export default sidebar;