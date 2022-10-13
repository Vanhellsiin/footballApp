import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../css/home.css";
const token = "YuHBdSlDXY000xa8IlCm7Qgq4_s";

function Home() {
  const [data, setData] = useState([]);
  console.log(data);



  useEffect(() => {
    axios("http://localhost:3001/api/v1/getAllMatches", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => setData(response.data.matches));
  }, []);



  return (
    <div>
      <div className="title">League Schedule</div>

      <div className="container">
        <div className="content-container">
          {data.map((data) => (
            <div key={data.id} className="row-content">
              <p>{data.matchDate}</p>
              <p> {data.stadium}</p>
              <p> {data.homeTeam}</p>
              <img src={`https://countryflagsapi.com/png/${data.homeTeam}`} alt="" />
              <p> {data.awayTeam}</p>
              <p> {data.matchPlayed}</p>
              <p>{data.homeTeamScore}</p>
              <p>{data.awayTeamScore}</p>
              <img src={`https://countryflagsapi.com/png/${data.homeTeam}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
