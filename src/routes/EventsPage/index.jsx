import { useState } from "react";
import EVENTS from "../../CardData/CardData";
import Card from "../../components/Card/Card";
import EventModal from "../../components/EventModal";
import { Heading } from "@chakra-ui/react";

const EventsPage = () => {
  const [modal, setModal] = useState({
    open: false,
    data: null,
  });

  const closeModal = () => {
    setModal({
      open: false,
      data: null,
    });
  };

  const openModal = (data) => {
    setModal({ open: true, data: data });
  };

  return (
    <>
      <div className="md:px-20 w-full px-10 pb-20 max-w-[1440px] mx-auto">
        <Heading color="white" className="py-9 px-3">
          EVENTS
        </Heading>
        <div className="flex md:justify-around justify-center items-center flex-wrap gap-5 mb-3">
          {EVENTS.map((event, index) => (
            <Card
              key={index}
              cardImg={event.cardImg}
              name={event.name}
              openModal={openModal}
              modalData={{
                name: event.name,
                rules: event.rules,
                modalImg: event.modalImg,
              }}
            />
          ))}
        </div>
      </div>
      <EventModal
        isOpen={modal.open}
        onClose={closeModal}
        modalData={modal?.data}
      />
    </>
  );
};

export default EventsPage;
