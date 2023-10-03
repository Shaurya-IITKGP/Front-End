import s from "./landing.module.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import Shaurya from "../../assets/shaurya-landing.png";
import EventHighlights from "../../components/EventHighlights";
import Footer from "../Footer/Footer";
import About from "../AboutPage/About";
import { BiChevronDown } from "react-icons/bi";
import { useContext } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const { chevVisible, isAuthenticated } = useContext(AppContext);
  console.log(isAuthenticated);
  return (
    <>
      <div className={"w-full "}>
        <div className={"h-[90vh] lg:px-40 md:px-32 sm:px-10 px-8"}>
          <div className={"relative mt-20 mb-8 " + s.main}>
            <img src={Shaurya} alt="SHAURYA - SPORTS FEST OF IIT KHARAGPUR" />
          </div>
          <p
            className={
              "text-white shrink relative mb-2 font-mont font-helvetica " + s.p1
            }
          >
            RISE WITH SHAURYA
          </p>
          <p className={"text-white font-helvetica md:w-1/2 text-xl " + s.p2}>
            IIT Kharagpur's annual sports fest, a thrilling showcase of
            athleticism and camaraderie, featuring a variety of sports events.
            Uniting students nationwide in the spirit of competition and
            sportsmanship
          </p>

          {isAuthenticated ? (
            <>
              <button
                className={
                  "text-white border-white border-2 mt-10 px-8 py-3 rounded-3xl hover:text-black hover:bg-white font-bold transition-all"
                }
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </button>
            </>
          ) : (
            <button
              className={
                "text-white border-white border-2 mt-10 px-8 py-3 rounded-3xl hover:text-black hover:bg-white font-bold transition-all"
              }
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}

          {
            <BiChevronDown
              className={`text-white text-[3rem] fixed top-[90vh] left-1/2 -translate-x-1/2 ${
                s.animateBounce
              } transition-opacity duration-300 ${
                !chevVisible ? "opacity-0" : ""
              }`}
            />
          }
        </div>

        <div className="py-20 ">
          <EventHighlights />
        </div>

        <div className="">
          <About />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
