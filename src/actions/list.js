export const addItem = (item) => {
    return {type: 'add_todos', payload: item}
}

export const markItem = (item) => {
    return {type: 'mark_todos', payload: item}
}

export const unmarkItem = (item) => {
    return {type: 'unmark_todos', payload: item}
}

export const displayItems = (items, searchIndex)=>{
    return {type : 'display_item',payload : items,search : searchIndex}
}

export const startSearch = (search)=>{
    return {type : 'search_string',payload : search}
}
