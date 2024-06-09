//TODO: find a better shorter name
const Collection = (function(){
  const CollectionList = [
    {
      id: 'main',
      description: 'Total accurate descripton',
      todo: [],
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
  const createrNewElement = (elm) => {
    return document.createElement(elm);
  }

  const { getCollection, newElmentForCollection } = Collection

  const renderHeader = () => {
    const {id, description} = getCollection()[0];

    const header = createrNewElement('div');
    header.classList.add('header');

    const headerTitle = createrNewElement('h2');
    headerTitle.innerHTML = id;

    const headerDescription = createrNewElement('textarea');
    headerDescription.innerHTML = description;

    header.appendChild(headerTitle);
    header.appendChild(headerDescription);

    console.log(header);
  }

  const handleNewElement = (container, elm, ref) => {
    newElmentForCollection('testing');
    container.insertBefore(elm, ref);
  };

  const priorityLevel = () => {
    let priority = 'Low';
    return 'Low';
  }

  //Adds new item to the page
  const addNewItemToPage = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';
    renderHeader()

    return add;
  };

  //Yet to be implemented
  const descriptionText = () => {
    const textareaDescription = document.createElement('textarea');
  }

  //TODO: check if this can be done with nothing but CSS
  const handleCheckItem = (elm) => {
    elm.addEventListener('click', (e) =>{
      if(elm.childNodes[0].checked){
          elm.style.textDecoration = 'line-through';
      }else{
          elm.style.textDecoration = 'none';
      }
  })
  }

  //TODO: fix styles
  //This one goes inside the containers to add a new item to the list
  const addTodoItemToList = (content) => {
    const listItemContainer = document.createElement('div');
    
    const text = document.createElement('textarea');
    text.innerHTML = content;
    text.maxLength = '50';
    
    const listItemInput = document.createElement('input');
    listItemInput.type = 'checkbox';

    const dueDate = document.createElement('input');
    dueDate.classList.add('due-date');
    dueDate.type = 'date';

    const priority = document.createElement('div');
    priority.innerHTML = priorityLevel();

    listItemContainer.appendChild(listItemInput);
    listItemContainer.appendChild(text);
    listItemContainer.appendChild(dueDate);
    listItemContainer.appendChild(priority);

    handleCheckItem(listItemContainer);

    return listItemContainer;
  };

  //SUGGESTION: create container inside to add the items to
  //Description should be able to be edit at any given point
  //The use of a modal in order to edit the description is in order
  const createListContainer = (titleArg) => {
    const container = document.createElement('div');
    container.classList.add('feature-item');

    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h3');
    title.innerHTML = titleArg;
    const divider = document.createElement('hr');
    divider.classList.add('solid');
    const list = document.createElement('ul');

    titleContainer.appendChild(title);
    titleContainer.appendChild(divider);
    titleContainer.appendChild(list);
    
    container.appendChild(titleContainer);

    return container;
  };

  const returnListContainer = (containerArg) => {
    const todoList = createListContainer(containerArg);
    const addNew = addNewItemToPage();

    addNew.addEventListener('click', () => handleNewElement(todoList, addTodoItemToList('Test'), addNew))

    todoList.appendChild(addNew)
    
    return todoList;
  }

  return {addNewItemToPage, returnListContainer, addTodoItemToList, handleNewElement}
}

export default renderTodoLists;