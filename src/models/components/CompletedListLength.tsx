import React, { FC, memo } from 'react';
import { connect } from 'react-redux';
import { comleteTodoSelector, incompleteTodoSelector } from '../../selectors/todos';
import { State } from '../../Store';
import { Todo } from '../../todoType';


type completedListLengthProps ={
todo:Todo[]
}

const completedListLength:FC<completedListLengthProps> =({todo})=>{


  return (
  
    <div className="">
      <h1 className='text-green-500 font-semibold'>completed Todos: {todo.length}</h1>
    </div>


  )
}

const mapStateToProps =(s:State)=>({
    todo:comleteTodoSelector(s)
})

export default connect(mapStateToProps)(memo(completedListLength));