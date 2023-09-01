import "../../routes/EventsPage/card.css";
import { Button, Heading } from "@chakra-ui/react";
import css from "./event_card.module.css";
const Card = (props) => {
  return (
    <>
      <div className="md:px-20 px-10 max-w-[1440px] mx-auto">
        <Heading color="white" className="py-9 px-3">
          EVENTS
        </Heading>
        <div className="flex md:justify-between justify-center items-center flex-wrap gap-5 mb-3">
          {props.details.map((value, index) => (
            <div
              className={css.video_card}
              key={index}
              style={{ backgroundImage: `url(${value.img})` }}
            >
              <div className={css.video_card_content}>
                <Heading className={css.video_card_title}>
                  {value.title}
                </Heading>
                <Button size="sm" m={1}>
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
