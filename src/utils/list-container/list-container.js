const listContainer = (function(){
  const createListContainer = (todoTitle, id) => {
    const container = document.createElement('div');
    container.classList.add('feature-item');
    container.setAttribute(`data-${id}`, todoTitle.toLocaleLowerCase())

    const titleContainer = document.createElement('div');
    
    const title = document.createElement('h3');
    title.innerHTML = todoTitle;
    const divider = document.createElement('hr');
    divider.classList.add('solid');
    const list = document.createElement('ul');

    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', () => handleListDelete())

    titleContainer.appendChild(title);
    titleContainer.appendChild(divider);
    titleContainer.appendChild(list);
    titleContainer.appendChild(deleteButton);
    
    container.appendChild(titleContainer);

    return container;
  };

  return { createListContainer }
})()

export default listContainer