import React from "react";
import '../../routes/EventsPage/card.css';



const Card = (props) => {
  return(
    <>
    <br /><br />
    <h1 className="eventsheading">EVENTS</h1>
    {props.details.map( (value,index)=>(
    <div className="container">
      <div className="card" key={index}>
        <img src={value.img}  alt="" />
        <div className="intro">
          <h1 className="card-title">{value.title}</h1>
          <button className="button-17">View More</button>
        </div>
      </div>
    </div>
    ))};
  </>
  );
}

export default Card;