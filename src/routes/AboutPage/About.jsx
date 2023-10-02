import React from "react";
import s from "./About.module.css";

import sportsimg1 from "../../assets/sport-icon-clipart-7-removebg-preview1.png";
import sportsimg2 from "../../assets/sport-icon-clipart-7-removebg-preview2.png";
import sportsimg3 from "../../assets/sport-icon-clipart-7-removebg-preview3.png";

export default function About() {
  return (
    <div className=" mt-20">
      <h1
        className={
          "text-white text-[2.5rem] font-badger tracking-wider text-center"
        }
      >
        ABOUT US
      </h1>

      <div className="px-8 py-10 max-w-4xl mx-auto">
        <p className={`text-white font-helvetica mb-8 text-lg`}>
          Shaurya, the annual inter-collegiate sports fest of IIT Kharagpur, is
          back after a decade, and it's bigger and better than ever before. With
          over 15 titular sports events, combined with guest lectures,
          recreational sport and non-sporting activities (marathons, F1
          simulation, etc), among many more, Shaurya aims to become the pinnacle
          of sport for India's present and future generations.
        </p>

        <p className={`text-white font-helvetica mb-8 text-lg`}>
          Shaurya is a celebration of sports and sportsmanship, where athletes
          from across the country come together to compete and showcase their
          talent. It's a platform for budding sports stars to shine, and for
          experienced athletes to test their limits. But Shaurya is more than
          just a competition. It's also a celebration of camaraderie, teamwork,
          and the spirit of sportsmanship.
        </p>

        <p className={`text-white font-helvetica mb-8 text-lg`}>
          At Shaurya, you'll experience the thrill of competition, the
          camaraderie of teamwork, and the joy of sportsmanship. You'll witness
          world-class athletes in action, and have the opportunity to learn from
          and interact with them. You'll also have the chance to participate in
          a variety of fun and exciting activities, and make memories that will
          last a lifetime.
        </p>
      </div>
    </div>
  );
}
