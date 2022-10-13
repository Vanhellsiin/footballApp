import React from "react";
import "../css/header.css"
import favicon from "../images/favicon.ico"
import schedule from "../images/schedule.png"
import leaderboard from "../images/leaderboard.png"
import { Link } from "react-router-dom";



const Header = () => {
    return(
        <div className="header">  

            <div className="home-button">
                <img  className="image-one" src={favicon} alt="" />
                League <br></br>Web UI
            </div>

            <div className="schedule-button">
                <img  className="image-two" src={schedule} alt="" />
                Schedule
            </div>

            <Link className="leadboard-button">
            <img  className="image-three" src={leaderboard} alt="" />
                Leaderboard
            </Link>

        </div>
    )
    
};

export default Header;