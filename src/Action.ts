export const ADD_TODO = "todo added";
export const TODO_STATUS_CHANGE = "todo status change";


let nextId = 0;
export const addTodoaction = (todoText: string) =>{
    return { type: ADD_TODO, payload: {id: ++nextId, title:todoText, done:false} };
}

export const todoStatuschangeAction =(
    todoId:number,
    newStatus: boolean,
) => {
    return { type: TODO_STATUS_CHANGE, payload: {id: todoId , done: newStatus}}
};