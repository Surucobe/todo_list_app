import toDoContainer from "../../components/todo-container";

const listItem = (title, callback) => {
  const newTitle = document.createElement('li');
    newTitle.innerHTML = title;

    newTitle.addEventListener('click', (e) => {
      callback(toDoContainer(title));
    });

    return newTitle;
}

export default listItem;