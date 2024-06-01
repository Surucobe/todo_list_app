//TODO: find a better shorter name
const todoListConstruction = function() {

  const handleNewElement = () => {
    alert('works');
  };

  //Adds new item to the page
  const addNewItemToPage = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';

    add.addEventListener('click', handleNewElement)

    return add;
  };

  const descriptionText = () => {
    const textareaDescription = document.createElement('textarea');
    textareaDescription.readOnly = true;
  }

  //TODO: add functionality to add a line through as the input is checked
  //This one goes inside the containers to add a new item to the list
  const addTodoItemToList = (content) => {
    const checkItem = () => {
      console.log(this)
    }

    const listItem = document.createElement('input');
    listItem.type = 'checkbox'
    listItem.innerHTML = `${listItem} ${content}`;

    listItem.addEventListener('click', (e) => {
      checkItem();
    })

    return listItem;
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
    todoList.appendChild(addNewItemToPage());
    
    return todoList;
  }

  return {addNewItemToPage, returnListContainer}
}

export default todoListConstruction;