import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./addedit.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fireDb from "../firebase";


const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, contact } = state;
  const navigate = useNavigate();
  const id =useParams();
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
  },[id]);


  // useEffect(()=>{
  //   fireDb.child(`contacts/${id}`).get().then((snapshot)=>{
  //     console.log("11111111111snapshot",snapshot)
  //     if(snapshot.exists()){
  //       console.log("{...snapshot.val() }", {...snapshot.val() })
        
  //     }else{
  //       console.log('maion to tut gya')
  //     }
  //   })
  // },[id])
  



  useEffect(()=>{
    if(id){
      setState({...data[id]})
    }else{setState({...initialState})}
    return ()=>{
      setState({...initialState})
    }
  },[id,data])

  const handleInputChange = (e) => {
    const {name,value}=e.target;
    setState({...state,[name]:value})
  };


  const handleSubmit=(e)=>{
    
    e.preventDefault()  //error
    if(!name|| !email||!contact){
      toast.error("Please Provide Value In Each Input Field")
    }else{
    
     
      if(Object.keys(id).length === 0){ //error
        fireDb.child("contacts").push(state,(err)=>{
         
          if(err){
            toast.error(err);
          }else   
          {
            toast.success("contact added succesfully")
            setTimeout(()=>navigate("/Home"),500)
          }//error
        });
      }else{
        console.log("not getting proper data")
      }
    }
    
  }
  return (
  
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alighContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={name || ""}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="email">Emal</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={email || ""}
          onChange={handleInputChange}
        ></input>
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="Your contact"
          value={contact || ""}
          onChange={handleInputChange}
        ></input>
        <input type="submit" value={Object.keys(id).length > 0 ? "Update":"Save"} />
      </form>
    </div>
  );
};

export default AddEdit;
