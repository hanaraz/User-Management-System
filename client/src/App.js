import React , {useState} from "react"
import Home from "./components/Home";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {

  const [currentId , setCurrentId] = useState(null);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<UserForm currentId={currentId} setCurrentId={setCurrentId} />} />
        <Route path="/users" element={<Users setCurrentId={setCurrentId} />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
