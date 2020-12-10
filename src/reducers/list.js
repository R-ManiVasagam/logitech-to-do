function List(state = {todos: [], filter: 'all', search: ''}, action) {
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    switch (action.type) {
        case "add_todos": {
            let newTodos = [...state.todos];
            newTodos.push({key:randomNumber, value: action.payload, checked: false})
            return {...state, todos: newTodos};
        }
        case 'mark_todos': {
            let newTodos = [...state.todos];
            newTodos.forEach(todo => {
                if (todo.key === action.payload)
                    todo.checked = true;
            })
            return {...state, todos: newTodos};
        }
        case 'unmark_todos': {
            let newTodos = [...state.todos];
            newTodos.forEach(todo => {
                if (todo.key === action.payload)
                    todo.checked = false;
            })
            return {...state, todos: newTodos};
        }
        case 'display_item': {
            return {...state, filter: action.payload};
        }
        case 'search_string': {
            return {...state, search: action.payload};
        }
        default:
            return state;
    }
}

export default List
