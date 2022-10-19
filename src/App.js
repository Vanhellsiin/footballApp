import React from "react";
import style from "./App.module.css";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import { Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className={style.welcomeMessage}>
      <Header />
        <Route exact path={"/Leaderboard"}>
          <Leaderboard />
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
      <Footer />
    </div>
  );
}

export default App;
