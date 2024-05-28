//SUGGESTION: create container inside to add the items to
const createListContainer = (title) => {
  const container = document.createElement('div');

  const titleContainer = document.createElement('div');
  
  const title = document.createElement('h3');
  title.innerHTML = title;
  const divider = document.createElement('hr');
  divider.classList.add('solid');

  titleContainer.appendChild(title);
  titleContainer.appendChild(divider);
  
  container.appendChild(titleContainer);

  return container;
}

const addToListContainer = (content) => {
  const listElement = document.createElement('div');
  listElement.innerHTML = `<input type='checkbox' /> ${content}`

  return listElement;
}