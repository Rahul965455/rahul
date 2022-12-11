import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import fireDb from '../firebase';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
const history = useNavigate()

    const initialState = {
        email : "",
        password : ""
    }
    const [login,setLogin] = useState(initialState)

    const handleChange =(e)=>{
  const {name , value} = e.target;
  setLogin({
    ...login,
    [name] : value

  })
    }
    const handleLogin=()=>{
      

        fireDb.child(`signup`).get().then((snapshot)=>{
          
            if(snapshot.exists()){
           
           let allData =   {...snapshot.val() }
           let extractData = Object.values(allData)
           let count = 0
           extractData.find((e)=>{
            if(e.email === login.email && e.password === login.password){
             count++
            }else{
           count = 0
            }
           })
           if(count > 0 ){
            history("/Home")
           }else{
  toast.error("please enter valid email and password")
           }

                
              }else{
                console.log("now data")
              }
          
          })


    }
    

  return (
    <div className='container'>
    <form>

    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" name='email'  value={login.email} onChange={handleChange}/>
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  

    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" name='password' value={login.password} onChange={handleChange}/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  


  
 
    <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleLogin}>Login </button>
  

    <div class="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form></div>
  )
}

export default Login