import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/Home.jsx";
import Addshow from "./scenes/Addshow.jsx";
import Login from "./scenes/Login.jsx";
import Signup from "./scenes/Signup.jsx";
import "./styles/index.css";
import './styles/App.css';


function App() {
const [shows, setShows] = useState()
const [user, setUser] = useState()

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home shows={shows} setShows={setShows} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/addShow" element={<Addshow setShows={setShows}/>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
