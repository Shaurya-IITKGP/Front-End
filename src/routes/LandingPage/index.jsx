import s from "./landing.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AppContext/AppContext";
import Shaurya from "../../assets/shaurya-landing.png";
import EventHighlights from "../../components/EventHighlights";

import sportsimg1 from "../../assets/sport-icon-clipart-7-removebg-preview1.png";
import sportsimg2 from "../../assets/sport-icon-clipart-7-removebg-preview2.png";
import sportsimg3 from "../../assets/sport-icon-clipart-7-removebg-preview3.png";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <>
      <div className={"w-full "}>
        <div className={"h-screen lg:px-40 md:px-32 sm:px-10 px-8"}>
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
                // s.glowOnHover
              }
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </div>
        <div className="pb-20 mb-20">
          <EventHighlights />
        </div>
      </div>

      <div className=" mt-20">
        <div className={s.about_bg_color}>
          <div className={s.about_main}>
            <h1 className={s.about_head}>ABOUT US</h1>

            <div className={s.about_flex}>
              <p className={s.about_p}>
                Shaurya is the annual inter-collegiate sports fest of IIT
                Kharagpur, which is held over a span of three days, in the month
                of October. It was started in the year 2008 with a vision of
                promoting sports culture, and providing a national platform for
                athletes and sportsmen. Shaurya witnessed four editions, in the
                years 2008, 2009, 2010 and 2012. The last edition witnessed the
                presence of some of India's eminent sports personalities like
                Deepika Kumari, Joydeep Karmakar, Subrata Bhattacharya and
                Charles Borromeo. Shaurya is coming back after a long time this
                year in the month of October.Their are many events including
                Cricket , Football , Volleyball , Basketball , Badminton , Chess
                , Athletics , etc. The event hosted teams from institutions
                across India. SSN Chennai, MERI Kolkata, CCET Chandigarh, NIT
                Trichy, St. Xaviers Kolkata, NIT Durgapur, BCET Durgapur were
                some of the prominent participating colleges, other than the
                host IIT Kharagpur.{" "}
              </p>
            </div>
          </div>
          <div className={s.about_img}>
            <img className="mt-20 ml-80 w-72 h-24" src={sportsimg1} alt="" />
            <img className="mt-20 w-72 h-24" src={sportsimg2} alt="" />
            <img className="mt-20 w-72 h-24" src={sportsimg3} alt="" />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
