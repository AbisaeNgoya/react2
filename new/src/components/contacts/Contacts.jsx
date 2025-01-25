import { useState } from "react";
import "./contacts.scss"

export default function Contacts() {
  const[message, setMessage ]= useState(false);
  const handleSubmit =(e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="" alt="" />
      </div>
      <div className="right">
        <h2>Contacts.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">send</button>
          {message && <span>Thanks, I'll reply Asap. </span>}
        </form>
      </div>
    </div>
  )
}
