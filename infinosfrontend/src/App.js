import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Devices from './Devices';
import Control from "./Control"
import Home from "./Home"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/devices" element={<Devices/>} />
          <Route path="/control" element={<Control/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
