import fut from "../../assets/athlete11.png";
import s from "./landing.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AppContext/AppContext";
// import LandingPage from "../../assets/landing-page.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  return (
    <>
      <div className={"w-full "}>
        <div className={" lg:px-40 md:px-32 sm:px-10 px-8 "}>
          <h1 className={"text-white mt-[3rem] shrink relative -mb-4 " + s.head}>
            SHAURYA
          </h1>
          <p className={"text-white shrink relative " + s.p1}>
            The Battle Begins...
          </p>
          <p
            className={
              "text-white mt-10 md:w-1/2 mt-3 text-2xl drop-shadow-[0_0px_5px_rgba(0,0,0,1)] " +
              s.p2
            }
          >
            IIT Kharagpur's annual sports fest, a thrilling showcase of
            athleticism and camaraderie, featuring a variety of sports events.
            Uniting students nationwide in the spirit of competition and
            sportsmanship
          </p>
          {!isAuthenticated && (
            <button
              className={s.glowOnHover}
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
