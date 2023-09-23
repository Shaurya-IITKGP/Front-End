import "../../routes/EventsPage/card.css";
import { Button, Heading } from "@chakra-ui/react";
import css from "./event_card.module.css";

const Card = ({ cardImg, name, openModal, modalData }) => {
  return (
    <>
      <div
        className={`${css.video_card}`}
        style={{ backgroundImage: `url(${cardImg})` }}
      >
        <div className={css.video_card_content}>
          <Heading className={css.video_card_title}>{name}</Heading>
          <Button
            onClick={() => {
              // console.log(name)
              if (name == "Table Tennis")
                return openModal({ ...modalData, name: "tabletennis" });
              openModal(modalData);
            }}
            size="sm"
            m={1}
          >
            Read More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
