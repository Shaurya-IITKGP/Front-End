import React, { useState, useEffect } from "react";

const EventModal = ({ isOpen, onClose, eventName, eventRule, heroImage, modalRef }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen || !eventName) return null;

  const closeModalOnOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 modal-overlay transition-opacity ${isAnimating ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      onClick={closeModalOnOverlayClick}
      ref={modalRef}
    >
      <div className={`bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-screen-lg mx-auto md:flex-row flex flex-col relative transform transition-transform ${isAnimating ? "scale-105 translate-y-0 duration-500 ease-in-out" : "scale-0 translate-y-8 duration-500 ease-in-out"}`}>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-400 transform rotate-0 hover:rotate-180"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-7xl px-4 font-bold text-gray-800">
            {eventName}
          </h2>
          <div className="px-4 max-w-md overflow-y-auto">
            {eventRule}
          </div>
          <div className="px-2 md:px-4 mt-4">
            <button className="text-white w-full md:w-max px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-200 text-xl md:text-2xl hover:bg-blue-600 hover:shadow-md">
              Register for the event
            </button>
          </div>
        </div>
        <div>
          <div className="rounded-2xl w-full h-96 overflow-hidden mx-auto" style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 47% 100%, 0 53%)",
            }}>
            <img
              src={`/images/events/${heroImage}`}
              alt={eventName}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;