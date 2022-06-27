export const USER_ADD = 'add users';


let nextId = 0;
export const userAdd = (name: string)=>  (
    { type: USER_ADD,
payload : { id:++nextId, name}
    }
)