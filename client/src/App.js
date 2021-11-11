import Home from "./components/Home";
import UserForm from "./components/UserForm";
import UsersData from "./components/UsersData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/users" element={<UsersData />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
