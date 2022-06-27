import { ChangeEvent, FC, memo, useState } from 'react';
import { connect } from 'react-redux';
import { addTodoaction } from '../../Action';
import Button from '../../Button';


type TodoCreatorProps={
onSubmit: (todoText: string) =>void,
onCancel:any
}

const TodoCreator:FC<TodoCreatorProps> = ({onSubmit, onCancel}) => {

    const [inputValue, setInputValue] = useState (''); 

const handleChange = (event : ChangeEvent<HTMLInputElement>)=> {
setInputValue (event.target.value);
}

const handleSubmit = () =>{
    if (inputValue ==='') {
        return;
    }
    onSubmit(inputValue);
setInputValue ('')
};

const handelSubmit =(event:any)=>{
  event.preventDefault();
}

  return (
      <div className="space-x-2 ">
        <form onSubmit={handelSubmit}>
        <div className='flex flex-col space-y-2'>
        <input type='text' className='border-2 border-black w-60' value={inputValue} onChange={handleChange}/>
        <div className='flex space-x-2'>
        <Button type='submit' onClick={handleSubmit} theme='primary'>Save</Button>
        <Button theme='secondary' onClick={onCancel}>Cancel</Button>
        </div>
      </div>
      </form></div>
  );
}

export default connect(undefined, {onSubmit: addTodoaction})(memo(TodoCreator));

