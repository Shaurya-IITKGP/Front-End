import React from "react";
import footer_logo from "../../assets/logo-shaurya-lg.png";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="flex py-10 justify-evenly md:flex-row flex-col items-center text-center gap-20 wrap bg-gradient-to-t from-black">
      <div className="w-60 md:w-80 flex items-center">
        <img className="block w-full" src={footer_logo} alt="" />
      </div>
      <div className="">
        <h4 className="text-white font-bold font-bebas text-3xl md:mb-8 mb-4">
          Contact Us
        </h4>
        <ul className="flex gap-3 flex-col">
          <li className="font-bold font-helvetica md:mb-4">
            <h1 className="text-white">Soujanya Nayak</h1>
            <a
              className="text-yellow-500"
              href="mailto:soujanya.nayak@shaurya-iitkgp.org"
            >
              soujanya.nayak@shaurya-iitkgp.org
            </a>
          </li>
          <li className="font-bold font-helvetica md:mb-4">
            <h1 className="text-white">SSVKSS Jyothiraditya</h1>
            <a
              className="text-yellow-500"
              href="mailto:jyothiraditya29@gmail.com"
            >
              jyothiraditya29@gmail.com
            </a>
          </li>
          <li className="font-bold font-helvetica md:mb-4">
            <h1 className="text-white">Shreya Mishra</h1>
            <a className="text-yellow-500" href="mailto:mshreya1210@gmail.com">
              mshreya1210@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div class="text-white">
        <h4 className="text-white font-bold font-bebas text-3xl mb-8">
          Follow us
        </h4>
        <div class="flex gap-8">
          <a href="https://www.facebook.com/shauryaiitkgp/">
            <i className="fab text-3xl text-white hover:text-yellow-500 fa-facebook-f"></i>
          </a>

          <a href="https://www.instagram.com/shaurya.iitkgp/">
            <i className="fab text-3xl text-white hover:text-yellow-500 fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/shaurya-iit-kharagpur/">
            <i className="fab text-3xl text-white hover:text-yellow-500 fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
