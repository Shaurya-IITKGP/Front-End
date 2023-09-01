import React from "react";
import CardData from "../../CardData/CardData";
import Card from "../../components/Card/Card";

const EventsPage = (props) => {
  return (
    <>
      <Card details={CardData.CardData} />
    </>
  );
}

export default EventsPage;
