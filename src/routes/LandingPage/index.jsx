import fut from "../../assets/athlete11.png";
import s from "./landing.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

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
              the battle begins...
            </p>
            <p className={"text-white w-3/4 mt-3 text-2xl mb-1 " + s.p2}>
              Shaurya is the main Sports Fest Of I.I.T Kharagpur. Several
              Colleges from different corners of India participate in different
              events . Come join us and be part of this wonderful fest.
            </p>
            <button
              className={s.glowOnHover}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Register
            </button>
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
