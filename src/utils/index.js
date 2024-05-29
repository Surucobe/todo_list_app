//SUGGESTION: create container inside to add the items to
export const createListContainer = (titleArg) => {
  const container = document.createElement('div');

  const titleContainer = document.createElement('div');
  
  const title = document.createElement('h3');
  title.innerHTML = titleArg;
  const divider = document.createElement('hr');
  divider.classList.add('solid');

  titleContainer.appendChild(title);
  titleContainer.appendChild(divider);
  
  container.appendChild(titleContainer);

  return container;
}

export const addTodoListContainer = (content) => {
  const listElement = document.createElement('div');
  listElement = listElement.type = 'checkbox'
  listElement.innerHTML = content;

  return listElement;
}

export const createHtmlElm = (elm) => {
  const element = document.createElement(elm);

  return element;
}