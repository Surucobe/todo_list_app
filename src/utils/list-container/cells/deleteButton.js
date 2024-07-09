export const deleteButton = (handleDelete) => {
  const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete')
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', () => handleDelete())

    return deleteButton;
}