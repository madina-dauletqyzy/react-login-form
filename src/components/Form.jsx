import react from 'react'
import Input from './Input';
function Form(props){
    return (
        <div className="container">
          <h1> {props.isRegestired ? "Login" : "Register"} </h1>
          <form className="form">
          <Input type = 'text' placeholder = 'Username'/>
          <Input type = 'password' placeholder = 'Password'/>
          {props.isRegestired === false &&           <Input type = 'password' placeholder = 'Confirm Password'/>}
            <button type="submit">
            {props.isRegestired ? "Login" : "Register"}</button>
          </form>
        </div>
      );
};

export default Form;