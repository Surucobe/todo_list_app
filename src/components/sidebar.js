import { renderTodoLists } from '../utils';
import Data from '../utils/data/Collection';

import userProfile from '../atoms/sidebar/user';
import list from '../atoms/sidebar/list';
import listItem from '../atoms/sidebar/list_item';

//reserved for the import on the styles
import '../../styles/sidebar.css';

import userPicture from '../assets/images/diabellstar.jpg';

const main = renderTodoLists();

const sidebar = () => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar-sections');

  sidebar.appendChild(userProfile(userPicture, 'Suru'));
  
  const mainList = document.createElement('div');
  mainList.classList.add('main-list');
  
  const header = document.createElement('h2');
  header.innerText = 'My lists';

  const sidebarItemListContainer = list(Data.getTitles());

  const addSectionTitle = main.addNewItemToPage();

  addSectionTitle.addEventListener('click', () => {
    const newElm = main.newSideBarElement();

    sidebarItemListContainer.appendChild(listItem(newElm.id));
  })

  mainList.appendChild(header);
  mainList.appendChild(sidebarItemListContainer);
  mainList.appendChild(addSectionTitle);

  sidebar.appendChild(mainList);

  return sidebar;
}

export default sidebar;