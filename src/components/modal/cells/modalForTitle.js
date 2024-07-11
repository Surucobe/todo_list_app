import Data from '../../../utils/data/Collection.js';

let modalValueToChange;

export function changeModalVisibility(id) {
  debugger
  if(document.querySelector('.modal-container').style.display !== 'block'){
    document.querySelector('.modal-container').style.display = 'block';
  }else{
    document.querySelector('.modal-container').style.display = 'none';
  }

  modalValueToChange = id;
}

const modalForTitle = () => {
  const { modifyTitle } = Data;

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
      modifyTitle(modalValueToChange, changeValue.value);
    }else{
      return;
    }
  })

  return infoConatiner;
}

export default modalForTitle;