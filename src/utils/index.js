import Data from "./data/Collection";
import todoElement from "./todo-item/todo-element";
import listContainer from "./list-container/list-container";

export const renderTodoLists = function() {
  
  const {
    getCollection, createNewItem, createNewSection, deleteListItem, getCurrentPage, 
    createNewPage, findElement, modifyCheck
  } = Data;
  const { addTodoItemToList } = todoElement;
  const { createListContainer } = listContainer;

  const handleNewSection = (id) => {
    const elm = findElement(id, createNewSection);
    const section = returnListContainer(elm);
    return section;
  }

  const handleSectionDelete = () => {}

  const handleListDelete = (query) => {
    debugger
    const parent = document.querySelector('.feature-list');
    const child = document.querySelector(`[data-${getCurrentPage()}='${query}']`);

    removeElement(parent, child)
  }

  const handleItemDelete = (query, containerName) =>{
    const parent = document.querySelector(`[data-${getCurrentPage().toLowerCase()}="${containerName.toLowerCase()}"]`);
    const child = document.querySelector(`[data-${containerName}="${query}"]`);

    deleteListItem(query, containerName)

    removeElement(parent, child);
  }

  const handleNewElement = (container, elm, ref) => container.insertBefore(elm, ref);

  const returnUpper = (str) => str[0].toLocaleUpperCase() + str.slice(1);

  const handleCheckItem = (id, dataset) => {
    const elm = document.querySelector(`[data-${dataset}='${id}'] input`);

    if(elm.checked){
      document.querySelector(`[data-${dataset}='${id}'] textarea`).style.textDecoration = 'line-through';
    }else{
      document.querySelector(`[data-${dataset}='${id}'] textarea`).style.textDecoration = 'none';
    }
    
    findElement(id, modifyCheck);
  }

  const handleNewElementInList = (title) => {
    const elm = findElement(title, createNewItem)
    const newTodoItem = addTodoItemToList(elm, title, handleCheckItem, handleItemDelete);

    return newTodoItem;
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

  const newSideBarElement = () => {
    const newCollectionElement = createNewPage();

    return newCollectionElement;
  }

  //Adds new item to the page
  const addNewItemToPage = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';

    return add;
  };

  const returnListContainer = (elm, dataId = getCurrentPage().toLowerCase()) => {
    const {title, todoList, id} = elm;

    const todoListContainer = createListContainer(returnUpper(title), dataId, handleListDelete);
    const addNew = addNewItemToPage();

    if(todoList.length != 0){
      todoList.forEach(elm => {
        todoListContainer.appendChild(addTodoItemToList(elm, title, handleCheckItem, handleItemDelete));
      })
    }

    addNew.addEventListener('click', () => {
      handleNewElement(todoListContainer, handleNewElementInList(id),addNew)
    });

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
    newSection.addEventListener('click', () => {
      debugger
      handleNewElement(container, handleNewSection(collectionToRender.id) ,newSection)
    });
    container.appendChild(newSection);
}

  const changeList = (child) => {
    const parent = document.getElementById('app');
    if(parent.childNodes.length > 2){
      removeElement(parent, parent.childNodes[parent.childNodes.length-1])
    }
    
    parent.appendChild(child)
  }

  return {renderList, changeList, addNewItemToPage, newSideBarElement, handleListDelete}
}