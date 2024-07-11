import modalForTitle from './cells/modalForTitle';

import '../../../styles/modal.css';

const modal = () => {

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.innerHTML = '<h4>Do you wish to change the title?</h4>';
  modal.appendChild(modalHeader);

  const infoConatiner = modalForTitle()

  modal.appendChild(infoConatiner);

  modalContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-container')) changeModalVisibility()
  });

  modalContainer.appendChild(modal);

  return modalContainer;
}

export default modal;