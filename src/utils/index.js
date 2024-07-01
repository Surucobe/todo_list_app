//TODO: create a function that works the navigation
import dayjs from "dayjs";

export const Collection = (function(){
  const CollectionList = [
    {
      id: 'week',
      title: 'Week',
      description: 'Total accurate description',
      todoCollection: [
        {
          id: 'monday',
          title: 'Monday',
          todoList: [
            {
              id: 'monday_1',
              checked: true,
              text: "i'm the first element inside monday",
              //YY/MM/DD
              dueDate: '2024-06-19',
              priority: 'important'
            },
            {
              id: 'monday_2',
              checked: false,
              text: "i'm the second element inside monday",
              //YY/MM/DD
              dueDate: '2024-06-22',
              priority: 'low'
            },
          ]
        },
        {
          id: 'thursday',
          title: 'Thursday',
          todoList: [
            {
              id: 'thursday_1',
              checked: false,
              text: "i'm the first element inside thursday",
              //YY/MM/DD
              dueDate: '2024-07-19',
              priority: 'important'
            },
            {
              id: 'thursday_2',
              checked: false,
              text: "i'm the second element inside thursday",
              //YY/MM/DD
              dueDate: '2024-08-22',
              priority: 'urgent'
            },
            {
              id: 'thursday_3',
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
      title: 'Month',
      description: 'Total accurate descripton',
      todoCollection: [
        {
          id: 'may',
          title: 'May',
          todoList: [
            {
              id: 'may_1',
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '',
              priority: 'important'
            }
          ]
        },
        {
          id: 'july',
          title: 'July',
          todoList: [
            {
              id: 'may_2',
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '',
              priority: 'low'
            }
          ]
        },
      ]
    },
    {
      id: 'year',
      title: 'Year',
      description: 'Total accurate descripton',
      todoCollection: [
        {
          title: '2024',
          todoList: [
            {
              id: '2024_1',
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '',
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

  const getCurrentPage = () => document.querySelector('.header h2').innerHTML.toLocaleLowerCase();

  function createNewPage(){
    CollectionList.push(
      {
        id: 'testing',
        description: 'New element added',
        todoCollection: []
      }
    )
    
    return CollectionList[CollectionList.length-1];
  }
  
  function createNewListItem(id){
    const template = {
      id: id,
      checked: false,
      text: "",
      dueDate: dayjs().format('YYYY-MM-DD'),
      priority: ''
    }

    return template
  }

  function createNewSection() {
    let returningItem;
    const currentPage = getCurrentPage();

    const section = {
      title: 'write your title',
      todoList: []
    };

    CollectionList.some(obj => {
      if(obj.id == currentPage){
        obj.todoCollection.push(section);
        returningItem = obj.todoCollection[obj.todoCollection.length-1];
      }
    });

    return returningItem;
  }

  function createItemId(id, num){
    const number = Number(num.match(/\d+/)[0])+1;

    return `${id}_${number}`
  }

  function createNewItem(query){
    const currentPage = getCurrentPage();
    let elementToSend

    CollectionList.forEach(elm => {
      if(elm.id == currentPage){
        elm.todoCollection.forEach(obj => {
          if(obj.title == query){
            obj.todoList.push(createNewListItem(createItemId(obj.id, obj.todoList[obj.todoList.length-1].id)));
            elementToSend = obj.todoList[obj.todoList.length-1]
          }
        })
        return true
      }
    })

    return elementToSend
  }

  //TODO: Find the way to fix this with recursivity
  function deleteListItem(query, containerName) {
    const currentPage = getCurrentPage();

    CollectionList.some(elm => {
      if(elm.id == currentPage){
        elm.todoCollection.forEach(obj => {
          if(obj.id == containerName){
            obj.todoList.forEach((item, index) => {
              if(item.id == query){
                obj.todoList.splice(index, 1);
              }
            })
          }
        })
      }
    })
  }

  return {getCollection, getTitles, createNewItem, createNewSection, createNewPage, deleteListItem, getCurrentPage};
})();

export const renderTodoLists = function(mainParentContainer) {
  
  const { getCollection, createNewItem, createNewSection, deleteListItem, getCurrentPage } = Collection;

  const handleNewElementInList = (query) => {
    console.log(query)
    debugger
    const elm = createNewItem(query);
    const newTodoItem = addTodoItemToList(elm, query);

    return newTodoItem;
  }

  const handleNewSection = () => {
    const section = returnListContainer(createNewSection());
    return section;
  }

  const handleSectionDelete = () => {}

  const handleListDelete = () => {
    alert('works');
  }

  const handleItemDelete = (query, containerName) =>{
    const parent = document.querySelector(`[data-${getCurrentPage().toLocaleLowerCase()}="${containerName}"]`);
    const child = document.querySelector(`[data-${containerName}="${query}"]`);
    //calls function to delete element from the collection
    deleteListItem(query, containerName)

    //once the element is delted from the collection is then remove from the DOM
    removeElement(parent, child);
  }

  const handleNewElement = (container, elm, ref) => container.insertBefore(elm, ref);

  const returnUpper = (str) => str[0].toLocaleUpperCase() + str.slice(1);

  const handleCheckItem = (elm, modify) => {
    if(elm.checked){
        modify.style.textDecoration = 'line-through';
    }else{
        modify.style.textDecoration = 'none';
    }
  }

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

  const createListContainer = (todoTitle, id) => {
    const container = document.createElement('div');
    container.classList.add('feature-item');
    container.setAttribute(`data-${id}`, todoTitle.toLocaleLowerCase())

    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h3');
    title.innerHTML = todoTitle;
    const divider = document.createElement('hr');
    divider.classList.add('solid');
    const list = document.createElement('ul');

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', () => handleListDelete())

    titleContainer.appendChild(title);
    titleContainer.appendChild(divider);
    titleContainer.appendChild(list);
    titleContainer.appendChild(deleteButton);
    
    container.appendChild(titleContainer);

    return container;
  };

  const newSideBarElement = () => {
    const newCollectionElement = Collection.createNewPage();

    console.log(newCollectionElement)

    return newCollectionElement;
  }

  //This one goes inside the containers to add a new item to the list
  const addTodoItemToList = (obj, title) => {
    const listItemContainer = document.createElement('div');
    listItemContainer.setAttribute(`data-${title}`, obj.id);
    
    const text = document.createElement('textarea');
    text.innerHTML = obj.text;
    text.maxLength = '50';
    
    const listItemInput = document.createElement('input');
    listItemInput.type = 'checkbox';
    listItemInput.checked = obj.checked;

    const deleteItem = document.createElement('span');
    deleteItem.classList.add('delete-item-element');
    deleteItem.innerHTML = 'X';

    deleteItem.addEventListener('click', () => handleItemDelete(obj.id, title.toLowerCase()))

    const dueDate = calendarElement(obj.dueDate);

    const priority = priorityElement(obj.priority);

    listItemContainer.appendChild(listItemInput);
    listItemContainer.appendChild(text);
    listItemContainer.appendChild(dueDate);
    listItemContainer.appendChild(priority);
    listItemContainer.appendChild(deleteItem);

    listItemInput.addEventListener('click', () => handleCheckItem(listItemInput, text))
    handleCheckItem(listItemInput, text);

    text.addEventListener('input', (e) => {
      if(listItemInput.checked){
        listItemInput.checked = false;
        handleCheckItem(listItemInput, text);
      }
    });

    return listItemContainer;
  };

  //Adds new item to the page
  const addNewItemToPage = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';

    return add;
  };

  const returnListContainer = (elm, id) => {
    const {title, todoList} = elm;

    const todoListContainer = createListContainer(returnUpper(title), id);
    const addNew = addNewItemToPage();

    if(todoList != undefined){
      todoList.forEach(elm => {
        todoListContainer.appendChild(addTodoItemToList(elm, title));
      })
    }

    addNew.addEventListener('click', () => handleNewElement(todoListContainer, handleNewElementInList(title),addNew));

    todoListContainer.appendChild(addNew);
    
    return todoListContainer;
  }

  const removeElement = (parent, child) => parent.removeChild(child);

  //functions takes the container in which it will render and the name of the object that will be use for it
  const renderList = (container, ref) => {
    let collectionToRender
    getCollection().some((obj) => {
      if(obj.id == ref){
        collectionToRender = obj;
      }
    })

    container.appendChild(renderHeader(collectionToRender.id, collectionToRender.description));

    collectionToRender.todoCollection.forEach(elm => container.appendChild(returnListContainer(elm, collectionToRender.id)));

    const newSection = addNewItemToPage();
    newSection.addEventListener('click', () => handleNewElement(container, handleNewSection() ,newSection));
    container.appendChild(newSection);
}

  const changeList = (child) => {
    const parent = document.getElementById('app')
    if(parent.childNodes.length > 1){
      removeElement(parent, parent.childNodes[1])
    }
    
    parent.appendChild(child)
  }

  return {renderList, changeList, addNewItemToPage, handleNewElement, newSideBarElement}
}