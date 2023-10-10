import './App.css';
import Transport from './components/Transportmng';
import Truck from './components/Truck';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path='/' element={<Transport />} />
          <Route path='/Truck' element={<Truck />} />
        </Routes>

    </div>
  );
}

export default App;
