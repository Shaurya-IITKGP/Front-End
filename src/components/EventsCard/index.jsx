import React, { useState, useRef } from "react";
import EventModal from '../EventModal';
import CardData from "../../CardData/CardData"

const EventsCard = ({ event }) => {
  const EVENTS=CardData.EVENTS;
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const currentEvent = EVENTS.find(item => item.name === event.name);

  const closeModalOnOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className="relative aspect-4/3">
      <div
        className="cursor-pointer w-full h-full absolute top-0 left-0"
        onClick={openModal}
      >
        <img
          className="w-full h-full object-cover hover:scale-105 duration-200"
          src={`/images/events/${event.name.toLowerCase()}.jpg`}
          alt={event.name}
        />
      </div>
      <h3 className="text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100">
        {event?.name}
      </h3>
      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        eventName={event.name}
        eventRule={currentEvent?.rule}
        heroImage={currentEvent?.heroImage}
        modalRef={modalRef}
      />
    </div>
  );
};

export default EventsCard;