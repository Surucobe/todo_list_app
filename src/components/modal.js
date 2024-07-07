import '../../styles/modal.css'

const modal = () => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  modalContainer.addEventListener('click', (e) => {
    if(!e.target.classList.contains('modal')){
      modalContainer.style.display = 'none';
    }
  });

  modalContainer.appendChild(modal);

  return modalContainer;
}

export default modal;