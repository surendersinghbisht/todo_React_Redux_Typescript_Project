import React, { FC, memo } from 'react';
import { connect } from 'react-redux';
import { incompleteTodoSelector } from '../../selectors/todos';
import { State } from '../../Store';
import { Todo } from '../../todoType';


type TodoListLengthProps ={
todos:Todo[]
}

const TodoListLength:FC<TodoListLengthProps> =({todos})=>{


  return (
  
    <div className="">
      <h1 className='text-red-500 font-semibold'>Incomplete Todos: {todos.length}</h1>
    </div>


  )
}

const mapStateToProps =(s:State)=>({
    todos:incompleteTodoSelector(s)
})

export default connect(mapStateToProps)(memo(TodoListLength));