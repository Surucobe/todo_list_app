//SUGGESTION: turn all of this into a class
export const createHtmlElm = (elm) => {
  const element = document.createElement(elm);

  return element;
}

const handleNewElement = () => {
  alert('works');
};

export const addNewItem = () => {
  const add = createHtmlElm('div');
  add.classList.add('add-new-element');
  add.innerHTML = '<span>+</span>';

  add.addEventListener('click', handleNewElement)

  return add;
}

//SUGGESTION: create container inside to add the items to
//Description should be able to be edit at any given point
//The use of a modal in order to edit the description is in order
export const createListContainer = (titleArg) => {
  const container = createHtmlElm('div');

  const titleContainer = createHtmlElm('div');
  
  const title = createHtmlElm('h3');
  title.innerHTML = titleArg;
  const description = createHtmlElm('p');
  const divider = createHtmlElm('hr');
  divider.classList.add('solid');

  titleContainer.appendChild(title);
  titleContainer.appendChild(description);
  titleContainer.appendChild(divider);
  
  container.appendChild(titleContainer);

  return container;
}

export const addTodoListContainer = (content) => {
  const listElement = createHtmlElm('div');
  const listItem = createHtmlElm('input');
  listItem = listElement.type = 'checkbox'
  listItem.innerHTML = content;

  return listElement;
}