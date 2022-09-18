import MyContacts from "MyContacts";
import Navbar from "./Navbar/Navbar";
import { Routes, Route, } from "react-router-dom";
import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/register" element={ <RegisterPage/>} />  
        <Route path="/contacts" element={ <MyContacts/>} />
        <Route path="/login" element={ <LoginPage/>} />
      </Routes>
     
    </div>
  );
};
