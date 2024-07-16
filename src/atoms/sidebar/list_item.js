import { renderTodoLists } from "../../utils";
import toDoContainer from "../../components/todo-container";

const listItem = (title) => {
  const { changeList } = renderTodoLists();

  const newTitle = document.createElement('li');
    newTitle.innerHTML = title;

    newTitle.addEventListener('click', (e) => {
      changeList(toDoContainer(title));
    });

    return newTitle;
}

export default listItem;