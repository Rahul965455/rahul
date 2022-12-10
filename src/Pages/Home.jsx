import{ React,useState,useEffect} from 'react'
import fireDb from '../firebase'
import { NavLink } from 'react-router-dom'
import "./home.css"
import { toast } from 'react-toastify'
const Home = () => {
  const [data,setData]=useState({});
  useEffect(()=>{
    fireDb.child("contacts").on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()})
      }else{
        setData({})
      }
    });
    return ()=>{
      setData({})
    }
  },[])
  const onDelete = (id) =>{
if(window.confirm("sure")){
  fireDb.child(`child/${id}`).remove((err)=>{
    if(err){
      toast.success("contact deleted")
    }else{toast.success("contact del")}
  })
}

      }
  return (
    <div style={{marginTop:"100px"}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>no.</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Email</th>
            <th style={{textAlign:"center"}}>Contact</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id,index)=>{
            return(
              <tr key={id}>
                <th scope='row'>{index+1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td><NavLink to={`/update/${id}`}> <button className='btn btn-edit'>Edit</button></NavLink>
                <button className='btn btn-delete' onClick={()=>onDelete(id)}>Delete</button>
                <NavLink to={`/view/${id}`}> <button className='btn btn-view'>View</button></NavLink>
                </td>

           
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home