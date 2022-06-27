import { createSelector } from "reselect";
import { State } from "../Store";


export const todoStateSelector =(s:State)=>s.todos;

export const todoListSelector = createSelector(todoStateSelector, (todoState) =>
Object.keys(todoState).map(todoId=>todoState[todoId as any])
)

export const comleteTodoSelector = createSelector(todoListSelector, (todos)=>
todos.filter(t=>t.done)
)

export const incompleteTodoSelector = createSelector(todoListSelector, (todos)=>
todos.filter(t=>!t.done)
)


