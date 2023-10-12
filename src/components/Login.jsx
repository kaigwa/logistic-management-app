import React, { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
// import Home from './Home';

const Truck = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // history.push('/Home');
  }
  
  function handleClick (){
    navigate('/Home')
  }

  function validateForm() {
    // Check if the First and Last Name/Mobile is an Empty string or not.

    if (firstName.length === 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }

    if (lastName.length === 0) {
      alert('Invalid Form, Last Name can not be empty')
      return
    }  
    
    if (mobile.length === 0) {
      alert('Invalid Form, Mobile Number can not be empty')
      return
    }

    // Check if the Email is an Empty string or not.

    // if (email.length == 0) {
    //   alert('Invalid Form, Email Address can not be empty')
    //   return
    // }

    // check if the password follows constraints or not.

    // if password length is less than 8 characters, alert invalid form.

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    // variable to count upper case characters in the password.
    let countUpperCase = 0
    // variable to count lowercase characters in the password.
    let countLowerCase = 0
    // variable to count digit characters in the password.
    let countDigit = 0
    // variable to count special characters in the password.
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] === password[i].toUpperCase()) {
          // this means that the character is an upper case character, so increment countUpperCase
          countUpperCase++
        }
        if (password[i] === password[i].toLowerCase()) {
          // this means that the character is lowercase, so increment countUpperCase
          countLowerCase++
        }
      }
    }

    // if (countLowerCase === 0) {
    //   // invalid form, 0 lowercase characters
    //   alert('Invalid Form, 0 lower case characters in password')
    //   return
    // }

    // if (countUpperCase === 0) {
    //   // invalid form, 0 upper case characters
    //   alert('Invalid Form, 0 upper case characters in password')
    //   return
    // }

    // if (countDigit === 0) {
    //   // invalid form, 0 digit characters
    //   alert('Invalid Form, 0 digit characters in password')
    //   return
    // }

    // if (countSpecialCharacters === 0) {
    //   // invalid form, 0 special characters characters
    //   alert('Invalid Form, 0 special characters in password')
    //   return
    // }

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')
  }
  return (
    <div className="main">
      Welcome to Truck Management System
      <form onSubmit={handleSubmit}>
        <p>First Name</p>
        <input type="text" name="name" id="name" onChange={(e) => setFirstName(e.target.value)} />
        <p>Surname</p>
        <input type="text" name="surname" id="surname" onChange={(e) => setLastName(e.target.value)} />
        <p>Phone Number</p>
        <input type="tel" name="phone" id="tel" onChange={(e) => setMobile(e.target.value)}/>
        <p>Password</p>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <button 
          type="submit" 
          onClick={() => {
            validateForm()
            handleClick()
          }}
          >
            Submit
        </button>
        <div className="account">
          <p>You don't have an account?</p>
          <button>Sajiri</button>
        </div>
        
      </form>
    </div>
  )
};

export default Truck;
