import toDoContainer from "../../components/todo-container";

const list = (array, callback) => {
  const sidebarListContainer = document.createElement('ul');

  array.forEach(title => {
    const newTitle = document.createElement('li');
    newTitle.innerHTML = title;

    newTitle.addEventListener('click', (e) => {
      callback(toDoContainer(title));
    });

    sidebarListContainer.appendChild(newTitle);
  });

  return sidebarListContainer;
}

export default list;