import React, { useState, useEffect } from "react";
import picture from "../../assets/picture.jpg";
import logo from "../../assets/logo.png";
import css from "./comingSoon.module.css";


function ComingSoon() {

  return (
    <div className="bg-black h-[100vh] flex justify-center flex-col items-center flex-wrap">
      <p className={css.shining_text_animation}>
        Coming 
      </p>
      <p className={css.shining_text_animation}>
        Soon
      </p>
    </div>
  );
}

export default ComingSoon;
