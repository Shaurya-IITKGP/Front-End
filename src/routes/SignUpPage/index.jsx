import React from "react";
import s from "./SignUp.module.css";
import logo from "./assets/log.svg";
import register from "./assets/register.svg";
import { useState } from "react";

const SignUpPage = () => {
  const [isReal, setisReal] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click

    setIsActive((current) => !current);
    setisReal(false);
  };
  const handleReal = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive(false);
    setisReal((current) => !current);
  };

  return (
    <div
      className={
        isActive ? s.isRealSignin : isReal ? s.isActiveSignup : s.homeSignup
        // Yaha pr before ka load h
      }
    >
      <div className="absolute top-0 left-0 w-full h-full forms-container ">
        <div
          className={
            isActive
              ? "signin-signup absolute -translate-x-2/4 -translate-y-2/4 w-6/12 transition-[1s] duration-[0.7s] ease-[ease-in-out] grid grid-cols-[1fr] z-[5]  top-2/4 left-[25%] max-[870px]:top-[5%] max-[870px]:translate-x-[-50%] max-[870px]:translate-y-0 max-[870px]:left-[50%]  "
              : "signin-signup absolute -translate-x-2/4 -translate-y-2/4 w-6/12 transition-[1s] duration-[0.7s] ease-[ease-in-out] grid grid-cols-[1fr] z-[5] left-3/4 top-2/4 max-[870px]:w-full max-[870px]:top-[95%] max-[870px]:-translate-x-2/4  max-[870px]:-translate-y-full max-[870px]:transition-[1s] max-[870px]:duration-[0.8s] max-[870px]:ease-[ease-in-out] max-[870px]:left-[50%]"
          }
        >
          <form
            action="#"
            className={
              isActive
                ? "sign-in-form flex items-center justify-center flex-col transition-all duration-[0.01s] delay-[0.3s] max-[870px]:delay-[0.2s] overflow-hidden col-[1_/_2] row-[1_/_2] px-20 py-0 opacity-[0] z-[1] max-[570px]:hidden "
                : "sign-in-form flex items-center justify-center flex-col transition-all duration-[0.2s] delay-[0.7s] overflow-hidden col-[1_/_2] row-[1_/_2] px-20 py-0 opacity-[1] z-[2] max-[570px]:py-8 max-[570px]:px-[1.5rem]"
            }
          >
            <h2 className="title text-[2.2rem] text-[#444] mb-2.5">
              <b>Sign in</b>
            </h2>
            <div className="input-field max-w-[380px] w-full bg-[#f0f0f0] h-[55px] grid grid-cols-[15%_85%] relative mx-0 my-2.5 px-[0.4rem] py-0 rounded-[55px]">
              <i className="fas fa-user text-center leading-[55px] py-4 text-[#acacac] transition-[0.5s] text-[1.1rem]"></i>
              <input
                className="bg-none leading-none font-semibold text-[1.1rem] bg-[#f3f0f0] text-[#333] border-none outline-none placeholder-[#aaa] rounded-r-[6rem] placeholder-[font-black] "
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="input-field max-w-[380px] w-full bg-[#f0f0f0] h-[55px] grid grid-cols-[15%_85%] relative mx-0 my-2.5 px-[0.4rem] py-0 rounded-[55px]">
              <i className="fas fa-lock text-center leading-[55px] py-4 text-[#acacac]  transition-[0.5s] text-[1.1rem]"></i>
              <input
                type="password"
                placeholder="Password"
                className="bg-none leading-none font-semibold text-[1.1rem] bg-[#f3f0f0] rounded-r-[6rem] text-[#333] border-none outline-none placeholder-[#aaa] placeholder-[font-black] "
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn solid w-[150px] bg-[#5995fd] h-[49px] text-white uppercase font-semibold cursor-pointer transition-[0.5s] mx-0 my-2.5 rounded-[49px] border-[none] hover:bg-[#4d84e2] outline-none"
            />
          </form>
          <form
            action="#"
            className={
              isActive
                ? "sign-up-form flex items-center justify-center flex-col transition-all duration-[0.2s] delay-[0.7s] overflow-hidden col-[1_/_2] row-[1_/_2] px-20 py-0 opacity-[1] z-[2] max-[870px]:w-[600px] max-[870px]:ml-[-6rem] max-[570px]:w-[500px]  max-[570px]:ml-[-9.7rem] max-[570px]:delay-[0.2s] "
                : "sign-up-form flex items-center justify-center flex-col transition-all duration-[0.2s] delay-[0.7s] overflow-hidden col-[1_/_2] row-[1_/_2] px-20 py-0 opacity-0 z-[1] max-[570px]:px-0 max-[570px]:py-[1.5rem] max-[570px]:hidden"
            }
          >
            <h2 className="title text-[2.2rem] text-[#444] mb-2.5 ">
              <b>Sign up</b>
            </h2>
            <div className="input-field max-w-[380px] w-full bg-[#f0f0f0] h-[55px] grid grid-cols-[15%_85%] relative mx-0 my-2.5 px-[0.4rem] py-0 rounded-[55px]">
              <i className="fas fa-user text-center leading-[55px] py-4 text-[#acacac] transition-[0.5s] text-[1.1rem]"></i>
              <input
                type="text"
                className="bg-none leading-none font-semibold text-[1.1rem] text-[#333] border-none outline-none bg-[#f3f0f0] rounded-r-[6rem] placeholder-[#aaa] placeholder-[font-black]"
                placeholder="Username"
              />
            </div>
            <div className="input-field max-w-[380px] w-full bg-[#f0f0f0] h-[55px] grid grid-cols-[15%_85%] relative mx-0 my-2.5 px-[0.4rem] py-0 rounded-[55px]">
              <i className="fas fa-lock text-center leading-[55px] py-4 text-[#acacac] transition-[0.5s] text-[1.1rem]"></i>
              <input
                type="password"
                className="bg-none leading-none font-semibold text-[1.1rem] text-[#333] border-none outline-none bg-[#f3f0f0] rounded-r-[6rem] placeholder-[#aaa] placeholder-[font-black]"
                placeholder="Password"
              />
            </div>
            <input
              type="submit"
              className={
                isActive
                  ? "btn w-[150px] bg-[#5995fd] h-[49px] text-white uppercase font-semibold cursor-pointer transition-[0.5s] mx-0 my-2.5 rounded-[49px] border-[none] hover:bg-[#4d84e2] outline-none max-[870px]:hidden "
                  : "btn w-[150px] bg-[#5995fd] h-[49px] text-white uppercase font-semibold cursor-pointer transition-[0.5s] mx-0 my-2.5 rounded-[49px] border-[none] hover:bg-[#4d84e2] outline-none"
              }
              value="Sign up"
            />
          </form>
        </div>
      </div>

      <div className="panels-container absolute h-full w-full grid grid-cols-[repeat(2,1fr)] left-0 top-0 max-[870px]:grid-cols-[1fr] max-[870px]:grid-rows-[1fr_2fr_1fr]">
        <div
          className={
            isActive
              ? "panel left-panel flex flex-col items-end justify-around text-center z-[6]  pl-[12%] pr-[17%] pt-12 pb-8 pointer-events-none "
              : "panel1 left-panel flex flex-col items-end justify-around text-center z-[6] pointer-events-auto pl-[12%] pr-[17%] pt-12 pb-8 max-[870px]:flex-row max-[870px]:justify-around max-[870px]:items-center max-[870px]:col-[1_/_2] max-[870px]:px-[8%] max-[870px]:py-10 max-[870px]:row-[1_/_2]"
          }
        >
          <div
            className={
              isActive
                ? "content text-white transition-transform duration-[0.9s] ease-[ease-in-out] delay-[0.4s] translate-x-[-800px] max-[870px]:translate-y-[-300px]"
                : "content1 text-white transition-transform duration-[0.9s] ease-[ease-in-out] delay-[0.6s] max-[870px]:transition-transform max-[870px]:duration-[0.9s] max-[870px]:ease-[ease-in-out] max-[870px]:delay-[0.8s] max-[870px]:px-[15%] max-[570px]:py-[0.5rem] max-[570px]:px-[1rem]"
            }
          >
            <h3 className="panel-h3 font-semibold leading-none text-2xl max-[870px]:text-[1rem]">
              New here ?
            </h3>
            {/* <p className="panel-p  text-[0.95rem] px-0 py-[0.7rem] max-[870px]:text-[1rem] max-[870px]:pt-[0.5rem] max-[870px]:pr-[0rem] max-[570px]:text-[0.6rem] max-[570px]:mb-[-9rem] ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p> */}
            {/* transparent btn ------w-[130px] h-[41px] font-semibold text-[0.8rem] m-0 border-2 border-solid border-white bg-none*/}
            <button
              className={
                isActive
                  ? "btn transparent w-[150px] bg-[#5995fd] h-[49px] text-white uppercase font-semibold cursor-pointer transition-[0.5s] mx-0 my-2.5 rounded-[49px] border-[none] hover:bg-[#4d84e2] outline-none max-[870px]:w-[110px] max-[870px]:h-[35px] max-[870px]:text-[0.7rem] max-[570px]:mt-[9rem] max-[870px]:hidden "
                  : "btn transparent w-[150px] bg-[#5995fd] h-[49px] text-white uppercase font-semibold cursor-pointer transition-[0.5s] mx-0 my-2.5 rounded-[49px] border-[none] hover:bg-[#4d84e2] outline-none max-[870px]:w-[110px] max-[870px]:h-[35px] max-[870px]:text-[0.7rem] max-[570px]:mt-[9rem]  "
              }
              id="sign-up-btn"
              onClick={handleClick}
            >
              Sign up
            </button>
          </div>
          <img
            src={logo}
            className={
              isActive
                ? "image w-full transition-transform duration-[1.1s] ease-[ease-in-out] delay-[0.1s] -translate-x-[800px] max-[870px]:translate-y-[-300px] max-[870px]:translate-x-[200%] max-[870px]:w-[0px] "
                : "image1 w-full transition-transform duration-[1.1s] ease-[ease-in-out] delay-[0.4s] max-[870px]:w-[200px] max-[870px]:transition-transform max-[870px]:duration-[0.9s] max-[870px]:ease-[ease-in-out] max-[870px]:delay-[0.6s] max-[570px]:hidden "
            }
            alt=""
          />
        </div>
        <div
          className={
            isActive
              ? "panel right-panel flex flex-col items-end justify-around text-center z-[6]  pl-[17%] pr-[12%] pt-12 pb-8 pointer-events-auto"
              : "panel right-panel flex flex-col items-end justify-around text-center z-[6] pointer-events-none pl-[17%] pr-[12%] pt-12 pb-8 max-[870px]:flex-row max-[870px]:justify-around max-[870px]:items-center max-[870px]:col-[1_/_2] max-[870px]:pr-[8%] max-[870px]:pt-10 max-[870px]:row-[3_/_4]"
          }
        >
          <div
            className={
              isActive
                ? "content text-white transition-transform duration-[0.9s] ease-[ease-in-out] delay-[0.6s] translate-x-[0%] max-[870px]:translate-y-[0px] "
                : "content text-white transition-transform duration-[0.9s] ease-[ease-in-out] delay-[0.6s] translate-x-[800px] max-[870px]:transition-transform max-[870px]:duration-[0.9s] max-[870px]:ease-[ease-in-out] max-[870px]:delay-[0.8s] max-[870px]:pr-[15%]  max-[570px]:pt-[0.5rem] max-[570px]:pr-[1rem] max-[870px]:translate-y-[300px]"
            }
          >
            <h3 className="panel-h3 font-semibold leading-none text-2xl max-[870px]:text-[1.2rem]">
              Already Registered ?
            </h3>
            {/* <p className="panel-p text-[0.95rem] px-0 py-[0.7rem] max-[870px]:text-[1rem] max-[870px]:pt-[25rem] max-[870px]:pr-[0rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p> */}
            <button
              className="btn transparent w-[150px] bg-[#5995fd] h-[49px] text-white uppercase font-semibold cursor-pointer transition-[0.5s] mx-0 my-2.5 rounded-[49px] border-[none] hover:bg-[#4d84e2] outline-none max-[870px]:w-[140px] max-[870px]:h-[50px] max-[870px]:h-[35px] max-[870px]:text-[1.1rem]  "
              id="sign-in-btn"
              onClick={handleReal}
            >
              Sign in
            </button>
          </div>
          <img
            src={register}
            className={
              isActive
                ? "image w-full transition-transform duration-[1.1s] ease-[ease-in-out] delay-[0.4s] max-[870px]:w-[40%] max-[870px]:mb-[-10rem] translate-x-[0%] max-[870px]:translate-y-0 max-[870px]:translate-y-[30%] "
                : "image1 w-full transition-transform duration-[1.1s] ease-[ease-in-out] delay-[0.4s] translate-x-[800px] max-[870px]:w-[200px] max-[870px]:transition-transform max-[870px]:duration-[0.9s] max-[870px]:ease-[ease-in-out] max-[870px]:delay-[0.6s] max-[570px]:hidden max-[870px]:translate-y-[190%]"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
