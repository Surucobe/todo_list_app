import Data from "../../data/Collection";

function translateImportance(value){
  switch(value){
    case 'green':
      return 'low';
    case 'orange':
      return 'important';
    case 'red':
      return 'urgent';
  }
}

const priorityElement = (value, id) => {
  const { updatePriority } = Data
  const select = document.createElement('select');

  const defaultOption = document.createElement('option');
  defaultOption.innerHTML = '- Priority -';
  defaultOption.disabled = true;
  defaultOption.style.color = 'white';
  select.appendChild(defaultOption);

  const low = document.createElement('option');
  low.value = 'green';
  low.style.color = 'green';
  low.innerHTML = 'Low';
  select.appendChild(low);

  const important = document.createElement('option');
  important.value = 'orange';
  important.style.color = 'orange';
  important.innerHTML = 'Important';
  select.appendChild(important);

  const urgent = document.createElement('option');
  urgent.value = 'red';
  urgent.style.color = 'red';
  urgent.innerHTML = 'Urgent';
  select.appendChild(urgent);

  select.addEventListener('change', (e) => {
    const color = e.target.value;
    e.target.style.color = color;

    updatePriority(id, translateImportance(e.target.value))
  })

  switch (value) {
    case 'low':
      low.defaultSelected = true;
      select.style.color = 'green';
      break;
    case 'important':
      important.defaultSelected = true;
      select.style.color = 'orange';
      break;
    case 'urgent':
      urgent.defaultSelected = true;
      select.style.color = 'red';
      break;
    default:
      defaultOption.defaultSelected = true;
      select.style.color = '#ccc';
      break;
  }

  return select;
}

export default priorityElement;