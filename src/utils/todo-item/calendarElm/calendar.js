import dayjs from "dayjs";

const calendarElement = (date) => {
  const dueDate = document.createElement('input');
  dueDate.classList.add('due-date');
  dueDate.type = 'date';

  if(date == ''){
    dueDate.defaultValue = dayjs().format('YYYY-MM-DD');
  }else{
    dueDate.defaultValue = dayjs().format(date);
  }

  dueDate.addEventListener('change', (e) => {
    const newDate = e.target.value;
    console.log(typeof newDate);
  })

  return dueDate;
}

export default calendarElement