import { CollectionList } from "./dataStorage";
import dayjs from "dayjs";

const Data = (function(){
  const CollectionLists = [...CollectionList]

  const getTitles = () => CollectionLists.map(item => item.id)

  const getCurrentPage = () => document.querySelector('.header h2').innerHTML.toLowerCase();

  const createItemId = (id, num) => `${id}_${num+1}`

  function createNewPage(){
    CollectionLists.push(
      {
        id: 'testing',
        description: 'New element added',
        todoCollection: []
      }
    )
    
    return CollectionLists[CollectionLists.length-1];
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

  function createNewSection(obj){
    const section = {
      id: 'default',
      title: 'default',
      todoList: []
    };

    obj.todoCollection.push(section);

    return obj.todoCollection[obj.todoCollection.length-1];
  }

  function createNewItem(obj){
    if(obj.todoList.length != 0){
      obj.todoList.push(createNewListItem(createItemId(obj.id, Number(obj.todoList[obj.todoList.length-1].id.match(/\d+/)[0]))))
    }else{
      obj.todoList.push(createNewListItem(createItemId(obj.id, '1')))
    }

    return obj.todoList[obj.todoList.length-1]
  }

  function modifyCheck(obj){
    obj.checked = !obj.checked
  }

  function modifyText(obj){
    const elm = document.querySelector(`[data-${obj.id.match(/[a-zA-Z]+/)[0]}='${obj.id}'] textarea`).value
    obj.text = elm
  }

  function updatePriority(id, value){
    const elm = findElement(id)
    elm.priority = value;
  }

  function updateDate(id, value){
    const elm = findElement(id)
    elm.dueDate = value
  }

  function modifyTitle(id, value){
    const objInCollection = findElement(id);
    let test = document.querySelector(`[data-${getCurrentPage()}='${id}']`);
    test.querySelector('h3').innerHTML = value;

    objInCollection.title = value
  }

  function deletePage(id){
    const index = CollectionLists.findIndex((elm) => elm.id == id)
    CollectionLists.splice(index, 1)
  }

  function deleteList(query){
    const current = findElement(getCurrentPage());
    const index = current.todoCollection.findIndex((elm) => elm.id == query)
    
    current.todoCollection.splice(index, 1);
  }

  function findElement(id, callback, array = CollectionLists){
    if(!Array.isArray(array)) return

    for (const elm of array) {
      if (elm.id == id) {
        if(callback != undefined){
          return callback(elm);
        }else{
          return elm;
        }
      }

      for (const key in elm) {
        if (Array.isArray(elm[key])) {
          const result = findElement(id, callback, elm[key]);
          if (result !== undefined) {
            return result; // Return as soon as the element is found
          }
        }
      }
    }
  }

  function deleteListItem(query, container){

    const elmContainer = findElement(container)

    const index = elmContainer.todoList.findIndex((elm) => elm.id == query)
    elmContainer.todoList.splice(index, 1)
  }

  return {
    getTitles, createNewItem, createNewSection, deletePage,
    deleteListItem, getCurrentPage, createNewPage, updatePriority,
    findElement, modifyCheck, modifyText, modifyTitle, deleteList, 
    updateDate
  };
})()

export default Data;