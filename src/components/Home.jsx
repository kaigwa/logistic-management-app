import React, { useEffect, useState } from "react";
import './Home.css';

const Home = (props) => {
  const url = ``
  const [data,setData] = useState([]);
  
  useEffect(() => {
    fetch('IifyHWiF9avGyaO5_B93E8znyWQx1Y5K_stcyCKP97Q')

    .then((res) => res.json())
    .then((data) => {
      setData(data);
      console.log(data);
  })
  .catch((error) => console.log(error));
},[]);
  return (
    <div className="main">
      <div className="user">
        <div className='userimg'>
         
        </div>
        <h4>Edwin Lugakingira</h4>
        <div className="userinfo">
          <div><h4>Driving Licence</h4><span>1292889</span></div>
          <div><h4>Total Routes</h4><span>247</span></div>
          <div><h4>Total Kilometers</h4><span>1500</span></div>
        </div>
      </div>

      <div className="map">Map</div>
      <div className="notification">Notification</div>
      <div className="trucks">Truck</div>
      <div className="market">Marketplace</div>
        user account
        driving licences
        truck number
        local/transit
        list of trips per day/week/month/year
        map with gps tracker or ip tracker
        speed alert.
        km calculator with alert note for truck srvice.
        list of spare parties and price tag (marketplace/e-com)
        route optimization
        diesel meter/gauge.
        list of documentations
        speech to text.
        news i.e affecting transportion sector
        weather widget 

      
    </div>
  )
};

export default Home;
