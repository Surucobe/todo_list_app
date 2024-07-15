import Data from '../../../utils/data/Collection';

const modalTitle = (title) => {

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

  confirmChanges.addEventListener('click', () => {
    if(changeValue.value != ''){
      modifyTitle(modalToCall, changeValue.value);
    }else{
      return;
    }
  })

  modal.appendChild(infoConatiner);

  return modal;
}

export default modalTitle;