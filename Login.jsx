import Input from "./Input"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import {Link} from 'react-router-dom'
import './Login.css';
import { signinAuthUserWithEmailAndPassword} from './utils/firebase'

function Login() {

  const navigate = useNavigate();

  
  const [contact, setcontact] =useState({
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)


  async function handleClick(event) {
    try {
      if (!email || !password) {
        alert('ENTER YOUR EMAIL AND PASSWORD');
        return;
      }

      const response = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(response);

      if (!response) {
        alert('INVALID EMAIL OR PASSWORD');
        return;
      }

      navigate('/');
    } catch (error) {
      alert('ERROR IN LOGIN'+ error.message);
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
    <div className="border">
    <div className="header">
      
       <Link to= '/signup' className="SignLink">
        <h3 className="signup">Sign up</h3> 
      </Link>

     <div className="mail"><h2>Your email</h2></div>
      <Input
        name = 'email'
        type='email'
        onChange ={handlepass}

      />
      <br></br>
      <div className="mail"><h2>Your password</h2></div>
      <Input
        name= 'password'
        type='password'
        onChange ={handlepass}
        />
      <br></br>
   
      <button className="button1" onClick={handleClick}>
        Login 
      </button>
      </div>
        
      
  

<br>

</br>
     

    </div>
)}
export default Login