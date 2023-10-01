import Zeenews from "../../assets/logos/logo1.png";
import Sportskeeda from "../../assets/logos/logo2.png";
import FrankRoss from "../../assets/logos/logo3.png";
import Dominoes from "../../assets/logos/logo4.png";
import RedFM from "../../assets/logos/logo5.png";
import DainikJagran from "../../assets/logos/logo6.png";
import Subway from "../../assets/logos/logo7.png";
import SBL from "../../assets/logos/logo8.png";
import SBI from "../../assets/logos/logo9.png";
import Nivia from "../../assets/logos/logo10.png";
import Victor from "../../assets/logos/logo12.png";
import NPCIL from "../../assets/logos/logo13.png";
import Tecnifibre from "../../assets/logos/logo14.png";
import DLF from "../../assets/logos/logo16.png";
import STAG from "../../assets/logos/logo17.png";
import Fadooengineers from "../../assets/logos/logo18.png";
import Bingo from "../../assets/logos/logo19.png";
import MMT from "../../assets/logos/logo20.png";
import HDFC from "../../assets/logos/logo21.png";
import ITC from "../../assets/logos/logo22.png";
import MMF from "../../assets/logos/logo23.png";
import TATA from "../../assets/logos/logo24.png";
import Wipro from "../../assets/logos/logo25.png";
import Indigo from "../../assets/logos/logo26.png";
import Reliance from "../../assets/logos/logo27.png";
import Spykar from "../../assets/logos/logo28.png";
import Cipla from "../../assets/logos/logo29.png";
import Cello from "../../assets/logos/logo30.png";
import Bisleri from "../../assets/logos/logo32.png";
import Entupe from "../../assets/logos/logo33.png";
import BSNL from "../../assets/logos/logo34.png";
import JBL from "../../assets/logos/logo35.png";
import VRL from "../../assets/logos/logo36.png";
import Nestle from "../../assets/logos/logo37.png";
import Yonex from "../../assets/logos/logo38.png";


const SponsorPage = () => {
  const sponsors = [
    {  logo: Zeenews, name: "Zee News",  },
    {  logo: FrankRoss, name: "Frank Ross ", },
    {  logo: Dominoes, name: "Dominoes Pizza",  },
    {  logo: RedFM, name: "Red FM", },
    {  logo: DainikJagran, name: " Dainik Jagran",  },
    {  logo: Subway, name: "Subway",  },
    {  logo: SBL, name: "SBL",  },
    {  logo: SBI, name: "State Bank of India", },
    {  logo: Nivia, name: "Nivia", },
    {  logo: Victor, name: "Victor",  },
    {  logo: NPCIL, name: "NPCIL",  },
    {  logo: Tecnifibre, name: "Tecnifibre", },
    {  logo: DLF, name: "DLF",  },
    {  logo: STAG, name: "STAG", },
    {  logo: Fadooengineers, name: "Fadoo Engineers", },
    {  logo: Bingo, name: "Bingo", },
    {  logo: MMT, name: "Make My Trip", },
    {  logo: HDFC, name: "HDFC Bank", },
    {  logo: ITC, name: "ITC", },
    {  logo: MMF, name: "Mark My Fest", },
    {  logo: TATA, name: "TATA",  },
    {  logo: Wipro, name: "Wipro", },
    {  logo: Indigo, name: "Indigo Airlines", },
    {  logo: Reliance, name: "Reliance", },
    {  logo: Spykar, name: "Spykar", },
    {  logo: Cipla, name: "Cipla",  },
    {  logo: Cello, name: "Cello", },
    {  logo: Bisleri, name: "Bisleri",  },
    {  logo: Sportskeeda, name: "Sports Keeda",  },
    {  logo: Entupe, name: "Entupe Technologies",  },
    {  logo: BSNL, name: "BSNL", },
    {  logo: JBL, name: "JBL", },
    {  logo: VRL, name: "VRL Logistics",},
    {  logo: Nestle, name: "Nestle", },
    {  logo: Yonex, name: "Yonex", },


  ];

  return (
    <div className="container mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-6 text-white">Previous Sponsors</h2>
      <p className="text-2xl font-bold mb-16 text-white">We extend our heartfelt thanks to our previous sponsors for their invaluable support in making our past events a success. Their dedication to promoting sports and education has been instrumental. We look forward to continued collaboration and welcome new partners to join us in shaping the future of sports at our institution</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {sponsors.map((sponsor, index) => (
          <div className="relative mb-6 transform hover:scale-105 transition-transform" key={index}>
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <div className="bg-black h-48 w-48 mx-auto mb-4 relative shadow-lg rounded-lg overflow-hidden">
                <img src={sponsor.logo} className="w-full h-full object-cover" alt="" />
              </div>
            </a>
            <h2 className="text-xl font-bold mb-2 opacity-100 text-white">{sponsor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SponsorPage




