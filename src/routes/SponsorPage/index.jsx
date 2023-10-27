import Jindal from "../../assets/logos/Jindal_Steel_Logo.png";
import KKR from "../../assets/logos/KKR_Logo.png";
import PB from "../../assets/logos/PB_Logo.png";
import Decathlon from "../../assets/logos/Decathlon_Logo.png";
import GB from "../../assets/logos/GB_Logo.png";
import Aava from "../../assets/logos/Aava_Logo.png";
import ABC from "../../assets/logos/ABC_Logo.png";
import TBS from "../../assets/logos/TBS_Logo.png";
import Aawhan from "../../assets/logos/Aawhan_Logo.png";
import Edugraph from "../../assets/logos/edugraph_Logo.png";
import RD from "../../assets/logos/RD_Logo.png";
import TKB from "../../assets/logos/TKB_Logo.png";
import ONT from "../../assets/logos/ONT_Logo.png";
import ICF from "../../assets/logos/ICF_Logo.png";
import STAG from "../../assets/logos/logo17.png";
import KAF from "../../assets/logos/KAF_Logo.png";
import Dainik from "../../assets/logos/Dainik_Logo.png";
import Coal from "../../assets/logos/Coal_Logo.png";





const SponsorPage = () => {
  

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-[2.5rem] font-bold mb-6 text-white font-badger tracking-wider ">
       SPONSORS
      </h2>
      <p className="text-xl max-w-[60rem] px-10 mx-auto font-mont mb-16 text-white">
      We extend our heartfelt thanks to our previous sponsors for their invaluable support in making our event a success. Their dedication to promoting sports and education has been instrumental. We look forward to continued collaboration and welcome new partners to join us in shaping the future of sports at our institution.
      </p>


      {/* Title Sponsors */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Title Sponsor</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.coalindia.in/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={Coal}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Coal India
            </h2>
          </div>
          
          {/* Add more Title Sponsors as needed */}
        </div>
      </div>

      {/* Co-Title Sponsors */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Co-Title Sponsor</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.kkr.in/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={KKR}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Kolkata Knight Riders
            </h2>
          </div>
        
        </div>
      </div>
      {/* Premier Partner */}
      <div className="mx-auto max-w-screen-lg mb-2">
        <h2 className="text-1.5xl font-bold text-white mb-4">Premier Partner</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.adityabirlacapital.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={ABC}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Aditya Birla Capital
            </h2>
          </div>
        </div>
        </div>


      {/* Corporate  Sponsors */}
      <div  className="flex flex-wrap justify-center">
      


      
      <div className="mx-auto max-w-screen-lg mb-4">
        <h2 className="text-1.5xl font-bold text-white mb-4">Corporate Sponsor</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.jindalsteelpower.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={Jindal}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Jindal Steel
            </h2>
          </div>
          </div>
      </div>
          
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-1.5xl font-bold text-white mb-4">Corporate Sponsor</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.pokerbaazi.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={PB}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Poker Baazi
            </h2>
          </div>

          {/* Add more Hydration Sponsors as needed */}
        </div>
      </div>


      {/* Major Partner */}
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-1.5xl font-bold text-white mb-4">Major Partner</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.stag.in/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={STAG}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Stag
            </h2>
          </div>
        </div>
      </div>

      {/* Sports Partner */}
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-1.5xl font-bold text-white mb-4">Sports Partner</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.decathlon.in/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={Decathlon}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Decathlon
            </h2>
          </div>
          
        </div>
        
      </div>

      {/* Corporate  Sponsors */}
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-1.5xl font-bold text-white mb-4">Energy Partner</h2>
        <div className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.glucovita.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={GB}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Glucovita Bolts
            </h2>
          </div>
          </div>
          </div>

          <div className="mx-auto max-w-screen-lg">
        <h2 className="text-1.5xl font-bold text-white mb-4">Hydration Partner</h2>
        <div  className="flex justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.aavawater.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={Aava}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Aava
            </h2>
          </div>

          {/* Add more Hydration Sponsors as needed */}
        </div>
      </div>
      </div>

      {/* Corporate  Sponsors */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Media Partners</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.thebusinessscan.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={TBS}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              The Business Scan
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.aahwahan.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={Aawhan}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Aahwaan 
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.telegraphindia.com/edugraph" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={Edugraph}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Edu Graph
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.rd.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={RD}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Reader's Digest
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://thekolkatabuzz.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={TKB}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              The Kolkata Buzz
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.odishanewstimes.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={ONT}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Orissa Times
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://indiacollegefest.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={ICF}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              India College Fest
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://www.knowafest.com/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={KAF}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Know a Fest
            </h2>
          </div>

          <div className="relative mb-6 transform hover:scale-105 transition-transform">
            <a href="https://epaper.navajyoti.net/" target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-20 h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img
                  src={Dainik}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">
              Dainik Navjyoti
            </h2>
          </div>

          {/* Add more Hydration Sponsors as needed */}
        </div>
      </div>

      


    </div>
  );
};

export default SponsorPage;
