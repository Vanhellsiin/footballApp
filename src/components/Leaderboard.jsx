import React from "react";
import "../css/leaderboard.css";
import {  useState } from "react";



function Home() {

  const teamData = [
    { team: "Brazil", win: 2, lose: 0, tie: 1, gs: 8, ga: 4, pts: 7 },
    { team: "Serbia", win: 0, lose: 2, tie: 1, gs: 3, ga: 2, pts: 1 },
    { team: "Switzerland", win: 0, lose: 2, tie: 1, gs: 4, ga: 7, pts: 2 },
    { team: "Cameroon", win: 1, lose: 0, tie: 2, gs: 1, ga: 6, pts: 5 },
  ];


  const [data, setData] = useState(teamData);
  const [order, setOrder] = useState("ASC")
  
  console.log(data)


  const sorting = (col) => {
    if (order === "ASC"){
      const sorted = [...teamData].sort((a,b) =>
        a[col] > b[col] ? 1 : -1
      );
      console.log(sorted)
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC"){
      const sorted = [...teamData].sort((a,b) =>
        a[col] < b[col] ? 1 : -1
      );
      console.log(sorted)
      setData(sorted);
      setOrder("ASC");
  }
  }


  

  return (
    <div className="todo">
      <div className="title">League Leaderboard</div>

      
        <table className="content-container-two">
          <thead className="row-contents titleTwo thead">
            <th onClick={() => sorting("team")}>Team</th>
            <th></th>
            <th onClick={() => sorting("win")}>Win</th>
            <th onClick={() => sorting("lose")}>Lose</th>
            <th onClick={() => sorting("tie")}>Tie</th>
            <th onClick={() => sorting("gs")}>Gs</th>
            <th onClick={() => sorting("ga")}>Ga</th>
            <th onClick={() => sorting("pts")}>Pts</th>
          </thead>
          <tbody>
            {data.map((data, y) => {
              if( y%2 ===0 ) return (
                 <tr ley={data.id} className="row-contents titleOne">
                    <td> {data.team} </td>
                    <img src={`https://countryflagsapi.com/png/${data.team}`} alt="" className="countryImg"/>
                    <td> {data.win}</td>
                    <td> {data.lose}</td>
                    <td> {data.tie}</td>
                    <td> {data.gs}</td>
                    <td> {data.ga}</td>
                    <td> {data.pts}</td>
                 </tr> 
              ) 
              else return (
                <tr ley={data.id} className="row-contents titleTwo">
                    <td> {data.team} </td>
                    <img src={`https://countryflagsapi.com/png/${data.team}`} alt="" className="countryImg"/>
                    <td> {data.win}</td>
                    <td> {data.lose}</td>
                    <td> {data.tie}</td>
                    <td> {data.gs}</td>
                    <td> {data.ga}</td>
                    <td> {data.pts}</td>
                 </tr> 
              )
})}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
