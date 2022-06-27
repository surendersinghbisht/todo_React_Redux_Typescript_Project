import { FC, memo, useCallback } from 'react';
import UserCreator from '../UserCreator';
import UserList from '../UserList';


type UserPageProps={
}

const UserPage:FC<UserPageProps> = () => {
   
  return (
<div className="flex flex-col space-x-4 p-2">
<h1>UserPage</h1>
<UserCreator />
<UserList />

</div>
 );
}

export default memo(UserPage);