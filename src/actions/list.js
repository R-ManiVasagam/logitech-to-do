export const addItem = (item) => {
    return {type: 'add_todos', payload: item}
}

export const markItem = (id) => {
    return {type: 'mark_todos', payload: id}
}

export const unmarkItem = (id) => {
    return {type: 'unmark_todos', payload: id}
}

export const displayItems = (items, searchIndex)=>{
    return {type : 'display_item',payload : items,search : searchIndex}
}

export const startSearch = (search)=>{
    return {type : 'search_string',payload : search}
}
