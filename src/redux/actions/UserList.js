
//Action creator
export const userList = user => {
   //Return an action 
   return {
       type : 'FETCH_ALL_USERS',
       payload: user
   };
};

