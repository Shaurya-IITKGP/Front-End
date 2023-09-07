import React,{useState , useEffect} from 'react'
import s from './LiveScore.module.css'
import shaurya_logo from '../../assets/shauya22-.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import axios from 'axios'


import { realdata} from './images'


const Menu = () => (
  <>
    <div className="  text-white">
      <div className="">
        <h1 className="my-2    ">
          <a href="#">Home</a>
        </h1>
        <h1 className="my-2   ">
          <a href="#">Events</a>
        </h1>
      </div>
      <div className="">
        <h1 className="my-2 ">
          <a href="#">Sponsors</a>
        </h1>

        <h1 className="my-2  ">
          <a href="#">Team</a>
        </h1>
      </div>
     
    </div>
  </>
);



    


const LiveScore = () => {
 

  
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  const [data1,setData1]=useState(0);
  const url = `https://script.googleusercontent.com/macros/echo?user_content_key=Prtv6SO3a4CVP98E0TJepqz76OnXOnw88SFf33j6AjGiOG6aXdSPBfncnaMuZSkZoHh2_XJme4pkqH1rFp_u-kx8ZyhyCNhpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNLFKtS2-df8m68T5AVxpMKuRxQAfv1oY0KW0It1AwBGCyYLikaw1jZAXoSH9qRXUvgfJwp_Q0mUdCeRzjo07ZqdJoCw8JvXDg&lib=MtI573RzNEd2Mq5yXTS9sek-cTyyxtNUY`;

  axios.get(url).then((response) => {
    setData1(response.data);
  }).catch((error) => {
    console.error('Error fetching data:', error);
  });

  
  return (
    <>




    <div className={"flex bg-black  text-orange-500  "}>
      <div className="flex items-center justify-between  w-full">
        <div>
      
          <h1>
            <img className={"w-20 ml-12 mb-2" + s.logo1} src={shaurya_logo} alt="" />
          </h1>
        </div>
        <div
          className={"flex gap-16 items-center font-mono font-semibold pr-10"}
        >
          <div className='flex'>
          
              <input  className={s.searchInput}  type="text" placeholder='Search your sports' />
              
              </div>
             
         
          <div id='lp_navbar_head' className={"my-6  hover:text-white hidden md:block "}>
            <a href="#">EVENTS</a>
          </div>
          <div id='lp_navbar_head' className={"my-6 hover:text-white hidden md:block "}>
            <a href="#">SPONSORS</a>
          </div>
          <div id='lp_navbar_head' className={"my-6  hover:text-white hidden md:block"}>
            <a href="#">TEAM</a>
          </div>
      

          
        </div>
      </div>
      <div className={"absolute top-0 right-0 mt-7 " + s.hammenu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && <Menu />}
      </div>
    </div>
  
    
 



  
 


    <div className={s.lp_background_color}>
  
<div  className={s.lpmainpage}>
<div className={s.search_Game_Categories}>
  <h1 className='ml-2 mt-4 text-3xl text-white'>Game Categories</h1>


  <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
  
  {realdata.map((item) => (
           <button  className><img
              className='w-[120px] inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            </button>
          ))}
                 </div>
                 <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
      <div className='flex' >
     
      <h1 className={s.lp_liveScore_Heading}>RESULTS
        <div className={s.lp_pastmatches_inside}>
          
           <div className={ s.lp_matchespast_scores}>
             <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
             <h1 className='mt-2 '>{data1.data ? <p>{data1.data[3].college} :</p> : null}</h1>
              <h1 className='mt-2'>{data1.data ? <p>{data1.data[3].score}</p> : null}</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>{data1.data ? <p>{data1.data[1].college} :</p> : null}</h1>
              <h1 className='mt-2'>{data1.data ? <p>{data1.data[1].score}</p> : null}</h1>
              </div>
              </div>

              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>{data1.data ? <p>{data1.data[2].college} :</p> : null}</h1>
              <h1 className='mt-2'>{data1.data ? <p>{data1.data[2].score}</p> : null}</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>{data1.data ? <p>{data1.data[1].college} :</p> : null}</h1>
              <h1 className='mt-2'>{data1.data ? <p>{data1.data[1].score}</p> : null}</h1>
              </div>

           

              </div>

              <div className={ s.lp_matchespast_scores}>
             
           
              <div className={ s.lp_matchespast_scores}>
             
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
              </div>
              

              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
            
              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>CollegeA:</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
            </div>
            <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
            </div>
            </div>
            <div className={ s.lp_matchespast_scores}>
            <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
            </div>
            <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
            </div>
            
            </div>
             
             
          


       </div>
       
      </h1>

      <h1 className={s.lp_liveScore_Heading}>Live Scores
          <div className={s.lp_livescore_inside }>

      
          <div className={ s.lp_matchespast_scores}>
             <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
                <h1 className='mt-2 '>College A :</h1>
                <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
              <div className={ s.lp_matchespast_scores}>
             <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
                <h1 className='mt-2 '>College A :</h1>
                <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
              <div className={ s.lp_matchespast_scores}>
             <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
                <h1 className='mt-2 '>College A :</h1>
                <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
              <div className={ s.lp_matchespast_scores}>
             <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
             <h1 className='mt-2 '>{data1.data ? <p>{data1.data[1].college} :</p> : null}</h1>
              <h1 className='mt-2'>{data1.data ? <p>{data1.data[1].score}</p> : null}</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>{data1.data ? <p>{data1.data[1].college} :</p> : null}</h1>
              <h1 className='mt-2'>{data1.data ? <p>{data1.data[2].score}</p> : null}</h1>
              </div>
              </div>
              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>{data1.data ? <p>{data1.data[4].college} :</p> : null}</h1>
              <h1 className='mt-2'>{data1.data ? <p>{data1.data[0].score}</p> : null}</h1>
              </div>
              </div>

              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
                <h1 className='mt-2 '>College B :</h1>
                <h1 className='mt-2'>1</h1>
              </div>
              </div>

              <div className={ s.lp_matchespast_scores}>
              <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College A :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
                <h1 className='mt-2 '>College B :</h1>
                <h1 className='mt-2'>1</h1>
              </div>
              </div>

              <div className={ s.lp_matchespast_scores}>
             <div className='mt-4 flex justify-evenly mr-2 text-2xl'>
                <h1 className='mt-2 '>College A :</h1>
                <h1 className='mt-2'>1</h1>
              </div>
              <div className=' flex justify-evenly mr-2 text-2xl'>
              <h1 className='mt-2 '>College B :</h1>
              <h1 className='mt-2'>1</h1>
              </div>
              </div>
            </div>
            

            
      </h1>


      </div>
</div>

</div>

   


</div>




 

</>
    
      
    
  )

  }

export default LiveScore
