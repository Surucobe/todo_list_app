//TODO: fix priority and calendar to update with changes
import Data from "../data/Collection";

import priorityElement from "./priorityElm/priority";
import calendarElement from "./calendarElm/calendar";

const todoElement = (function(){
  const { modifyText, findElement } = Data

  const handleDataSet = (str) => str.split(' ').join('_');

  function addTodoItemToList(obj, title, handleCheck, handleDelete) {
    const listItemContainer = document.createElement('div');
    listItemContainer.setAttribute(`data-${handleDataSet(title)}`, obj.id);
    
    const text = document.createElement('textarea');
    text.innerHTML = obj.text;
    text.maxLength = '50';

    if(obj.checked){
      text.style.textDecoration = 'line-through';
    }
    
    const listItemInput = document.createElement('input');
    listItemInput.type = 'checkbox';
    listItemInput.checked = obj.checked;

    const deleteItem = document.createElement('span');
    deleteItem.classList.add('delete-item-element');
    deleteItem.innerHTML = 'X';

    deleteItem.addEventListener('click', () => handleDelete(obj.id, title.toLowerCase()))

    const dueDate = calendarElement(obj.dueDate);

    const priority = priorityElement(obj.priority, obj.id);

    listItemContainer.appendChild(listItemInput);
    listItemContainer.appendChild(text);
    listItemContainer.appendChild(dueDate);
    listItemContainer.appendChild(priority);
    listItemContainer.appendChild(deleteItem);

    listItemInput.addEventListener('click', () => handleCheck(obj.id, title.toLowerCase()))

    text.addEventListener('input', (e) => {
      findElement(obj.id, modifyText)

      if(listItemInput.checked){
        listItemInput.checked = false;
        handleCheck(obj.id, title.toLowerCase());
      }
    });

    return listItemContainer;
  };

  return {addTodoItemToList}
})()

export default todoElement;