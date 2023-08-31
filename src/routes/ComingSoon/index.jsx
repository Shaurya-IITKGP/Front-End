import React, { useState, useEffect } from "react";
import picture from "../../assets/picture.jpg";
import logo from "../../assets/logo.png";
import css from "./comingSoon.module.css";


function ComingSoon() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownEndDate = new Date("August 30, 2023 09:00:00").getTime();

    const interval = setInterval(() => {
      const timeNow = new Date().getTime();
      const timeLeft = countDownEndDate - timeNow;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });

      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="bg-cover h-screen grid grid-col-reverse grid-cols-1 md:grid-cols-2"
      style={{ background: `url(${picture})`, backgroundSize: "cover" }}
    >
      <div className="opacity-70 order-2 md:order-1 bg-black flex flex-col justify-center items-center">
        <ul className="flex  gap-5 mx-auto text-gray-50">
          <li>
            <div
              className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
              id="cdD"
            >
              {countdown.days}
            </div>
            <p className="text-center text-xs mt-2">Days</p>
          </li>
          <li>
            <div
              className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
              id="cdH"
            >
              {countdown.hours}
            </div>
            <p className="text-center text-xs mt-2">Hours</p>
          </li>
          <li>
            <div
              className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
              id="cdM"
            >
              {countdown.minutes}
            </div>
            <p className="text-center text-xs mt-2">Minutes</p>
          </li>
          <li>
            <div
              className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24"
              id="cdS"
            >
              {countdown.seconds}
            </div>
            <p className="text-center text-xs mt-2">Seconds</p>
          </li>
        </ul>
        <ul className="flex gap-10 mx-auto text-white mt-10">
          <li>
            <a
              href="https://www.facebook.com/shauryaiitkgp"
              className="text-lg hover:text-amber-500"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com"
              className="text-lg hover:text-amber-500"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="#" className="text-lg hover:text-amber-500">
              <i className="fab fa-youtube"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/shaurya.iitkgp/"
              className="text-lg hover:text-amber-500"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="opacity-70 bg-black md:opacity-100 md:bg-inherit flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <img src={logo} className="h-[200px] " />
        </div>
        <span className="w-full mt-10 text-center flex justify-center items-center">
          {/* <Typed
            className="font-Montserrat font-mono font-bold uppercase ml-100 text-4xl md:text-5x2 lg:text-6xl mb-28 md:-mr-20 text-white md:text-right"
            strings={["Coming Soon..."]}
            typeSpeed={140}
            backSpeed={130}
            loop
          /> */}
          <div className={"uppercase ml-100 text-4xl md:text-5x2 lg:text-6xl font-extrabold mb-28 md:-mr-20 text-white md:text-center " + css.typing_animation}>Coming&nbsp;Soon...</div>
        </span>
      </div>
    </div>
  );
}

export default ComingSoon;
