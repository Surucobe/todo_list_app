import dayjs from "dayjs";

const todoElement = (function(){

  const calendarElement = (date) => {
    const dueDate = document.createElement('input');
    dueDate.classList.add('due-date');
    dueDate.type = 'date';

    if(date == ''){
      console.log('this one is empty')
      dueDate.defaultValue = dayjs().format('YYYY-MM-DD');
    }else{
      dueDate.defaultValue = dayjs().format(date);
    }

    return dueDate;
  }

  const priorityElement = (value) => {
    const select = document.createElement('select');

    const defaultOption = document.createElement('option');
    defaultOption.innerHTML = '- Priority -';
    defaultOption.disabled = true;
    defaultOption.style.color = 'white';
    select.appendChild(defaultOption);

    const low = document.createElement('option');
    low.value = 'green';
    low.style.color = 'green';
    low.innerHTML = 'Low';
    select.appendChild(low);

    const important = document.createElement('option');
    important.value = 'orange';
    important.style.color = 'orange';
    important.innerHTML = 'Important';
    select.appendChild(important);

    const urgent = document.createElement('option');
    urgent.value = 'red';
    urgent.style.color = 'red';
    urgent.innerHTML = 'Urgent';
    select.appendChild(urgent);

    select.addEventListener('change', (e) => {
      const color = e.target.value;
      e.target.style.color = color;
    })

    switch (value) {
      case 'low':
        low.defaultSelected = true;
        select.style.color = 'green';
        break;
      case 'important':
        important.defaultSelected = true;
        select.style.color = 'orange';
        break;
      case 'urgent':
        urgent.defaultSelected = true;
        select.style.color = 'red';
        break;
      default:
        defaultOption.defaultSelected = true;
        select.style.color = '#ccc';
        break;
    }

    return select;
  }

  const handleDataSet = (str) => str.split(' ').join('_');

  function addTodoItemToList(obj, title, handleCheck, handleDelete) {
    const listItemContainer = document.createElement('div');
    listItemContainer.setAttribute(`data-${handleDataSet(title)}`, obj.id);
    console.log(typeof title.toLowerCase())
    console.log(listItemContainer.dataset[`${title.toLowerCase()}`])
    
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

    deleteItem.addEventListener('click', () => handleDelete(obj.id, `${title.toLowerCase()}`))

    const dueDate = calendarElement(obj.dueDate);

    const priority = priorityElement(obj.priority);

    listItemContainer.appendChild(listItemInput);
    listItemContainer.appendChild(text);
    listItemContainer.appendChild(dueDate);
    listItemContainer.appendChild(priority);
    listItemContainer.appendChild(deleteItem);

    listItemInput.addEventListener('click', () => handleCheck(obj.id, title.toLowerCase()))

    text.addEventListener('input', (e) => {
      if(listItemInput.checked){
        listItemInput.checked = false;
        handleCheck(obj.id);
      }
    });

    return listItemContainer;
  };

  return {addTodoItemToList}
})()

export default todoElement;