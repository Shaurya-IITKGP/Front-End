import React, { forwardRef } from 'react'
import s from './About.module.css'
import  about_img from "../../assets/About_img_1.png";
import sp1 from "../../assets/sport-icon-clipart-7-removebg-preview1.png"
import sp2 from "../../assets/sport-icon-clipart-7-removebg-preview2.png"
import sp3 from "../../assets/sport-icon-clipart-7-removebg-preview3.png"



const About = () => {
  return (
    <>
   
    <div className={s.about_main}>
        <h1 className={s.about_head}>ABOUT US</h1>
        
        <div className={s.about_flex}>
        
        <p className={s.about_p }>Lorem34 sfgyug h dhfiuhihidhiuhu dh idh hi hidshfihdhiuh hduds hciudhu hdiu shfuid hiu iudh suifhdiuhui  jsdvhviuh sidhiou iufhiud hh aiuhudsi fiu gug iud fiuui giud iu dfhkhviulhvubv i fdiubjhbvbyu iuduhiu dhviud hvi iudh viudbuv gud dh viuhiudh viudhiuv hs  sdhfdiuhviushi dh iuh fiusdhigvkpodfn ovjo hvi hxiuvihvh  hvicvn v hini vj vf 89 9u 9  9 9fh  h988h nkjvnkjvkjvkjjgoo bhbiu b kjnk0vidf09 v89y 98rh 898hg8 fhvmfvij0i0 vhiof nvih fivhj09fvj09jfv9 hxin jcjvn oih 899vxlkvnkjcvbjc hviocx jjvnhoi;cvj; icjih zihv kzhvk zuhv kuzh iuvuiuzcgviuhzkugudshv uxiuvhchbiuvin oiydiufhdsiu gv ojfdviodfvj oo   odvjoij oj cojo jvoj ovhiv lllil vohvzbu vd v89 8h v xv vnnvihv9fu89y v09f 9 f89vh hvhih9 vhvxcvnkcvorem34 kefhiasu hfe sufhu  fshi dh si h asidsn hadoooo ISnoi ojfodji ogodfjiod ji gfo fdgij efknsnk fjzs soij oifj ozdifjhO FDhfhofho  oHD OS ohfdhuzs psum dolor sit amet consectetur adipisicing elit. Id maxime dolorem numquam autem distinctio labore voluptatibus assumenda corrupti aspernatur namfknkn atiuth odio, tempora voluptatem voluptate doloremque, reprehenderit quo veniam dicta repellendus. Blanditiis, obcaecatihbi.</p>
        
      
        </div>
    </div>
    <div className={s.about_img}>
      <img className='mt-20 ml-80 w-72 h-24' src={sp1} alt="" />
      <img className='mt-20 w-72 h-24' src={sp2} alt="" />
      <img className='mt-20 w-72 h-24' src={sp3} alt="" />
    </div>
    </>
  )
};
export default About

