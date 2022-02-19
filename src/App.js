// https://dummynetflix-36221.web.app
// https://www.codingdeft.com/posts/react-fetch-data-api/
import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Homescreen from "./Homescreen";
import Loginscreen from "./Loginscreen";
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./ProfileScreen";

function App() {
   const user=useSelector(selectUser);

   const dispatch = useDispatch()

   useEffect(() => {
     const unsubscribe= auth.onAuthStateChanged(userAuth=>{
       if (userAuth){
         dispatch(login({
           uid:userAuth.uid,
           emai:userAuth.email,
         }))
         //loggin
       }else{
         dispatch(logout());
         //loggout
       }
     });
    return unsubscribe;
   }, [dispatch])



  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Loginscreen />
        ) : (
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
          
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
