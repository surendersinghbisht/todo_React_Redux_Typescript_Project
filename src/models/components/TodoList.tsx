import { FC, memo } from 'react';
import { connect} from 'react-redux'
import { todoStatuschangeAction } from '../../Action';
import { incompleteTodoSelector, comleteTodoSelector} from '../../selectors/todos'
import { State } from '../../Store';
import { Todo } from '../../todoType'
import TodoRow from './TodoRow';


type TodoListProps={
 todos: Todo[]; 
 onStatusChange: (id:number, done:boolean) => void;
};

const TodoList:FC<TodoListProps> = ({ todos, onStatusChange }) => {
   

  return (
      <div className="">
        {todos.map((t) =>
        <TodoRow key={t.id} todo={t} onStatusChange={onStatusChange} />
        )}
      </div>
  );
}

export default memo(TodoList);


const incompleteMapper =  (s : State) => ( {todos: incompleteTodoSelector(s)});
const completeMapper =  (s : State) => ( {todos: comleteTodoSelector(s)});

const dispatchMapper = {
  onStatusChange: todoStatuschangeAction
};



export const IncompleteTodoList = connect(incompleteMapper, dispatchMapper)(TodoList);
export const CompleteTodoList = connect(completeMapper, dispatchMapper)(TodoList);