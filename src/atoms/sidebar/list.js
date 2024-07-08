import listItem from "./list_item";

const list = (array) => {
  const sidebarListContainer = document.createElement('ul');

  array.forEach(title => sidebarListContainer.appendChild(listItem(title)));

  return sidebarListContainer;
}

export default list;