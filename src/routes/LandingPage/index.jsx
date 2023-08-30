import React from "react";

import fut from "../../assets/athlete11.png";
import s from "./landing.module.css";
import Navbar from "../../components/Navbar/Navbar";
import About from "../AboutPage/About";
import arrowdown from "../../assets/arrowdown1-removebg-preview(1).png"





const LandingPage = () => {
 

  return(
    <>
    
  
    <div className="bg-black  ">
        <Navbar />
        

       
        <div className="bg-black mt-8">
          <div className={"flex shrink " + s.leftSide}>
            <div className={"ml-40 " + s.heading}>
              <h1
                className={
                  "text-white mt-[3rem] shrink font-serif relative " + s.head
                }
              >
                SHAURYA
              </h1>
              <p className={"text-white  ml-4 shrink relative " + s.p1}>
                'the battle begins..'
              </p>
              <p className={"text-white w-3/4 mt-3 text-2xl mb-1 " + s.p2}>
                Shaurya is the main Sports Fest Of I.I.T Kharagpur. Several
                Colleges from different corners of India participate in
                different events . Come join us and be part of this wonderful
                fest.
              </p>
               <button  className={s.glowOnHover}>
                Register
               </button>
              </div>
            <div id="right-side " className=" flex ">
              <img className={"   right-0   " + s.img1} src={fut} alt="" />
            </div>

         
          </div>
          <div className={s.arrow_div}><img className={s.arrow_img1} src={arrowdown} alt="" /></div>
         
         
       
        <div className={s.about_index_main} ><About /></div>
        </div>

    
       
      

    </div>
     
    
     
  
  


  </>




    
      
     
    
  )
};

export default LandingPage;
