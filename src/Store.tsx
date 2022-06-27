import {createStore, Reducer} from 'redux';
import TodoState, { TodoInitialState, todoReducer } from './States/todos';
import UserState, { UserInitialState, userReducer } from './States/user';

  
export type State = {
todos: TodoState
users: UserState
};


const initialState: State ={
  todos: TodoInitialState,
  users: UserInitialState,
}


export const reducer: Reducer<State> = (state = initialState, action) =>{
return{
  todos: todoReducer(state.todos, action),
  users: userReducer(state.users, action),
}
}

const store = createStore(reducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;

