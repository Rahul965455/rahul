import React from "react";
import { useState } from "react";
import fireDb from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
const Signup = () => {
    const navigate= useNavigate()

    const value ={
        email:"",
        password:""
        
    }
    
const [arjun,setArjun]=useState(value)

const handleChange=(e)=>{
    const {name,value}=e.target;
    setArjun({...arjun,[name]:value})
}

const handleSubmit=()=>{
    fireDb.child("signup").push(arjun,(err)=>{
         
        if(err){
          toast.error(err);
        }else   
        {
          toast.success("sign up sucessfully")
          setTimeout(()=>navigate("/login"),500)
        }//error
      });
}

  return (
    <div className="container">
      <form >
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" value={arjun.email} name="email" onChange={handleChange}/>
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" value={arjun.password} name="password" onChange={handleChange}/>
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>
          Sign up
        </button>

        <div class="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
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
      </form>
    </div>
  );
};

export default Signup;
