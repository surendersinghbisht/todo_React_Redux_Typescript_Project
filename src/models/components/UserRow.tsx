import { ChangeEvent, FC, memo, useState } from 'react';
import { User } from '../../userType';


type UserRowProps={
user: User
}

const UserRow:FC<UserRowProps> = ({user}) => {
   const {id, name} =user

  return (
      <div className="bg-yellow-200 flex flex-col rounded-md shadow-md p-2 ">
      <h1 className='font-bold'>#{id}</h1>
       <h1 className='font-bold' >{name}</h1>
      </div>
  );
}

export default memo(UserRow);

