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
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={cube} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 max-[1400px]:px-0 ">
          <h2 className="text-center font-bebas font-bold pb-[1rem] text-4xl ">
            SHAURYA CUBE OPEN
          </h2>
          <div className="px-10 text-xl font-helvetica tracking-wide max-[768px]:px-10">
            <p className="mb-4">
              Ignite your cubing journey at the Shaurya Cube Open 2023 by taking
              part in various events like 3x3, 2x2, pyraminx etc!
            </p>
            <p className="mb-4">
              Registration starting at Rs 250 and win upto Rs. 25,000 worth of
              prizes!
            </p>
            <p>Date: 15th October 2023</p>
            <p className="mb-10">Venue: Bhatnagar Auditorium</p>

            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.cubelelo.com%2Fproducts%2Fshaurya-cube-open-2023-competition%3Fvariant%3D47006892949793&h=AT0g6ohWYn05FVUMgG1fsQCpixh4QbD9TGyCdxSQS2M2wvUhg0R5adNLzPkVZ6DnesUzDTyilyiyIBG8CUg3xUYGI_Ap0dIP_SPQlx4tpmgN0mH-tUvpTvKGaxxi96iACGPIoENJ5UmiIEaHaJxG&__tn__=-UK-R&c[0]=AT0IrikSXCA0SpBTUgg2YgFKRNelDXjOY9wio7j8OnRYGjsRjCCVz0RsginZNVrmsetslyZYF9xrzGoqdOAb0GLoExBirigTk89f6ni9jtz_Dbh-mdfXOtCgDSMdI1Ey7ToYA1rQZwUMgQA262bd0mJvQqy7m1MiUYfXPpHl9D-m7MvVCQEgspIFLyK5G-o8Zipyn_R8BF_iQiDYYaGMsPAZMmdTpVm4WzE"
              target="_blank"
            >
              Click Here To Register...
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 flex-row-reverse  max-[850px]:px-5 max-[768px]:flex-col ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={quiz} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0  max-[1400px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            NATIONAL SPORTS QUIZ
          </div>
          <div className="px-10 text-xl tracking-wide font-helvetica max-[768px]:px-10">
            <p className="mb-4">
              Stand a chance to win Rs. 1,50,000+ worth of prizes at the Shaurya
              National Sports Quiz! With zero registration fees, this is a
              golden opportunity for every student to improve their GK and
              potentially walk away rich!
            </p>{" "}
            <p className="mb-4">Date of quiz: 1st October</p>
            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href="https://www.facebook.com/photo.php?fbid=204221416011589&set=pb.100092711961270.-2207520000&type=3"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] ">
          <img src={knuckle} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent py-10 px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            KNUCKLE PUSHUPS CHALLENGE
          </div>
          <div className="px-10 tracking-wide font-helvetica text-xl max-[768px]:px-0">
            <p className="mb-4">
              Ready to test your strength? Introducing the
              #ShauryaKnucklesChallenge – show us your power by conquering 10-15
              knuckles pushups!{" "}
            </p>
            <p className="mb-4">
              It's the perfect blend of challenge and determination. Tag your
              friends to take on the challenge and let's push our limits
              together!
            </p>{" "}
            <p className="mb-4">
              Post your videos publicly as stories OR posts on Facebook OR
              Instagram and tag the Shaurya and IIT Kharagpur pages.
            </p>
            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href="https://www.facebook.com/photo/?fbid=170454786054919&set=a.152912021142529"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 flex-row-reverse  max-[850px]:px-5 max-[768px]:flex-col ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={skipathon} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0  max-[1400px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            SKIPATHON
          </div>
          <div className="px-10 text-xl tracking-wide font-helvetica max-[768px]:px-10">
            <p>
              Get ready to skip to a new level of fitness with the
              #ShauryaSkipathon!
            </p>
            <p>
              {" "}
              This challenge is all about your skipping skills. Can you complete
              100 regular skips (Basic), or will you take on the challenge of
              double unders and see how many you can do in few seconds
              (Advance)?{" "}
            </p>
            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href="https://www.facebook.com/photo/?fbid=184628767970854&set=a.152912021142529"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] ">
          <img src={prix} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent py-10 px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            DUTCH GRAND PRIX LIVE STREAM
          </div>
          <div className="px-10 text-xl tracking-wide font-helvetica max-[768px]:px-0">
            <p>
              On the 27th of August, in a remarkable fusion of high-speed
              technology and sporting passion, the Technology Students' Gymkhana
              played host to an electrifying live stream of the Dutch Grand
              Prix.
            </p>
            <p>
              The event was hosted jointly by Shaurya, the Sports Fest of IIT
              Kharagpur, and TeamKART.
            </p>
            <p>
              An added attraction was the display of the official car of
              TeamKART, the K6, which bagged overall 8th in Formula Bharat 2023
              and placed third in the Cost and Manufacturing event.
            </p>
            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href="https://www.facebook.com/photo/?fbid=182239658209765&set=a.152912021142529"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 flex-row-reverse  max-[850px]:px-5 max-[768px]:flex-col ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={india} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0  max-[1400px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            ASIA CUP INDIA VS PAK LIVE STREAM
          </div>
          <div className="px-10 text-xl tracking-wide font-helvetica max-[768px]:px-10">
            <p>
              Celebrate with 1000s at TOAT, as India takes on its’ greatest
              rival - Pakistan at the Asia Cup 2023!
            </p>{" "}
            <p> Date: 2nd September </p>
            <p>Time: 6 PM onwards </p>
            <p>Venue: TOAT </p>
            <p>
              Join Team Shaurya in supporting our cricket heroes on this
              important faceoff
            </p>
            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href=" https://www.facebook.com/photo/?fbid=185795621187502&set=a.153077831125948"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 max-[768px]:flex-col max-[850px]:px-5">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] ">
          <img src={yoga} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent py-10 px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            SHAURYA YOGA QUEST CHALLENGE
          </div>
          <div className="px-10 text-xl tracking-wide font-helvetica max-[768px]:px-0">
            <p>
              Show us your strength, balance, and flexibility by performing any
              challenging yoga pose, and we'll feature it on our social media
              handles.
            </p>
            <p>
              Don't forget to tag us Shaurya, IIT Kharagpur and use #YogaQuest
              for a chance to be featured.
            </p>{" "}
            <p>
              Also do send the photo to our Instagram page! Strike a pose and
              share the love for yoga with Shaurya 2023!
            </p>
            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href="https://www.facebook.com/photo?fbid=201951719571892&set=a.153077831125948"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
      <div className="flex px-20 pt-20 flex-row-reverse  max-[850px]:px-5 max-[768px]:flex-col ">
        <div className=" flex h-fit w-1/4 max-[768px]:w-1/2 max-[768px]:m-auto max-[768px]:w-[15rem] max-[850px]:w-[20rem] max-[1100px]:w-[25rem]">
          <img src={wall} className="w-full rounded-2xl object-fill"></img>
        </div>
        <div className="rounded-3xl flex flex-col justify-center w-2/3 text-white bg-transparent  px-10 max-[768px]:m-auto max-[768px]:px-0 max-[768px]:w-full max-[850px]:w-full max-[850px]:px-0  max-[1400px]:px-0 ">
          <div className="text-center font-bebas font-bold pb-[1rem] text-4xl">
            WALL MOUNTAIN CLIMBER
          </div>
          <div className="px-10 text-xl tracking-wide font-helvetica max-[768px]:px-10">
            <p className="mb-4">
              Ignite your physical and mental well-being with the ultimate
              fitness challenge brought to you by Shaurya!
            </p>{" "}
            <p className="mb-4">
              To kick-start this exhilarating journey, we invite you to showcase
              your strength and resilience by initially conquering the ‘Feet to
              wall mountain climbers’ - 10 with each leg.
            </p>
            <a
              className="hover:text-red-600 text-yellow-500 font-bold font-mont"
              href="https://www.facebook.com/photo/?fbid=162966170137114&set=a.153077831125948"
              target="_blank"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
