import modalTitle from './title/modalTitle';
import modalDelete from './delete/modalDelete';
import Data from '../../utils/data/Collection';
import { renderTodoLists } from '../../utils';

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

  switch(keyWord){
    case 'title':
      modalContainer.appendChild(modalTitle(modalQuery));
      break;
    case 'delete':
      modalContainer.appendChild(modalDelete(modalQuery, changeModalVisibility, Data.deleteList, renderTodoLists().handleListDelete));
      break;
    case 'delete-page':
      modalContainer.appendChild(modalDelete(modalQuery, changeModalVisibility, Data.deletePage, renderTodoLists().handlePageDelete));
      break;
    default:
      return;
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