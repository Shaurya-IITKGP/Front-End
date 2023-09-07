import React from "react";
import avatar from "./assets/avatar.svg";
import bg from "./assets/bg.svg";
import wave from "./assets/wave.png";
import "https://kit.fontawesome.com/a81368914c.js";
import { useState } from "react";
import { useEffect } from "react";
const SignInPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isReal, setisReal] = useState(false);
  const handleClick = (event) => {
    const userin = document.getElementById("user");
    const passin = document.getElementById("pass");

    if (passin.value == "") {
      setisReal(false);
    }

    setIsActive(true);
  };
  const handleReal = (event) => {
    const userin = document.getElementById("user");
    const passin = document.getElementById("pass");
    if (userin.value == "") {
      setIsActive(false);
    }

    setisReal(true);
  };
  useEffect((e) => {
    let handler = (e) => {
      const userin = document.getElementById("user");
      const passin = document.getElementById("pass");
      if (userin.value == "") {
        setIsActive(false);
      }
      if (passin.value == "") {
        setisReal(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <>
      <img
        className="wave box-border m-0 p-0  overflow-hidden fixed h-full z-[-1] left-0 bottom-0 max-[900px]:hidden"
        src={wave}
      />
      <div className="container box-border m-0 p-0  overflow-hidden w-screen h-[100%] grid grid-cols-[repeat(2,1fr)] gap-28 px-8 py-0 max-[1050px]:gap-20 max-[900px]:grid-cols-[1fr] pt-9">
        <div className="img flex items-center justify-end max-[900px]:hidden">
          <img src={bg} className="w-[500px] max-[1000px]:w-[400px]" />
        </div>
        <div className="login-content flex min-[900px]:ml-[12rem] justify-start items-center text-center max-[900px]:justify-center">
          <form className="w-[360px] max-[1000px]:w-[290px]">
            <img src={avatar} className="h-[100px] block m-auto" />
            <h2 className="title text-[#ffff] uppercase text-[2.9rem] mx-0 my-[15px]  max-[1000px]:text-[2.4rem] max-[1000px]:mx-0 max-[1000px]:my-2">
              Welcome
            </h2>
            <div
              className={
                isActive
                  ? "input-div one  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mt-0 before:content-[''] before:absolute   before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%] before:w-[50%] after:w-[50%]"
                  : "input-div one  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mt-0 before:content-[''] before:absolute  before:w-[0%] before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:w-[0%] after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%]"
              }
            >
              <div className="i text-[#d9d9d9] flex justify-center items-center relative h-[45px]">
                <i
                  className={
                    isActive
                      ? "fas fa-user transition-[0.3s] text-[#38d39f]"
                      : "fas fa-user transition-[0.3s]"
                  }
                ></i>
              </div>
              <div className="div relative h-[45px]">
                <h5
                  className={
                    isActive
                      ? "username absolute -translate-y-2/4 text-[#999] text-lg transition-[0.3s] left-2.5  text-[15px] top-[-5px]"
                      : "username absolute -translate-y-2/4 text-[#999] text-lg transition-[0.3s] left-2.5 top-2/4 "
                  }
                >
                  Username
                </h5>
                <input
                  type="text"
                  className="input absolute w-full h-full text-[1.2rem] text-[#555] px-[0.7rem] py-2 outline-none left-0 top-0 bg-transparent "
                  onClick={handleClick}
                  id="user"
                />
              </div>
            </div>
            <div
              className={
                isReal
                  ? "input-div pass  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mb-[4px] before:content-[''] before:absolute before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%] before:w-[50%] after:w-[50%]"
                  : "input-div pass  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mb-[4px] before:content-[''] before:absolute  before:w-[0%] before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:w-[0%] after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%]"
              }
            >
              <div className="i text-[#d9d9d9] flex justify-center items-center relative h-[45px]">
                <i
                  className={
                    isReal
                      ? "fas fa-lock transition-[0.3s] text-[#38d39f]"
                      : "fas fa-lock transition-[0.3s]"
                  }
                ></i>
              </div>
              <div className="div relative h-[45px]">
                <h5
                  className={
                    isReal
                      ? "password absolute -translate-y-2/4 text-[#999] text-lg transition-[0.3s] left-2.5  text-[15px] top-[-5px]"
                      : "password absolute -translate-y-2/4 text-[#999] text-lg transition-[0.3s] left-2.5 top-2/4"
                  }
                >
                  Password
                </h5>
                <input
                  type="password"
                  className="input absolute w-full h-full text-[1.2rem] text-[#555] px-[0.7rem] py-2 outline-none left-0 top-0 bg-transparent"
                  onClick={handleReal}
                  id="pass"
                />
              </div>
            </div>
            <input
              type="submit"
              className="btn block w-full h-[50px] bg-[linear-gradient(to_right,#32be8f,#38d39f,#32be8f)] bg-[200%] text-[1.2rem] text-white uppercase cursor-pointer transition-[0.5s] mx-0 my-4 rounded-[25px] border-[none] hover:bg-right"
              value="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
