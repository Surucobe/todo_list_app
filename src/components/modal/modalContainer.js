import modalTitle from './title/modalTitle';
import modalDelete from './delete/modalDelete';

import '../../../styles/modal.css'

let modalQuery

function clearModalContainer(){
  const modalContainer = document.querySelector('.modal-container');

  if(modalContainer.childNodes.length > 0){
    modalContainer.removeChild(modalContainer.childNodes[0])
  }
}

function renderModal(keyWord){
  const modalContainer = document.querySelector('.modal-container');

  clearModalContainer();

  if(keyWord !== 'delete'){
    modalContainer.appendChild(modalTitle(modalQuery));
  }else if(keyWord == 'delete'){
    modalContainer.appendChild(modalDelete(modalQuery, changeModalVisibility));
  }
}

export function changeModalVisibility(str = undefined, keyWord) {
  if(document.querySelector('.modal-container').style.display !== 'block'){
    document.querySelector('.modal-container').style.display = 'block';
  }else{
    document.querySelector('.modal-container').style.display = 'none';
  }

  if(str !== undefined){
    modalQuery = str;
    renderModal(keyWord);
  }
}

const modalContainer = () => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');

  modalContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-container')) changeModalVisibility()
  });

  return modalContainer;
}

export default modalContainer;