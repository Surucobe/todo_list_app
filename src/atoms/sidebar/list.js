import listItem from "./list_item";

import toDoContainer from "../../components/todo-container";

const list = (array, callback) => {
  const sidebarListContainer = document.createElement('ul');

  array.forEach(title => {
    sidebarListContainer.appendChild(listItem(title, callback));
  });

  return sidebarListContainer;
}

export default list;