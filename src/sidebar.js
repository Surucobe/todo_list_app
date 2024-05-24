//reserved for the import on the styles
import '../styles/sidebar.css'

const sidebar = () => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar-sections');

  const user = document.createElement('div');
  user.classList.add('user-container');
  user.innerHTML = `<img src="" alt="user profile image" />
  <span>smal text</span>`;
  sidebar.appendChild(user);

  const mainList = document.createElement('div');
  mainList.classList.add('main-list')
  mainList.innerHTML = `<h2>My lists</h2>
  <ul>
    <li>Projects</li>
    <li>Documentation</li>
    <li>Articles</li>
  </ul>
  `
  sidebar.appendChild(mainList);

  return sidebar;
}

export default sidebar;