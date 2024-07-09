import dayjs from "dayjs";

const Data = (function(){
  const CollectionList = [
    {
      id: 'week',
      title: 'Week',
      description: 'Total accurate description',
      todoCollection: [
        {
          id: 'monday',
          title: 'Monday',
          todoList: [
            {
              id: 'monday_1',
              checked: true,
              text: "i'm the first element inside monday",
              //YY/MM/DD
              dueDate: '2024-06-19',
              priority: 'important'
            },
            {
              id: 'monday_2',
              checked: false,
              text: "i'm the second element inside monday",
              //YY/MM/DD
              dueDate: '2024-06-22',
              priority: 'low'
            },
          ]
        },
        {
          id: 'thursday',
          title: 'Thursday',
          todoList: [
            {
              id: 'thursday_1',
              checked: false,
              text: "i'm the first element inside thursday",
              //YY/MM/DD
              dueDate: '2024-07-19',
              priority: 'important'
            },
            {
              id: 'thursday_2',
              checked: true,
              text: "i'm the second element inside thursday",
              //YY/MM/DD
              dueDate: '2024-08-22',
              priority: 'urgent'
            },
            {
              id: 'thursday_3',
              checked: false,
              text: "i'm the second element inside thursday",
              //YY/MM/DD
              dueDate: '2024-08-22',
              priority: 'urgent'
            },
          ]
        },
      ]
    },
    {
      id: 'month',
      title: 'Month',
      description: 'Total accurate descripton',
      todoCollection: [
        {
          id: 'may',
          title: 'May',
          todoList: [
            {
              id: 'may_1',
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '',
              priority: 'important'
            }
          ]
        },
        {
          id: 'july',
          title: 'July',
          todoList: [
            {
              id: 'may_2',
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '',
              priority: 'low'
            }
          ]
        },
      ]
    },
    {
      id: 'year',
      title: 'Year',
      description: 'Total accurate descripton',
      todoCollection: [
        {
          id:'year',
          title: '2024',
          todoList: [
            {
              id: '2024_1',
              checked: false,
              text: 'totally legit text that at least is not lorem ipsum',
              dueDate: '',
              priority: 'important'
            }
          ]
        }
      ]
    },
  ]

  const getCollection = () => CollectionList;

  const getTitles = () => CollectionList.map(item => item.id)

  const getCurrentPage = () => document.querySelector('.header h2').innerHTML.toLowerCase();

  const createItemId = (id, num) => `${id}_${Number(num.match(/\d+/)[0])+1}`

  function createNewPage(){
    CollectionList.push(
      {
        id: 'testing',
        description: 'New element added',
        todoCollection: []
      }
    )
    
    return CollectionList[CollectionList.length-1];
  }
  
  function createNewListItem(id){
    const template = {
      id: id,
      checked: false,
      text: "",
      dueDate: dayjs().format('YYYY-MM-DD'),
      priority: ''
    }

    return template
  }

  //TODO: chnage to use the findElement
  function createNewSection(obj){
    const section = {
      id: 'default',
      title: 'default',
      todoList: []
    };

    obj.todoCollection.push(section);

    return obj.todoCollection[obj.todoCollection.length-1];
  }

  function createNewItem(obj){
    if(obj.todoList.length != 0){
      obj.todoList.push(createNewListItem(createItemId(obj.id, obj.todoList.length.toString())))
    }else{
      obj.todoList.push(createNewListItem(createItemId(obj.id, '1')))
    }

    return obj.todoList[obj.todoList.length-1]
  }

  function modifyCheck(obj){
    obj.checked = !obj.checked
  }

  function modifyText(obj){
    const elm = document.querySelector(`[data-${obj.id.match(/[a-zA-Z]+/)[0]}='${obj.id}'] textarea`).value
    obj.text = elm
  }

  function findElement(id, callback, array = CollectionList){
    if(!Array.isArray(array)) return

    for (const elm of array) {
      if (elm.id == id) {
        return callback(elm);
      }

      for (const key in elm) {
        if (Array.isArray(elm[key])) {
          const result = findElement(id, callback, elm[key]);
          if (result !== undefined) {
            return result; // Return as soon as the element is found
          }
        }
      }
    }
  }

  //IDEA: Recursivity may be use but this may be a good approach anyway, for now i will do nothing about it
  function deleteListItem(query, containerName){
    const currentPage = getCurrentPage();

    CollectionList.some(elm => {
      if(elm.id == currentPage){
        elm.todoCollection.forEach(obj => {
          if(obj.id == containerName){
            obj.todoList.forEach((item, index) => {
              if(item.id == query){
                obj.todoList.splice(index, 1);
              }
            })
          }
        })
      }
    })
  }

  return {
    getCollection, getTitles, createNewItem, createNewSection, 
    createNewPage, deleteListItem, getCurrentPage, createNewPage, 
    findElement, modifyCheck, modifyText
  };
})()

export default Data;