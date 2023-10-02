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
      <div className="md:px-5 w-full px-5 pb-20 max-w-[1440px] mx-auto">
        <h2 className="py-9 text-white text-[4rem] font-badger tracking-wider text-center px-3">
          EVENTS
        </h2>
        <div className="w-fit grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto">
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
