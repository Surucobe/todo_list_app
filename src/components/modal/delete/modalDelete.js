import Data from '../../../utils/data/Collection';

const modalDelete = () => {

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-delete-container');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.innerHTML = '<h4>Do you wish to delete this list?</h4>';
  modal.appendChild(modalHeader);

  const infoConatiner = document.createElement('div');
  infoConatiner.classList.add('info-container-delete');

  const confirm = document.createElement('button');
  confirm.classList.add('confirmation-btn');
  confirm.innerHTML = 'Yes';
  infoConatiner.appendChild(confirm);

  confirm.addEventListener('click', () => {
    if(changeValue.value != ''){
      modifyTitle(modalValueToChange, changeValue.value);
    }else{
      return;
    }
  })

  const decline = document.createElement('button');
  decline.classList.add('decline-btn');
  decline.innerHTML = 'No';
  infoConatiner.appendChild(decline);

  modal.appendChild(infoConatiner);

  return modal;
}

export default modalDelete;