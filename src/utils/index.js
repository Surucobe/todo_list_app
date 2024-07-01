//TODO: create a function that works the navigation
import Data from "./data/Collection";
import todoElement from "./todo-element";

export const renderTodoLists = function() {
  
  const { getCollection, createNewItem, createNewSection, deleteListItem, getCurrentPage } = Data;
  const { addTodoItemToList } = todoElement

  const handleNewElementInList = (query) => {
    const elm = createNewItem(query);
    const newTodoItem = addTodoItemToList(elm, query, handleCheckItem, handleItemDelete);

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
        todoListContainer.appendChild(addTodoItemToList(elm, title, handleCheckItem, handleItemDelete));
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