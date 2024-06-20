//TODO: create a function that works the navigation
import dayjs from "dayjs";

//TODO: find a better shorter name
export const Collection = (function(){
  const CollectionList = [
    {
      id: 'week',
      description: 'Total accurate description',
      todoCollection: [
        {
          title: 'Monday',
          todoList: [
            {
              checked: true,
              text: "i'm the first element inside monday",
              //YY/MM/DD
              dueDate: '2024-06-19',
              priority: 'important'
            },
            {
              checked: false,
              text: "i'm the second element inside monday",
              //YY/MM/DD
              dueDate: '2024-06-22',
              priority: 'low'
            },
          ]
        },
        {
          title: 'Thursday',
          todoList: [
            {
              checked: false,
              text: "i'm the first element inside thursday",
              //YY/MM/DD
              dueDate: '2024-07-19',
              priority: 'important'
            },
            {
              checked: false,
              text: "i'm the second element inside thursday",
              //YY/MM/DD
              dueDate: '2024-08-22',
              priority: 'urgent'
            },
          ]
        },
      ]
    },
    {
      id: 'month',
      description: 'Total accurate descripton',
      todoCollection: [
        {
          title: 'Testing new approach',
          todoList: [
            {
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '0-0-0',
              priority: 'important'
            }
          ]
        },
        {
          title: 'Testing new approach',
          todoList: [
            {
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '0-0-0',
              priority: 'low'
            }
          ]
        },
      ]
    },
    {
      id: 'year',
      description: 'Total accurate descripton',
      todoCollection: [
        {
          title: 'Testing new approach',
          todoList: [
            {
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '0-0-0',
              priority: 'important'
            }
          ]
        }
      ]
    },
  ]

  const getCollection = () => CollectionList;

  const getTitles = () => {
    const test = CollectionList.map(item => item.id);

    return test
  }

  function createNewPage(){}
  
  function createNewListItem(){
    const template = {
      checked: false,
      text: "",
      dueDate: dayjs().format('YYYY-MM-DD'),
      priority: ''
    }

    return template
  }

  function createNewItem(query){
    const currentPage = document.querySelector('.header h2').innerHTML.toLocaleLowerCase();
    let elementToSend

    CollectionList.some(elm => {
      if(elm.id == currentPage){
        elm.todoCollection.forEach(obj => {
          if(obj.title == query){
            obj.todoList.push(createNewListItem());
            console.log(obj)
            elementToSend = obj.todoList[obj.todoList.length-1]
          }
        })
      }
    })

    return elementToSend
  }

  return {getCollection, getTitles, createNewItem};
})();

export const renderTodoLists = function() {
  
  const { getCollection, createNewItem } = Collection;

  const handleNewElementInList = (query) => {
    const elm = createNewItem(query);
    const newTodoItem = addTodoItemToList(elm);

    return newTodoItem;
  }

  const returnUpper = (str) => str[0].toLocaleUpperCase() + str.slice(1);

  const handleCheckItem = (elm, modify) => {
    if(elm.childNodes[0].checked){
        modify.style.textDecoration = 'line-through';
    }else{
        modify.style.textDecoration = 'none';
    }
  }

  const calendarElement = (date) => {
    const dueDate = document.createElement('input');
    dueDate.defaultValue = dayjs().format(date);
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

  const renderHeader = (id, description) => {

    const header = document.createElement('div');
    header.classList.add('header');

    const headerTitle = document.createElement('h2');
    headerTitle.innerHTML = returnUpper(id);

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

  const handleNewElement = (container, elm, ref) => {
    container.insertBefore(elm, ref);
  };

  //This one goes inside the containers to add a new item to the list
  const addTodoItemToList = (obj) => {
    const listItemContainer = document.createElement('div');
    
    const text = document.createElement('textarea');
    text.innerHTML = obj.text;
    text.maxLength = '50';
    
    const listItemInput = document.createElement('input');
    listItemInput.type = 'checkbox';
    listItemInput.checked = obj.checked;

    const dueDate = calendarElement(obj.dueDate);

    const priority = priorityElement(obj.priority);

    listItemContainer.appendChild(listItemInput);
    listItemContainer.appendChild(text);
    listItemContainer.appendChild(dueDate);
    listItemContainer.appendChild(priority);

    listItemContainer.addEventListener('click', () => handleCheckItem(listItemContainer, text))
    handleCheckItem(listItemContainer, text);

    return listItemContainer;
  };

  //Adds new item to the page
  const addNewItemToPage = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';

    return add;
  };

  const returnListContainer = (elm) => {
    const {title, todoList} = elm;

    const todoListContainer = createListContainer(title);
    const addNew = addNewItemToPage();

    if(todoList != undefined){
      todoList.forEach(elm => {
        todoListContainer.appendChild(addTodoItemToList(elm));
      })
    }

    addNew.addEventListener('click', () => handleNewElement(todoListContainer, handleNewElementInList(title),addNew));

    todoListContainer.appendChild(addNew);
    
    return todoListContainer;
  }

  const removeListContainer = (parent, child) => {
    parent.removeChild(child);
  }

  //functions takes the container in which it will render and the name of the object that will be use for it
  const renderList = (container, ref) => {
    let collectionToRender
    getCollection().some((obj) => {
      if(obj.id == ref){
        collectionToRender = obj;
      }
    })

    //search for the obj based on the name passed down from the container
    //example of how to handle the following
    //addNewList.addEventListener('click', () => main.handleNewElement(Week, main.returnListContainer('Template'), addNewList));

    container.appendChild(renderHeader(collectionToRender.id, collectionToRender.description));

    collectionToRender.todoCollection.forEach(elm => {
      container.appendChild(returnListContainer(elm));
    });

    const newSection = addNewItemToPage();
    newSection.addEventListener('click', () => handleNewElement(container, returnListContainer(collectionToRender) ,newSection))
    container.appendChild(newSection);
}

  const changeList = (/*currentElm, newElm*/) => {
    console.log('We here mate');
  }

  return {addNewItemToPage, returnListContainer, addTodoItemToList, handleNewElement, renderHeader, renderList, changeList}
}