import React, { forwardRef } from 'react'
import s from './About.module.css'
import  about_img from "../../assets/About_img_1.png";
import sportsimg1 from "../../assets/sport-icon-clipart-7-removebg-preview1.png"
import sportsimg2 from "../../assets/sport-icon-clipart-7-removebg-preview2.png"
import sportsimg3 from "../../assets/sport-icon-clipart-7-removebg-preview3.png"
import Navbar from '../../components/Navbar/Navbar';



const About = () => {
  return (
    <>
   
   <div className=' h-screen bg-black'>

   
    <div className={s.about_main}>
        <h1 className={s.about_head}>ABOUT US</h1>
        
        <div className={s.about_flex}>
        
        <p className={s.about_p }>Shaurya is the annual inter-collegiate sports fest of IIT Kharagpur, which is held over a span of three days, in the month of October. It was started in the year 2008 with a vision of promoting sports culture, and providing a national platform for athletes and sportsmen. Shaurya witnessed four editions, in the years 2008, 2009, 2010 and 2012. The last edition witnessed the presence of some of India's eminent sports personalities like Deepika Kumari, Joydeep Karmakar, Subrata Bhattacharya and Charles Borromeo. Shaurya is coming back after a long time this year in the month of October.Their are many events including Cricket , Football , Volleyball , Basketball , Badminton , Chess , Athletics , etc. The event hosted teams from institutions across India. SSN Chennai, MERI Kolkata, CCET Chandigarh, NIT Trichy, St. Xaviers Kolkata, NIT Durgapur, BCET Durgapur were some of the prominent participating colleges, other than the host IIT Kharagpur. </p>
        
      
        </div>
    </div>
    <div className={s.about_img}>
      <img className='mt-20 ml-80 w-72 h-24' src={sportsimg1} alt="" />
      <img className='mt-20 w-72 h-24' src={sportsimg2} alt="" />
      <img className='mt-20 w-72 h-24' src={sportsimg3} alt="" />
    </div>
    </div>
    </>
  )
};
export default About

