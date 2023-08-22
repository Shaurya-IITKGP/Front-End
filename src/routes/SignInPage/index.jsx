import React from "react";
import avatar from "./assets/avatar.svg";
import bg from "./assets/bg.svg";
import wave from "./assets/wave.png";
import "https://kit.fontawesome.com/a81368914c.js";
import { useState } from "react";
const SignInPage = () => {
  // const inputs = document.querySelectorAll(".input");

  // function addcl(){
  //     let parent = this.parentNode.parentNode;
  //     parent.classList.add("focus");
  // }

  // function remcl(){
  //     let parent = this.parentNode.parentNode;
  //     if(this.value == ""){
  //         parent.classList.remove("focus");
  //     }
  // }

  // inputs.forEach(input => {
  //     input.addEventListener("focus", addcl);
  //     input.addEventListener("blur", remcl);
  // });
  const [isActive, setIsActive] = useState(false);
  const [isReal, setisReal] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setisReal(false);
    setIsActive((current) => !current);
  };
  const handleReal = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive(false);
    setisReal((current) => !current);
  };

  return (
    <>
      <img
        class="wave box-border m-0 p-0  overflow-hidden fixed h-full z-[-1] left-0 bottom-0 max-[900px]:hidden"
        src={wave}
      />
      <div class="container box-border m-0 p-0  overflow-hidden w-screen h-screen grid grid-cols-[repeat(2,1fr)] gap-28 px-8 py-0 max-[1050px]:gap-20 max-[900px]:grid-cols-[1fr]">
        <div class="img flex items-center justify-end max-[900px]:hidden">
          <img src={bg} className="w-[500px] max-[1000px]:w-[400px]" />
        </div>
        <div class="login-content flex min-[900px]:ml-[8rem] justify-start items-center text-center max-[900px]:justify-center">
          <form className="w-[360px] max-[1000px]:w-[290px]">
            <img src={avatar} className="h-[100px] " />
            <h2 class="title text-[#333] uppercase text-[2.9rem] mx-0 my-[15px]  max-[1000px]:text-[2.4rem] max-[1000px]:mx-0 max-[1000px]:my-2">
              Welcome
            </h2>
            <div
              class={
                isActive
                  ? "input-div one  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mt-0 before:content-[''] before:absolute   before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%] before:w-[50%] after:w-[50%]"
                  : "input-div one  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mt-0 before:content-[''] before:absolute  before:w-[0%] before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:w-[0%] after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%]"
              }
            >
              <div class="i text-[#d9d9d9] flex justify-center items-center relative h-[45px]">
                <i
                  class={
                    isActive
                      ? "fas fa-user transition-[0.3s] text-[#38d39f]"
                      : "fas fa-user transition-[0.3s]"
                  }
                ></i>
              </div>
              <div class="div relative h-[45px]">
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
                  class="input absolute w-full h-full text-[1.2rem] text-[#555] px-[0.7rem] py-2 outline-none left-0 top-0 bg-transparent "
                  onClick={handleClick}
                />
              </div>
            </div>
            <div
              class={
                isReal
                  ? "input-div pass  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mb-[4px] before:content-[''] before:absolute before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%] before:w-[50%] after:w-[50%]"
                  : "input-div pass  relative grid grid-cols-[7%_93%] mx-0 my-[25px] px-0 py-[5px] border-b-2 border-b-[#d9d9d9] border-solid mb-[4px] before:content-[''] before:absolute  before:w-[0%] before:h-0.5 before:bg-[#38d39f] before:transition-[0.4s] before:-bottom-0.5 before:right-[50%] after:content-[''] after:absolute  after:w-[0%] after:h-0.5 after:bg-[#38d39f] after:transition-[0.4s] after:-bottom-0.5 after:left-[50%]"
              }
            >
              <div class="i text-[#d9d9d9] flex justify-center items-center relative h-[45px]">
                <i
                  class={
                    isReal
                      ? "fas fa-lock transition-[0.3s] text-[#38d39f]"
                      : "fas fa-lock transition-[0.3s]"
                  }
                ></i>
              </div>
              <div class="div relative h-[45px]">
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
                  class="input absolute w-full h-full text-[1.2rem] text-[#555] px-[0.7rem] py-2 outline-none left-0 top-0 bg-transparent"
                  onClick={handleReal}
                />
              </div>
            </div>
            <a
              href="#"
              className="block text-right no-underline text-[#999] text-[0.9rem] transition-[0.3s] my-2 hover:text-[#38d39f]"
            >
              Forgot Password?
            </a>
            <input
              type="submit"
              class="btn block w-full h-[50px] bg-[linear-gradient(to_right,#32be8f,#38d39f,#32be8f)] bg-[200%] text-[1.2rem] text-white uppercase cursor-pointer transition-[0.5s] mx-0 my-4 rounded-[25px] border-[none] hover:bg-right"
              value="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
