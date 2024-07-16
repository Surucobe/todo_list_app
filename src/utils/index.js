import Data from "./data/Collection";
import todoElement from "./todo-item/todo-element";
import listContainer from "./list-container/list-container";
import { changeModalVisibility } from "../components/modal/modalContainer";
import toDoContainer from "../components/todo-container";

export const renderTodoLists = function() {
  
  const {
    createNewItem, createNewSection, deleteListItem, getCurrentPage, 
    createNewPage, findElement, modifyCheck
  } = Data;
  const { addTodoItemToList } = todoElement;
  const { createListContainer } = listContainer;

  const handleNewSection = (id) => {
    const elm = findElement(id, createNewSection);
    const section = returnListContainer(elm);
    return section;
  }

  function findElementInSidebar(id){
    let elementInSidebar
    const parent = document.querySelector('ul');
    const sidebar = document.querySelector('.sidebar-sections');
    const sidebarList = sidebar.querySelectorAll(`li`);

    sidebarList.forEach(elm => {
      if(elm.innerHTML == id){
        elementInSidebar = elm;
      }
    })

    removeElement(parent, elementInSidebar);

    return document.querySelector('li').innerHTML
  }

  const handlePageDelete = (id) => {
    const elm = findElementInSidebar(id);
    const parent = document.querySelector('.feature-list');

    changeList(toDoContainer(elm));
  }

  const handleListDelete = (query) => {
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

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete-page')
    deleteBtn.innerHTML = 'X';
    deleteBtn.addEventListener('click', () => changeModalVisibility(id, 'delete-page'));

    header.appendChild(headerTitle);
    header.appendChild(headerDescription);
    header.appendChild(deleteBtn);

    return header;
  }

  const newSideBarElement = () => {
    const newCollectionElement = createNewPage();

    return newCollectionElement;
  }

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

  const renderList = (container, ref) => {
    let collectionToRender = findElement(ref);

    container.appendChild(renderHeader(collectionToRender.id, collectionToRender.description));

    collectionToRender.todoCollection.forEach(elm => container.appendChild(returnListContainer(elm, collectionToRender.id)));

    const newSection = addNewItemToPage();
    newSection.addEventListener('click', () => handleNewElement(container, handleNewSection(collectionToRender.id) ,newSection));
    container.appendChild(newSection);
}

  const changeList = (child) => {
    const parent = document.getElementById('app');
    if(parent.childNodes.length > 2){
      removeElement(parent, parent.childNodes[parent.childNodes.length-1])
    }
    
    parent.appendChild(child)
  }

  return {renderList, changeList, addNewItemToPage, newSideBarElement, handleListDelete, handlePageDelete}
}