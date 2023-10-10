// import { useState } from 'react';
import React, { useState } from "react";
import './Truck.css';
import PhoneInput from "react-phone-number-input";
import { useForm } from 'react-hook-form';

import "react-phone-number-input/style.css";

const Truck = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const [value, setValue] = useState()

  const {
    handleSubmit,
    formState: {errors},
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="main">
      Welcome to Truck Management System
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>First Name</p>
        <input type="text" name="name" id="name" onChange={(e) => setFirstName(e.target.value)} />
        <p>Surname</p>
        <input type="text" name="surname" id="surname" onChange={(e) => setLastName(e.target.value)} />
        <p>Phone Number</p>
        <PhoneInput defaultCountry='TZ' value={value} onChange={setValue}/>
        <p>Password</p>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
        
        {errors["phone-input"] && (
          <p className="error-message">Invalid Phone</p>
        )}
        <div className="account">
          <p>You don't have an account?</p>
          <button>Sajiri</button>
        </div>
      </form>
    </div>
  )
};

export default Truck;
