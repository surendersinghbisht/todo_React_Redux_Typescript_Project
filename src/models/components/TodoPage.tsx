import { FC, useState } from 'react';
import CompletedListLength from './CompletedListLength';
import TodoCreator from './TodoCreator';
import TodoForm from './TodoForm';
import TodoList, { CompleteTodoList, IncompleteTodoList } from './TodoList';
import TodoListLength from './TodoListLength';


type TodoPageProps={

}

const TodoPage: FC<TodoPageProps> =()=> {
  const [showcreator, setShowcreater]= useState(true);

  const handleShow =() =>{
    setShowcreater(false);
  }


  return (
  
    <div className="px-10 py-5">
      <h1 className='font-semibold text-2xl mb-3'>Surender's ToDo</h1>
      <TodoListLength  />
      <CompletedListLength />
      <hr></hr>
      <h1 className='font-bold text-3xl py-3'>Things to
     get done</h1>
      <h3 className='font-semibold  text-xl py-3'>Things to do </h3>
    <IncompleteTodoList />
    {showcreator? <TodoForm onClick={handleShow}/>: <TodoCreator onCancel={()=>{setShowcreater(true)}} />}
      <h3 className='font-semibold  text-xl py-3'>things done </h3>
      <CompleteTodoList />
    </div>


  )
}
export default TodoPage;