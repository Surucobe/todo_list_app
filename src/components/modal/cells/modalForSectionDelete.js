import Data from '../../../utils/data/Collection.js';

const modalForSectionDelete = () => {
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

export default modalForSectionDelete;