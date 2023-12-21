import React, { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
// import Home from './Home';

const Login = () => {

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  // const url = 'https://script.google.com/macros/s/AKfycbyaXgmrGYOEg0IHNh0FFs3sshfb84vZUImIhUTfObGNnDzMOIkh58pgTZL4ptoRI8SC/exec'

  const handleSubmit = (e) => {
    console.log(name, company, mobile, email, date)
    alert('Hello' + name + 'Welcome! To Joe Express Logistics. For more updates please visit our website www.joeexpresslogistics.com')
    e.preventDefault()
  }
   
  function handleClick (){
    navigate('/Home')
    navigate('/Createaccount')
  }

  // function validateForm() {
  //   // Check if the First and Last Name/Mobile is an Empty string or not.

  //   // if (firstName.length === 0) {
  //   //   alert('Invalid Form, First Name can not be empty')
  //   //   return
  //   // }

  //   // if (lastName.length === 0) {
  //   //   alert('Invalid Form, Last Name can not be empty')
  //   //   return
  //   // }  
    
  //   // if (mobile.length === 0) {
  //   //   alert('Invalid Form, Mobile Number can not be empty')
  //   //   return
  //   // }

  //   // Check if the Email is an Empty string or not.

  //   // if (email.length == 0) {
  //   //   alert('Invalid Form, Email Address can not be empty')
  //   //   return
  //   // }

  //   // check if the password follows constraints or not.

  //   // if password length is less than 8 characters, alert invalid form.

  //   // if (password.length < 8) {
  //   //   alert(
  //   //     'Invalid Form, Password must contain greater than or equal to 8 characters.',
  //   //   )
  //   //   return
  //   // }

  //   // variable to count upper case characters in the password.
  //   // let countUpperCase = 0
  //   // variable to count lowercase characters in the password.
  //   // let countLowerCase = 0
  //   // variable to count digit characters in the password.
  //   // let countDigit = 0
  //   // variable to count special characters in the password.
  //   // let countSpecialCharacters = 0

  //   // for (let i = 0; i < password.length; i++) {
  //   //   const specialChars = [
  //   //     '!',
  //   //     '@',
  //   //     '#',
  //   //     '$',
  //   //     '%',
  //   //     '^',
  //   //     '&',
  //   //     '*',
  //   //     '(',
  //   //     ')',
  //   //     '_',
  //   //     '-',
  //   //     '+',
  //   //     '=',
  //   //     '[',
  //   //     '{',
  //   //     ']',
  //   //     '}',
  //   //     ':',
  //   //     ';',
  //   //     '<',
  //   //     '>',
  //   //   ]

  //   //   if (specialChars.includes(password[i])) {
  //   //     // this means that the character is special, so increment countSpecialCharacters
  //   //     countSpecialCharacters++
  //   //   } else if (!isNaN(password[i] * 1)) {
  //   //     // this means that the character is a digit, so increment countDigit
  //   //     countDigit++
  //   //   } else {
  //   //     if (password[i] === password[i].toUpperCase()) {
  //   //       // this means that the character is an upper case character, so increment countUpperCase
  //   //       countUpperCase++
  //   //     }
  //   //     if (password[i] === password[i].toLowerCase()) {
  //   //       // this means that the character is lowercase, so increment countUpperCase
  //   //       countLowerCase++
  //   //     }
  //   //   }
  //   // }

  //   // if (countLowerCase === 0) {
  //   //   // invalid form, 0 lowercase characters
  //   //   alert('Invalid Form, 0 lower case characters in password')
  //   //   return
  //   // }

  //   // if (countUpperCase === 0) {
  //   //   // invalid form, 0 upper case characters
  //   //   alert('Invalid Form, 0 upper case characters in password')
  //   //   return
  //   // }

  //   // if (countDigit === 0) {
  //   //   // invalid form, 0 digit characters
  //   //   alert('Invalid Form, 0 digit characters in password')
  //   //   return
  //   // }

  //   // if (countSpecialCharacters === 0) {
  //   //   // invalid form, 0 special characters characters
  //   //   alert('Invalid Form, 0 special characters in password')
  //   //   return
  //   // }

  //   // if all the conditions are valid, this means that the form is valid

  //   // alert('Form is valid')
  // }
  return (
    <div className="main">
      Welcome to Truck Management System

      <form className="form" onSubmit={handleSubmit}>
        <p>Full Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <p>Company Name</p>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        <p>Mobile Number</p>
        <input type="tel" value={mobile} id="tel" onChange={(e) => setMobile(e.target.value)}/>
        <p>Email </p>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Visit Date and Time</p>
        <input type="datetime-local" id="" value={date} onChange={(e) => setDate(e.target.value)} />
        <button 
          type="submit" 
          // onClick={() => {
          //   // validateForm()
          //   handleClick()
          // }}
          value="Submit"
          >
            Submit
        </button>

        <div className="account">
          <p>You don't have an account?</p>
          <button
          onClick={() =>{
            handleClick()
          }}
          >Create Account</button>
        </div>
        
      </form>
    </div>
  );
};

export default Login;
