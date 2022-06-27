import { FC, memo } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../selectors/user';
import { State } from '../Store';
import { User } from '../userType';
import UserRow from './components/UserRow';



type UserListProps={
users: User[]
}

const UserList:FC<UserListProps> = ({users}) => {

  return (
      <div className=" p-2">
      {
    users.map((u) => (
   <div className='p-2'> <UserRow user={u} /></div>
    ))}
      </div>
  );
}

const mapStateToProps =(state: State)=>
({users: userSelector(state)})

export default connect(mapStateToProps)(memo(UserList));

