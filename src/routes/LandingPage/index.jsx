import s from "./landing.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AppContext/AppContext";
import Shaurya from "../../assets/shaurya-landing.png";
import EventHighlights from "../../components/EventHighlights";
import Footer from "../Footer/Footer";
import About from "../AboutPage/About";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
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
          {isAuthenticated && (
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

          <div
            className={s.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
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
