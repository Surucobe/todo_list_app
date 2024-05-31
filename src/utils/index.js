//TODO: find a better shorter name
const todoListConstruction = function() {

  const handleNewElement = () => {
    alert('works');
  };

  const createNewSection = () => {};

  const addNewItem = () => {
    const add = document.createElement('div');
    add.classList.add('add-new-element');
    add.innerHTML = '<span>+</span>';

    add.addEventListener('click', handleNewElement)

    return add;
  };

  //SUGGESTION: create container inside to add the items to
  //Description should be able to be edit at any given point
  //The use of a modal in order to edit the description is in order
  const createListContainer = (titleArg) => {
    const container = document.createElement('div');

    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h3');
    title.innerHTML = titleArg;
    const description = document.createElement('p');
    const divider = document.createElement('hr');
    divider.classList.add('solid');

    titleContainer.appendChild(title);
    titleContainer.appendChild(description);
    titleContainer.appendChild(divider);
    
    container.appendChild(titleContainer);

    return container;
  };

  //TODO: add functionality to add a line through as the input is checked
  const addTodoItem = (content) => {
    const listElement = document.createElement('div');
    const listItem = document.createElement('input');
    listItem = listElement.type = 'checkbox'
    listItem.innerHTML = content;

    return listElement;
  };

  return {addNewItem}
}

export default todoListConstruction;