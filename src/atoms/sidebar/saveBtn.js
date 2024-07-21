import Data from "../../utils/data/Collection";

const saveBtn = () => {
  const { saveToLocalStorage } = Data;

  const saveButton = document.createElement('div');
  saveButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save-all</title><path d="M17,7V3H7V7H17M14,17A3,3 0 0,0 17,14A3,3 0 0,0 14,11A3,3 0 0,0 11,14A3,3 0 0,0 14,17M19,1L23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V3A2,2 0 0,1 7,1H19M1,7H3V21H17V23H3A2,2 0 0,1 1,21V7Z" /></svg>';
  saveButton.classList.add('save-btn');

  saveButton.addEventListener('click', saveToLocalStorage)

  return saveButton;
}

export default saveBtn;