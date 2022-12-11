import{ React,useState} from 'react'
import { useParams } from 'react-router';
import "./addedit.css"
const Update = () => {
const {id} = useParams()
console.log("88888888888888",id)

  return (
    <div style={{ marginTop: "100px" }}>
    <h1>Update file</h1>
    <form
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alighContent: "center",
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        // value={name || ""}
      ></input>
      <label htmlFor="email">Emal</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        // value={email || ""}
      ></input>
      <label htmlFor="contact">Contact</label>
      <input
        type="number"
        id="contact"
        name="contact"
        placeholder="Your contact"
        // value={contact || ""}
      ></input>
      <input type="submit" value={"Update"} />
    </form>
  </div>
  )
}

export default Update