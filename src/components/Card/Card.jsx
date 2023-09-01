import React from "react";
import '../../routes/EventsPage/card.css';
import {Button,Heading} from "@chakra-ui/react"
import css from "./event_card.module.css"
const Card = (props) => {
  return (
    <div className="p-3 bg-black">
      <Heading color="white" p={3}>Events</Heading>
      <div className="m-3 flex justify-around items-center flex-wrap gap-5">
        {props.details.map((value, index) => (
            <div className={css.video_card} style={{backgroundImage: `url(${value.img})`}}>
              <div className={css.video_card_content}>
                <Heading className={css.video_card_title}>{value.title}</Heading>
                <Button size='sm' m={1}>Read More</Button>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Card;