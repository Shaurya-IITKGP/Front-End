import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="font" >DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Cricket</h3>
            
          </div>
          <h1>No. of Players 15</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Football</h3>
            
          </div>
          <h1>No. of Players 15</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Hockey</h3>
            
          </div>
          <h1>No. of Players 13</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>BasketBall</h3>
            
          </div>
          <h1>No. of Players 9</h1>
        </div>
      </div>
    </main>
  );
}

export default Home;
