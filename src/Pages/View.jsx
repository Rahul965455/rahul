import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "./view.css";
import fireDb from "../firebase";
const View = () => {
  const [user,setUser]=useState({});
  const {id}=useParams()
  useEffect(()=>{
    fireDb.child(`contacts/${id}`).get().then((snapshot)=>{
      if(snapshot.exists()){
        setUser({...snapshot.val() });
        
      }else{
        setUser({})
      }
    })
  },[setUser])

  return (
    <div>
    <div style={{ marginTop: "150px"}}>
    <div className="card">
      <div className=" card-header">
        <p>User Contact Detail</p>
      </div>
     
      <div className="container">
        <strong>ID:</strong>
        <span>{id}</span>
         <br />
         <br />
        <strong>Name:</strong>
        <span>{user.name}</span>
        <br />
        <br />
        <strong> Email:</strong>
        <span>{user.email}</span>

         <br />
         <br />
        <strong>Contact:</strong>
        <span>{user.contact}</span>
        <br />
        <br />
        <NavLink to="/"><button className='btn btn-edit'>Go BAck</button></NavLink>
      </div>

    </div>
  </div>
  </div>
  )
}

export default View