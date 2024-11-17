export const collection = [
  {
    id: 'week',
    description: 'This must be done this week',
    todoCollection: [
      {
        id: 'week-monday',
        title: 'monday',
        todoList: [
          {
            id: 'monday-task',
            checked: false,
            text: "",
            dueDate: '17/11/2024',
            priority: 'low'
          },
          {
            id: 'monday-afternoon',
            checked: false,
            text: "",
            dueDate: '2024/11/17',
            priority: 'low'
          }
        ]
      },
      {
        id: 'week-wednesday',
        title: 'wednesday',
        todoList: []
      },
      {
        id: 'week-friday',
        title: 'friday',
        todoList: []
      }
    ]
  },
  {
    id: 'month',
    description: 'This must be one this month',
    todoCollection: [
      {
        id: 'month-15',
        title: 'month_15',
        todoList: []
      },
      {
        id: 'month-25',
        title: 'month_25',
        todoList: []
      }
    ]
  },
  {
    id: 'year',
    description: 'This must be done this year',
    todoCollection: [
      {
        id: 'year-november',
        title: 'november',
        todoList: []
      }
    ]
  }
]