import { FC } from 'react';
import TodoPage from './models/components/TodoPage';
import {Link, Route, Routes} from 'react-router-dom'
import UserPage from './models/components/UserPage';

const App: FC =()=> {


  return (
  
    <div className="px-10 py-5">
       <div className='space-x-4 bg-gray-400'>
        <Link to='/' className='font-bold'>Todo</Link>
         <Link to='user' className='font-bold'>user</Link>
       </div>
      <Routes>
       <Route index element={<TodoPage />}/>
        <Route path='user' element={<UserPage /> }/>
       
      </Routes>
    
    </div>


  )
}
export default App;