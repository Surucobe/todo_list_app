export const CollectionList = [
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

window.localStorage.setItem('collection', JSON.stringify(CollectionList));