import { Reducer } from "redux";
import { USER_ADD } from "../action/user";
import { User } from "../userType"

 type UserState = {
   [id:number]: User
}

export default UserState;

export const UserInitialState = {};


export const userReducer:Reducer <UserState> =(UserState = UserInitialState, action)=>{
switch (action.type){
  case USER_ADD : {

 const user:User = action.payload;

 return {...UserState, [user.id]: user};

  }
  default:
    return UserState;
}
}