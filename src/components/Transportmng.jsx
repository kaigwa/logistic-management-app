import React from "react";
import './Transportmng.css';
import { useNavigate } from "react-router-dom";

const Transport = (props) => {
  const navigate = useNavigate();

  return (
    <div className="container">  
      <h2>Welcome to Logistic Management App</h2>
      <button onClick={() => navigate('/Truck')}>Truck Management</button>
      <button>Waste Management</button>
    </div>
  )
};

export default Transport;
