//TODO: find a better shorter name
const todoListConstruction = function() {

  const handleNewElement = (container, elm, ref) => {
    container.insertBefore(elm, ref);
  };

  //Adds new item to the page
  const addNewItemToPage = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';

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
          elm.style.textDecoration = 'line-through'
      }else{
          elm.style.textDecoration = 'none'
      }
  })
  }

  //TODO: fix styles
  //This one goes inside the containers to add a new item to the list
  const addTodoItemToList = (content) => {
    const text = document.createElement('textarea');
    text.innerHTML = content;
    const listItemContainer = document.createElement('div');
    const listItemInput = document.createElement('input')
    listItemInput.type = 'checkbox';

    listItemContainer.appendChild(listItemInput);
    listItemContainer.appendChild(text);

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

  const returnListContainer = (containerArg, inputArg) => {
    const todoList = createListContainer(containerArg);
    const addNew = addNewItemToPage();

    addNew.addEventListener('click', () => handleNewElement(todoList, addTodoItemToList('Test'), addNew))

    todoList.appendChild(addNew)
    
    return todoList;
  }

  return {addNewItemToPage, returnListContainer, addTodoItemToList, handleNewElement}
}

export default todoListConstruction;