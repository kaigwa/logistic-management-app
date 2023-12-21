import './App.css';
import Transport from './components/Transportmng';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Createaccount from './components/Createaccount';


function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path='/' element={<Transport />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Createaccount' element={<Createaccount />}/>
        </Routes>

    </div>
  );
}

export default App;
