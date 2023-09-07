import React from 'react';
import "./TeamsPage.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFacebook} from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';

import Anushka from "../../assets/coreHeadAnushka-Singh.jpg";
import Prashant from "../../assets/coreHeadprashant-tripathi.jpg";
import Vaibhav from "../../assets/coreHeadVaibhav-Joshi.jpg";
import Siddharth from "../../assets/coreHeadSiddharth-Sabhari-Shankar.jpg";
import Priyanshu from "../../assets/Priyanshu-Shaw.jpg";
import Jatin from "../../assets/Jatin-Motwani.jpeg";
import Aditya from "../../assets/Aditya-G-Gaikwad.jpg";
import Neeraj from "../../assets/Neeraj-Patel.jpg";
import Soumyajeet from "../../assets/Somyajeet-Gupta-Chowdhury.jpg";




const coreHeads = [
  { name: 'Anushka Singh', role: 'Guest Reception and Accomodation Head', image: Anushka,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/' },
  { name: 'Prashant Tripathi', role: 'Publicity and Marketing Head', image: Prashant,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/' },
  { name: 'Vaibhav Joshi', role: 'Design Head', image: Vaibhav ,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/'},
  { name: 'Siddharth Sabhari', role: 'Publicity and Marketing Head', image: Siddharth ,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/'},
  { name: 'Priyanshu Shaw', role: 'Events Head', image: Priyanshu ,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/'},
  { name: 'Jatin Motwani', role: 'Publicity and Marketing Head', image: Jatin,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/'},
  { name: 'Aditya Gaikwad', role: 'Sponsorship Head', image: Aditya,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/' },
  { name: 'Neeraj Patel', role: 'Logistics Head', image: Neeraj ,furl :'https://www.facebook.com/' , lurl: 'https://in.linkedin.com/', iurl:'https://www.instagram.com/'},
];

const webHead =[
  {name:'Somyajeet Gupta' , role: 'Web Head', image: Soumyajeet},
]




const SpeakerBlock = ({ name, designation, image,furl,iurl,lurl}) => (
  <div className="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
    <div className="inner-box w-[400px]">
      <div className="image-box">
        <figure className="image">
          <img src={image} alt={name} />
          <div className="social-links">
          
                 <ul>
                    {/* <a className="mx-[30px] text-3xl " href={furl}><FontAwesomeIcon icon={faFacebook}/> </a>
                    <a className="mx-[30px] text-3xl" href={lurl}><FontAwesomeIcon icon={faLinkedin}/> </a>
                    <a className="mx-[30px] text-3xl" href={iurl}><FontAwesomeIcon icon={faInstagram}/> </a> */}
                 </ul>
      
          </div>
        </figure>
      </div>
      <div className="caption-box">
        <h4 className="name">
          <a href="#">{name}</a>
        </h4>
        <span className="designation">{designation}</span>
      </div>
    </div>
  </div>
);

const TeamSection = () => (
  <section className="speakers-section bg-black" >
    <div className="parallax-scene parallax-scene-2 anim-icons">
      <span data-depth="0.40" className="parallax-layer icon icon-circle-5"></span>
      <span data-depth="0.99" className="parallax-layer icon icon-circle-5"></span>
    </div>

    <div className="container mx-[25px]">
      <div className="sec-title light text-center">
        <span className="title" >Our Team</span>
        {/*<h2>Core Heads</h2>*/}
      </div>

      <div className="row " >
       
       
       {coreHeads.map((contact,index)=>(
        <SpeakerBlock
        name={contact.name}
        image={contact.image}
        designation={contact.role}
        key={index}
        furl={contact.furl}
        lurl={contact.lurl}
        iurl={contact.iurl}
        />
       ))}

     


        {webHead.map((contact,index)=>(
                <SpeakerBlock
                name={contact.name}
                image={contact.image}
                designation={contact.role}
                key={index}
                furl={contact.furl}
                lurl={contact.furl}
                iurl={contact.iurl}
                />
              ))}

       
      </div>
    </div>
  </section>
);

export default TeamSection;
