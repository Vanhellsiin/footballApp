import React from "react";
import style from "./App.module.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Footer from"../src/components/Footer";
import { Route } from "react-router-dom"


function App() {
  return (
    <div className={style.welcomeMessage}>
      {/* <Route exact path="http://localhost:3000/leaderboard" render={() =><Leaderboard/>}/> */}
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App; 
