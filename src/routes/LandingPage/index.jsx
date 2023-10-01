import fut from "../../assets/athlete11.png";
import s from "./landing.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AppContext/AppContext";
import Shaurya from "../../assets/shaurya-landing.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <>
      <div className={"w-full "}>
        <div className={"lg:px-40 md:px-32 sm:px-10 px-8"}>
          <div className={"relative mt-20 mb-8 " + s.main}>
            <img src={Shaurya} alt="SHAURYA - SPORTS FEST OF IIT KHARAGPUR" />
          </div>
          <p className={"text-white shrink relative mb-2 font-mont font-helvetica " + s.p1}>
            RISE WITH SHAURYA
          </p>
          <p
            className={
              "text-white font-helvetica md:w-1/2 text-xl " + s.p2
            }
          >
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
        {/* <div id="right-side " className=" flex ">
            <img
              loading="lazy"
              className={"   right-0   " + s.img1}
              src={fut}
              alt=""
            />
          </div> */}
        {/* <div>
          <img loading="lazy" className="w-screen" src="" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default LandingPage;
