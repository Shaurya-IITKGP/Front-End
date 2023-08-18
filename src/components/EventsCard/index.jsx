import React, { useState, useRef } from "react";
import EventModal from '../EventModal';

const EVENTS = [
  { name: "Athletics", rule:(<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\athletics2.jpg" },
  { name: "Badminton", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\badminton2.jpg" },
  { name: "Basketball", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\basketball2.jpg" },
  { name: "Chess", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Chess2.jpg" },
  { name: "Cricket", rule:(<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Cricket2.jpg" },
  { name: "Football", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Football2.jpg" },
  { name: "Hockey", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Hockey2.jpg" },
  { name: "Mr. Shaurya", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\MRShaurya2.jpg" },
  { name: "Powerlifting", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Powelifting2.jpg" },
  { name: "Squash", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Squash2.jpg" },
  { name: "Swimming", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Swimming2.jpg" },
  { name: "Table Tennis", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\TT2.jpg" },
  { name: "Tennis", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Tennis2.jpg" },
  { name: "Volleyball", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Volleyball2.jpg" },
  { name: "Weightlifting", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "src\assets\Weightlifting2.jpg" },
];

const EventsCard = ({ event }) => {
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