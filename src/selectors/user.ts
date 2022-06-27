import { createSelector } from "reselect";
import { State } from "../Store";

export const userStateSelector=(s:State)=>s.users;

export const userSelector= createSelector(userStateSelector, (user)=>
Object.keys(user).map(userId => user[userId as any])
)

