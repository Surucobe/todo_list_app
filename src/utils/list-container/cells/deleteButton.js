export const deleteButton = (handleDelete, ) => {
  const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X';

    return deleteButton;
}