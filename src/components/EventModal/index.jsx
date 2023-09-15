import React, { useState, useEffect } from "react";
import css from "./EventModal.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AppContext/AppContext";

const EVENT_TYPE = {
  badminton: ["men's-team", "women's-team"],
  chess: ["team"],
  basketball: ["men's-team", "women's-team"],
  cricket: ["men's-team"],
  football: ["men's-team"],
  hockey: ["men's-team"],
  tennis: ["men's-team", "women's-team"],
  "table-tennis": ["men's-team", "women's-team"],
  volleyball: ["men's-team", "women's-team"],
  squash: ["men's-team", "women's-team"],
  weightlifting: [
    "under-56-kg",
    "57-to-62-kg",
    "63-to-69-kg",
    "70-to-77-kg",
    "above-77-kg",
  ],
  powerlifting: [
    "under-56-kg",
    "57-to-62-kg",
    "63-to-69-kg",
    "70-to-77-kg",
    "above-77-kg",
  ],
};

const EventModal = ({ isOpen, onClose, modalData, modalRef }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isOpen]);

  if (!isOpen || !modalData.name || !EVENT_TYPE[modalData.name.split(" ").join("-").toLowerCase()])
    return null;

  const closeModalOnOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 px-10 flex items-center justify-center bg-black bg-opacity-80 z-50 modal-overlay transition-opacity ${
        isAnimating
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      onClick={closeModalOnOverlayClick}
      ref={modalRef}
    >
      <div
        className={`bg-white p-4 md:p-8 rounded-lg shadow-md w-full gap-5 max-w-screen-lg max-h-[70%] mx-auto md:flex-row flex flex-col relative transform transition-transform ${
          isAnimating
            ? "scale-105 translate-y-0 duration-500 ease-in-out"
            : "scale-0 translate-y-8 duration-500 ease-in-out"
        }`}
      >
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
          <h2 className="text-4xl md:text-7xl font-bold text-gray-800">
            {modalData.name}
          </h2>
          <div className={`max-w-md overflow-y-auto ${css.scroll}`}>
            {modalData.rules}
          </div>
          <div className="mt-4">
            {isAuthenticated ? (
              <>
                <p className="font-bold text-lg">Register as: </p>
                <div className="flex gap-4 items-center flex-wrap">
                  {EVENT_TYPE[modalData.name.split(" ").join("-").toLowerCase()].map((type) => (
                    <button
                      onClick={() => {
                        console.log(modalData);
                        navigate(
                          `/register/event/${modalData.name.split(" ").join("-").toLowerCase()}/${type
                            .split("'")[0]
                            .toLowerCase()}`
                        );
                      }}
                      className="text-white capitalize text-center px-6 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-200 text-md md:text-xl hover:bg-blue-600 hover:shadow-md"
                    >
                      {type.replace(/-/g, ' ')}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate("/register/college");
                }}
                className="text-white w-full md:w-max px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-200 text-xl md:text-2xl hover:bg-blue-600 hover:shadow-md"
              >
                Login
              </button>
            )}
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="rounded-2xl w-full h-96 overflow-hidden mx-auto"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 47% 100%, 0 53%)",
            }}
          >
            <img
              src={`${modalData.modalImg}`}
              alt={modalData.name}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
