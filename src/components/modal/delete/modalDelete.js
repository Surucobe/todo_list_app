import Data from '../../../utils/data/Collection';

const modalDelete = (title, callback) => {

  const { deleteList } = Data;

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-delete-container');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.innerHTML = `<h4>Do you wish to delete the ${title} list?</h4>`;
  modal.appendChild(modalHeader);

  const infoConatiner = document.createElement('div');
  infoConatiner.classList.add('info-container-delete');

  const confirm = document.createElement('button');
  confirm.classList.add('confirmation-btn');
  confirm.innerHTML = 'Yes';
  infoConatiner.appendChild(confirm);

  confirm.addEventListener('click', () => {
    deleteList(title);
    callback();
  })

  const decline = document.createElement('button');
  decline.classList.add('decline-btn');
  decline.innerHTML = 'No';
  infoConatiner.appendChild(decline);

  decline.addEventListener('click', () => callback())

  modal.appendChild(infoConatiner);

  return modal;
}

export default modalDelete;