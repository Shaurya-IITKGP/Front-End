import React from "react";
import '../../routes/EventsPage/card.css';



const Card = (props) => {
  return (
    <div className="p-3 bg-black">
      <h1 className="eventsheading">EVENTS</h1>
      <div className="m-3 flex justify-around items-center flex-wrap gap-5">
        {props.details.map((value, index) => (
          <div>
            <div className="card" key={index}>
              <img src={value.img} alt="" />
              <div className="intro">
                <h1 className="card-title">{value.title}</h1>
                <button className="button-17">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;