import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
 render(){
   return(
     <div>
       <form>
       <label>Email:</label>
       <input type="text" />
       <label>Password:</label>
       <input type="text" />
       <Link to={{ pathname: '/dashboard'}}>
       <button>Submit</button>
       </Link>
       </form>
     </div>
   )
 }
}
export default Login;
