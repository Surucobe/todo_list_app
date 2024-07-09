import Data from '../utils/data/Collection';

import '../../styles/modal.css'

let modalValueToChange

export function changeModalVisibility(id) {
  if(document.querySelector('.modal-container').style.display == 'none'){
    document.querySelector('.modal-container').style.display = 'block';
  }else{
    document.querySelector('.modal-container').style.display = 'none';
  }
  // modalValueToChange = obj;
  Data.findElement(id, console.log)
}

const modal = () => {

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.innerHTML = '<h4>Do you wish to change the title?</h4>';
  modal.appendChild(modalHeader);

  const infoConatiner = document.createElement('div');
  infoConatiner.classList.add('info-container');

  const changeValue = document.createElement('input');
  changeValue.placeholder = 'Type your new title';
  infoConatiner.appendChild(changeValue)

  const confirmChanges = document.createElement('button');
  confirmChanges.classList.add('confirm-btn');
  confirmChanges.innerHTML = 'confirm';
  infoConatiner.appendChild(confirmChanges);

  modal.appendChild(infoConatiner);

  modalContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-container')) changeModalVisibility()
  });

  modalContainer.appendChild(modal);

  return modalContainer;
}

export default modal;