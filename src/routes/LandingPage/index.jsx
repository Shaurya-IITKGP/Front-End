import fut from "../../assets/athlete11.png";
import s from "./landing.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <div>
        <div className={"flex shrink " + s.leftSide}>
          <div className={"ml-40 " + s.heading}>
            <h1
              className={
                "text-white mt-[3rem] shrink font-serif relative " + s.head
              }
            >
              SHAURYA
            </h1>
            <p className={"text-white  shrink relative " + s.p1}>
              The Battle Begins...
            </p>
            <p className={"text-white w-3/4 mt-3 text-2xl mb-1 " + s.p2}>
              IIT Kharagpur's annual sports fest, a thrilling showcase of
              athleticism and camaraderie, featuring a variety of sports events.
              Uniting students nationwide in the spirit of competition and
              sportsmanship
            </p>
            {!isAuthenticated && (
              <button
                className={s.glowOnHover}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Register
              </button>
            )}
          </div>
          <div id="right-side " className=" flex ">
            <img className={"   right-0   " + s.img1} src={fut} alt="" />
          </div>
        </div>
        <div>
          <img className="w-screen" src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
