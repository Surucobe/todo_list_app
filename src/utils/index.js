//TODO: create a function that works the navigation
import dayjs from "dayjs";

//TODO: find a better shorter name
const Collection = (function(){
  const CollectionList = [
    {
      id: 'Week',
      description: 'Total accurate descripton',
      todoCollection: [
        {
          title: 'Testing new approach',
          todoList: [
            {
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '0/0/0',
              priority: 'important'
            }
          ]
        }
      ]
    }
  ]

  const getCollection = () => CollectionList;

  function newElmentForCollection(obj){
    CollectionList.push(obj);
    console.log(obj);
  }

  return {getCollection, newElmentForCollection};
})();

const renderTodoLists = function() {
  
  const { getCollection, newElmentForCollection } = Collection

  //find new approach for this
  const renderHeader = () => {
    const {id, description} = getCollection()[0];

    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('h2');
    headerTitle.innerHTML = id;

    const headerDescription = document.createElement('textarea');
    headerDescription.innerHTML = description;

    header.appendChild(headerTitle);
    header.appendChild(headerDescription);

    return header;
  }

  const createListContainer = (todoTitle) => {
    const container = document.createElement('div');
    container.classList.add('feature-item');

    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h3');
    title.innerHTML = todoTitle;
    const divider = document.createElement('hr');
    divider.classList.add('solid');
    const list = document.createElement('ul');

    titleContainer.appendChild(title);
    titleContainer.appendChild(divider);
    titleContainer.appendChild(list);
    
    container.appendChild(titleContainer);

    return container;
  };

  const calendarElement = () => {
    const dueDate = document.createElement('input');
    dueDate.defaultValue = dayjs().format('YYYY-MM-DD');
    dueDate.classList.add('due-date');
    dueDate.type = 'date';

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

  const handleNewElement = (container, elm, ref) => {
    // newElmentForCollection('testing');
    container.insertBefore(elm, ref);
  };

  //TODO: fix styles
  //This one goes inside the containers to add a new item to the list
  const addTodoItemToList = (obj) => {
    const listItemContainer = document.createElement('div');
    
    const text = document.createElement('textarea');
    text.innerHTML = obj.text;
    text.maxLength = '50';
    
    const listItemInput = document.createElement('input');
    listItemInput.type = 'checkbox';

    const dueDate = calendarElement();

    const priority = priorityElement(obj.priority);

    listItemContainer.appendChild(listItemInput);
    listItemContainer.appendChild(text);
    listItemContainer.appendChild(dueDate);
    listItemContainer.appendChild(priority);

    handleCheckItem(listItemContainer);

    return listItemContainer;
  };

  //Adds new item to the page
  const addNewItemToPage = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';

    return add;
  };

  const handleCheckItem = (elm) => {
    elm.addEventListener('click', (e) =>{
      if(elm.childNodes[0].checked){
          elm.style.textDecoration = 'line-through';
      }else{
          elm.style.textDecoration = 'none';
      }
  })
  }

  const returnListContainer = () => {
    const todoList = createListContainer(getCollection()[0].todoCollection[0].title);
    const addNew = addNewItemToPage();

    console.log(getCollection()[0].todoCollection)

    addNew.addEventListener('click', () => {
      handleNewElement(todoList, addTodoItemToList(getCollection()[0].todoCollection[0].todoList[0]), addNew)
    })

    todoList.appendChild(addNew)
    
    return todoList;
  }

  const removeListContainer = (parent, child) => {
    parent.removeChild(child);
  }

  const firstRender = (listName) => {}

  const changeList = (currentElm, newElm) => {}

  return {addNewItemToPage, returnListContainer, addTodoItemToList, handleNewElement, renderHeader, firstRender}
}

export default renderTodoLists;