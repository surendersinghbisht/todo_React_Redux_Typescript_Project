import { Reducer } from "redux";
import { ADD_TODO, TODO_STATUS_CHANGE } from "../Action";
import { Todo } from "../todoType";


 type TodoState = {
   [id:number]: Todo;
}

export default TodoState;

export const TodoInitialState = {};

export const todoReducer:Reducer <TodoState> =(state = TodoInitialState, action)=>{
switch (action.type){
case TODO_STATUS_CHANGE :{
const {id, done} = action.payload;
return { 
  ...state,
   [id]: {...state[id], done} ,
  }
}

  case ADD_TODO : {

 const todo:Todo = action.payload;

 return {...state, [todo.id]: todo};

  }
  default:
    return state;
}
}