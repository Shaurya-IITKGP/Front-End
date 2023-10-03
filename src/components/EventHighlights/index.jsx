import React from "react";
import cube from "./assets/cube.jpg";
import quiz from "./assets/quiz.jpg";
import yoga from "./assets/yoga.jpg";
import wall from "./assets/wall.jpg";
import skipathon from "./assets/skipathon.jpg";
import knuckle from "./assets/knuckle.jpg";
import india from "./assets/indiapak.jpg";
import prix from "./assets/grand prix.jpg";

export default function EventHighlights() {
  return (
    <div className="">
      <h2 className="text-white text-[2.5rem] font-badger tracking-wider text-center">
        Highlights
      </h2>
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5 ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={cube} className="w-full rounded-2xl object-fill object-cover transform hover:scale-110 transition-transform duration-300"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 max-[1400px]:px-0 ">
          <h2 className="text-center font-bebas font-bold pb-[1rem] text-4xl ">
            SHAURYA CUBE OPEN
          </h2>
          <div className="px-10 text-xl font-helvetica tracking-wide max-[768px]:px-10">
            <p className="mb-4">
              Ignite your cubing journey at the Shaurya Cube Open 2023 by taking
              part in various events like 3x3, 2x2, pyraminx etc! 🎉
            </p>
            <p className="mb-4">
              Registration starting at Rs 250 and win upto Rs. 25,000 worth of
              prizes! 🔥
            </p>
            <p>Date: 15th October 2023</p>
            <p className="mb-2">Venue: Bhatnagar Auditorium</p>
            <p>Credits: @jaibhav_voshi</p>
            <p>Registration link in bio or scan the QR above to sign up now!</p>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 flex-row-reverse  max-[850px]:px-5 max-[768px]:flex-col ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={wall} className="w-full rounded-2xl object-fill object-cover transform hover:scale-110 transition-transform duration-300"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0  max-[1400px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            WALL MOUNTAIN CLIMBER
          </div>
          <div className="px-10 text-xl max-[768px]:px-10">
            Ignite your physical and mental well-being with the ultimate fitness
            challenge brought to you by Shaurya! To kick-start this exhilarating
            journey, we invite you to showcase your strength and resilience by
            initially conquering the ‘Feet to wall mountain climbers’ - 10 with
            each leg (Check out the link in the comment section to learn more
            about this demanding exercise). Capture your impressive performance
            on video and share it on your social media handles. Let's embark on
            a transformative fitness journey, embracing diversity, and inspiring
            others to join the movement. Get ready to push boundaries, unlock
            your potential, and become the best version of yourself. Shaurya
            awaits you!
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] ">
          <img src={knuckle} className="w-full rounded-2xl object-fill object-cover transform hover:scale-110 transition-transform duration-300"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent py-10 px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            KNUCKLE PUSHUPS CHALLENGE
          </div>
          <div className="px-10 text-xl max-[768px]:px-0">
            Ready to test your strength? 💪 Introducing the
            #ShauryaKnucklesChallenge – show us your power by conquering 10-15
            knuckles pushups! It's the perfect blend of challenge and
            determination. Tag your friends to take on the challenge and let's
            push our limits together! 🏋️‍♂️👊 #Shaurya2023 #rise_with_shaurya
            #shaurya_iitkgp #iitkgp #show_ur_sportism #yo_shaurya #yo_kgp
            #iitkgp Rules: Post your videos publicly as stories OR posts on
            Facebook OR Instagram and tag the Shaurya and IIT Kharagpur pages.
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 flex-row-reverse  max-[850px]:px-5 max-[768px]:flex-col ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={skipathon} className="w-full rounded-2xl object-fill object-cover transform hover:scale-110 transition-transform duration-300"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0  max-[1400px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">SKIPATHON</div>
          <div className="px-10 text-xl max-[768px]:px-10">
            Get ready to skip to a new level of fitness with the
            #ShauryaSkipathon! 🤸‍♂️ This challenge is all about your skipping
            skills. Can you complete 100 regular skips (Basic), or will you take
            on the challenge of double unders and see how many you can do in few
            seconds (Advance)? It's time to jump into action! Link to exercise
            demonstration:
            https://youtube.com/shorts/GQlebWZpErk?si=Q6QwAVuOHn1Vfx67 Record
            your skipathon, tag your friends, and let's see who's got the most
            skips in their step! 🏆
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] ">
          <img src={prix} className="w-full rounded-2xl object-fill object-cover transform hover:scale-110 transition-transform duration-300"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent py-10 px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            DUTCH GRAND PRIX LIVE STREAM
          </div>
          <div className="px-10 text-xl max-[768px]:px-0">
            On the 27th of August, in a remarkable fusion of high-speed
            technology and sporting passion, the Technology Students' Gymkhana
            played host to an electrifying live stream of the Dutch Grand Prix.
            The event was hosted jointly by Shaurya, the Sports Fest of IIT
            Kharagpur, and TeamKART. As the sun set, the Gymkhana foyer turned
            into the sidelines of a racetrack as the screen was put up for the
            stream. Under the watchful eyes of Rudra, the mascot of Shaurya
            2023, the stream commenced at 6 PM as students, professors, staff,
            and all curious passers-by joined us for the one-of-a-kind event. An
            added attraction was the display of the official car of TeamKART,
            the K6, which bagged overall 8th in Formula Bharat 2023 and placed
            third in the Cost and Manufacturing event.
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 flex-row-reverse  max-[850px]:px-5 max-[768px]:flex-col ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={india} className="w-full rounded-2xl object-fill object-cover transform hover:scale-110 transition-transform duration-300"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0  max-[1400px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            ASIA CUP INDIA VS PAK LIVE STREAM
          </div>
          <div className="px-10 text-xl max-[768px]:px-10">
            Celebrate with 1000s at TOAT, as India takes on its’ greatest rival
            - Pakistan at the Asia Cup 2023! Date: 2nd September Time: 6 PM
            onwards Venue: TOAT Join Team Shaurya in supporting our cricket
            heroes on this important faceoff
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] ">
          <img src={yoga} className="w-full rounded-2xl object-fill object-cover transform hover:scale-110 transition-transform duration-300"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent py-10 px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            SHAURYA YOGA QUEST CHALLENGE
          </div>
          <div className="px-10 text-xl max-[768px]:px-0">
            Show us your strength, balance, and flexibility by performing any
            challenging yoga pose, and we'll feature it on our social media
            handles. 📸 Don't forget to tag us Shaurya, IIT Kharagpur and use
            #YogaQuest for a chance to be featured. Also do send the photo to
            our Instagram page! Strike a pose and share the love for yoga with
            Shaurya 2023!
          </div>
        </div>
      </div>
    </div>
  );
}
