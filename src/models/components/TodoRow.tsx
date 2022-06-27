import { FC, memo, useCallback } from 'react';
import { Todo } from '../../todoType'


type todoProps={
 todo:Todo;
 onStatusChange: any;
}

const TodoRow:FC<todoProps> = ({todo, onStatusChange }) => {
   
const {id, title, done} = todo;

const handleChange = useCallback(() => {
  onStatusChange(id, !done);
}, [id, done])

  return (
      <div className="flex space-x-4 p-2">
          <input  className="mt-2"  checked={done} onChange={handleChange} type="checkbox"></input>
       <h1>{title}</h1>
        
      </div>
  );
}

export default memo(TodoRow);