
import React, { useState } from "react";
import style from "./Form.module.css";

import axios from "axios";
import { useHistory } from "react-router-dom";

function Form() {
  // all states are mentioned here
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  
 
  // to use history function
  const history = useHistory();

  // function to handle button click
  const handleClick = (e) => {
    e.preventDefault();
    if (firstname === "" || lastname === "" || email === ""|| Contact) {
      document.getElementById("showError").innerHTML =
        "* All fields are mandatory!!";
    } else {
         alert(
          "Data Submitted Successfully"

         )
      
    }
  };
  return (
    <div className={style.createBoard}>
      <br />
      <header>
        <h3 className={style.header}>Contact Form</h3>
      </header>
      <br />
     
      <form className={style.boardInput}>
        <label htmlFor="First Name ">
          <strong>First Name:</strong>
        </label>
        <input
          id="Firstname"
          className={style.inputElement}
          type="text"
          placeholder="Enter a First Name"
          onChange={(e) => setFirstname(e.target.value)}
        ></input>
        <br />
        <br />
        <label htmlFor="team">
          <strong>Last Name :</strong>
        </label>
        <input
          id="team"
          className={style.inputElement}
          type="text"
          placeholder="Enter Your last name"
          onChange={(e) => setLastname(e.target.value.split(" ").toString())}
        ></input>
        <br />
        <br />
        <label htmlFor="type">
          <strong>Email</strong>
        </label>
        <input
          id="email"
          className={style.inputElement}
          type="text"
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label htmlFor="type">
          <strong>Contact No :</strong>
        </label>
        <input
          id="contact"
          className={style.inputElement}
          type="text"
          placeholder="Enter your Contact No"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <br />
        <strong>Query :</strong>
        <textarea>Write Something else</textarea>
        <button
          type="submit"
          id="CreateBoard"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Create
        </button>
      </form>
     
      <br />
      <div id="showError" style={{ color: "red", marginTop:"-660px", textAlign:'center'}}></div>
    </div>
  );
}

export default Form;
