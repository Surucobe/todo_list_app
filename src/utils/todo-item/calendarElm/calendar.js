import dayjs from "dayjs";

import Data from "../../data/Collection";

const calendarElement = (id, date) => {
  const { updateDate } = Data;
  const dueDate = document.createElement('input');
  dueDate.classList.add('due-date');
  dueDate.type = 'date';

  if(date == ''){
    dueDate.defaultValue = dayjs().format('YYYY-MM-DD');
  }else{
    dueDate.defaultValue = dayjs().format(date);
  }

  dueDate.addEventListener('change', (e) => {
    updateDate(id, e.target.value);
  })

  return dueDate;
}

export default calendarElement