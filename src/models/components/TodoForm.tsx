import React, { FC, memo } from 'react';
import Button from '../../Button';


type TodoFormpProps ={
onClick : any
}

const TodoForm:FC<TodoFormpProps> =({onClick})=>{


  return (
  
    <div className="">
      <Button onClick={onClick} theme='primary'>+ADD TODO</Button>
    </div>


  )
}
export default memo(TodoForm);