import React, { useState, useRef } from "react";
import EventModal from '../EventModal';

const EVENTS = [
  { name: "Athletics", rule:(<div style={{ fontSize: "14px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Number of players: Max of 2 participants for per event from each college. Each player can participate in not more than 3 events(except Relay).
      <p>Men's Events: 100m, 200m, 400m, 800m, 1500m, 4X100m, 4X400m, 110m, Hurdles, 400m Hurdles, Long Jump, High Jump, Triple Jump, Shotput, Hammer, Throw Javelin, Discuss Throw.</p>
      <p>Women's Events: 100m, 200m, 400m, 4X100m, 4X400m, Long Jump, High Jump, Shotput, Javelin, Discuss Throw.</p>
    </p>
    <li><strong>Individual Reg. per event: Rs.200(500 for 3 events)</strong></li>
    <li><strong> For Relay Per Head: Rs.100</strong></li>
    <li><strong>Prize money worth Rs.61,000</strong></li>
    <li><strong>Contact: Priyanshu- 9073808624</strong></li>
  </div>) , heroImage: "athletics2.jpg" },
  { name: "Badminton", rule: (<div style={{ fontSize: "14px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Matches will be played in best of three sets(each set of 21 points) format.</p>
    <p>Men: First Single/Second Single/ First Double/ Third Single/ Second Double</p>
    <p> Women: First Single/ Double/ Second Single</p>
    <h1>Number of Players</h1>
    <p>Men: Each college can have a max of 5 members in their team</p>
    <p>Women: Each college can have a max of 3 members in their team</p>
    <li><strong>Registration Fee per Head Rs.800 (M & W)</strong></li>
    <li><strong>Prize money worth Rs.28,500</strong></li>
    <li><strong>Contact: Rishi Dhoble- 9205704432</strong></li>
  </div>) , heroImage: "badminton2.jpg" },
  { name: "Basketball", rule: (<div style={{ fontSize: "16px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Each match will have 4 quarters of 10 minutes each (for both Men and Women).</p>
    <p>The format of the Tournament will be League cum Knockout.</p>
    <p> Number of players: Each team will have a maximum of 12 players.</p>
    <li><strong>Registration Fee per Head Rs.300 (M & W)</strong></li>
    <li><strong>Prize money worth Rs.56,000</strong></li>
    <li><strong>Contact: Priyanshu-9073808624</strong></li>
  </div>) , heroImage: "basketball2.jpg" },
  { name: "Chess", rule: (<div style={{ fontSize: "16px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Event format: Unrated Open Chess Mixed Tournament 
      <p>Matches will be played in the best of 7 rounds format</p>
      <p>Number of players: Each team can have a maximum of 6 players and a minimum of 4 players</p>
    </p>
    <li><strong>Registration Fee per Head Rs.300 (M & W)</strong></li>
    <li><strong>Prize money worth Rs.17,500</strong></li>
    <li><strong>Contact: Archie Aravati- 7024385271 </strong></li>
  </div>) , heroImage: "Chess2.jpg" },
  { name: "Cricket", rule:(<div style={{ fontSize: "20px" }}>
    <h1><strong>Rules:</strong></h1>
    <p> The format of the Tournament will be League cum Knockout</p>
    <p>Number of Overs: 15</p>
    <p>Number of Players: Each team will consist of 11+5 players</p>
    <li><strong>Registration Fee per Head Rs.750 (M)</strong></li>
    <li><strong>Prize money worth Rs.35,000</strong></li>
    <li><strong>Contact: Priyanshu-9073808624</strong></li>
  </div>) , heroImage: "Cricket2.jpg" },
  { name: "Football", rule: (<div>
    <h1><strong>Rules:</strong></h1>
    <p>The format of the Tournament will be League cum Knockout</p>
    <p>Numeber of Players: Each team will consist of 11+5 players</p>
    <li><strong>Registration Fee per Head Rs.750 (M)</strong></li>
    <li><strong>Prize money worth Rs.35,000</strong></li>
    <li><strong>Contact:Himanshu- 7348701571</strong></li>
  </div>) , heroImage: "Football2.jpg" },
  { name: "Hockey", rule: (<div>
    <h1><strong>Rules:</strong></h1>
    <p>Each match will have 4 quarters of 15 minutes each</p>
    <p>The format of the Tournament will be League cum Knockout</p>
    <p>Number of Players: Each team(men only) will have 11+5 players</p>
    <li><strong>Registration Fee per Head Rs.750 (M)</strong></li>
    <li><strong>Prize money worth Rs.35,000</strong></li>
    <li><strong>Contact: Nikhil Bharat- 7020096806</strong></li>
  </div>) , heroImage: "Hockey2.jpg" },
  { name: "Mr. Shaurya", rule: (<div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis eligendi commodi totam autem possimus dignissimos voluptatem modi perspiciatis odit debitis, porro nam blanditiis ab aut deserunt? Minus, perspiciatis totam.</p>
    <li>Venue:</li>
    <li>Fees:</li>
    <li>Time:</li>
    <li>Team Members required:</li>
  </div>) , heroImage: "MRShaurya2.jpg" },
  { name: "Powerlifting", rule: (<div>
    <h1><strong>Rules:</strong></h1>
    <p>Events Format: Individual</p>
    <p>There will be 3 events: Squat, Bench Press and Deadlift in the categories as listed below</p>
    <p>Men's Weight Categories: Upto 56 Kg, 57-62 Kg, 63-69 Kg, 70-77 Kg, Above 77 Kg</p>
    <li><strong>Rules:</strong></li>
    <li><strong>Prize money worth Rs.47,000</strong></li>
    <li><strong>Contact: Rishi Dhoble- 9205704432</strong></li>
  </div>) , heroImage: "Powelifting2.jpg" },
  { name: "Squash", rule: (<div style={{ fontSize: "15px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Matches will be played individually in a knockout format</p>
    <p>Men: Matches will be played in best-of-three sets(each set of 11 points) format till quarterfinals and best-of-five sets afterwards</p>
    <p>Men: Matches will be played in best-of-three sets(each set of 11 points) format till quarterfinals and best-of-five sets afterwards</p>
    <li><strong>Registration Fee per Head Rs.400 (M & W)</strong></li>
    <li><strong>Prize money worth Rs.25,000</strong></li>
    <li><strong>Contact: Archie Aravati- 7024385271 </strong></li>
  </div>) , heroImage: "Squash2.jpg" },
  { name: "Swimming", rule: (<div style={{ fontSize: "11px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Maximum of 2 participants for each event from a single college.Each player can participate in not more than 3 events(except Relay)</p>
    <p>Women's Events: Freestyle 50m,Freestyle 100m, Freestyle Relay 4X50, Breaststroke 50m, Backstroke 50m, Butterfly 50m, Medley Relay 4X50</p>
    <p>Men's Events: Freestyle 50m, Freestyle 100m, Freestyle 200m, Freestyle 1500m, Freestyle Relay 4X100, Breaststroke 50m, Breaststroke 100m, Breaststroke 200m, Backstroke 50m, Backstroke 100m, Backstroke 200m, Butterfly 100m, Butterfly 50m, Medley Relay 4X100, Individual Medley 200m.</p>
    <li><strong>Individual Reg. Per Head Rs.250 (500 if 3 events)</strong></li>
    <li><strong>For Relay Per Head Rs.100</strong></li>
    <li><strong>Prize money worth Rs. 54,000</strong></li>
    <li><strong>Contact: Nikhil Bharat- 7020096806</strong></li>
  </div>) , heroImage: "Swimming2.jpg" },
  { name: "Table Tennis", rule: (<div style={{ fontSize: "11px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Men: The Matches will be held on the basis of five singles</p>
    <p>Each Single shall be played on a best-of-five game's format with each game of 11 points. The Games will be played in ABC-XYZ format</p>
    <p>Women: The Matches will be held on the basis of two singles and one doubles</p>
    <p>Each Single shall be played on a best-of-five game's format with each game of 11 points. The Games will be played in AB-XY format</p>
    <p>Number of Players:</p>
    <p>Men: Maximum of 4 players in a team and minimum of 3 players</p>
    <p>Woen: Maximum of 3 players in a team and minimum of 2 players</p>
    <li><strong>Registration Fee per Head Rs.450 (M) & 400(W)</strong>
    </li>
    <li><strong>Prize money worth Rs.28,500</strong></li>
    <li><strong>Contact: Nikhil Bharat- 7020096806</strong></li>
  </div>) , heroImage: "TT2.jpg" },
  { name: "Tennis", rule: (<div style={{ fontSize: "14px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>Matches will be played in the best-of-three-sets format.</p>
    <p>The format will be League cum Knockout</p>
    <p>Order of Matches:</p>
    <p>Men: First Single/Double/Second Single</p>
    <p>Women: First Single/Double/Second Single</p>
    <p>Number of Players:</p>
    <p>Men: Each team will have a maximum of 4 players</p>
    <p>Women: Each team will have a maximum of 3 players</p>
    <li><strong>Registration Fee per Head Rs.900 (M) & 600(W)</strong></li>
    <li><strong>Prize money worth Rs.29,500</strong></li>
    <li><strong>Contact: Archie Aravati- 7024385271 </strong></li>
  </div>) , heroImage: "Tennis2.jpg" },
  { name: "Volleyball", rule: (<div style={{ fontSize: "14px" }}>
    <h1><strong>Rules:</strong></h1>
    <p>The Tournament shall be played on a League cum Knockout basis.</p>
    <p>The Matches will be played in the best of 5 sest format</p>
    <p>Number of Players:</p>
    <p>Men: Each team should have atleast 6 players and a maximum of 12 players</p>
    <p>Women: Each team should have atleast 6 players and a maximum of 12 players</p>
    <li><strong>Registration Fee per Head Rs.300 (M & W)</strong></li>
    <li><strong>Prize money worth Rs.56,000</strong></li>
    <li><strong>Contact:Himanshu- 7348701571</strong></li>
  </div>) , heroImage: "Volleyball2.jpg" },
  { name: "Weightlifting", rule: (<div>
    <h1><strong>Rules:</strong></h1>
    <p>Each team is allowed to enter at most 2 participants in each category</p>
    <p>Men's Weight Categories: Upto 56 Kg, 57-62 Kg, 63-69 Kg, 70-77 Kg, Above 77 Kg</p>
    <li><strong>Registration Fee Per Head Rs.400</strong></li>
    <li><strong>Prize money worth Rs.27,000</strong></li>
    <li><strong>Contact: Rishi Dhoble- 9205704432</strong></li>
  </div>) , heroImage: "Weightlifting2.jpg" },
];

const EventsCard = ({ event }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const currentEvent = EVENTS.find(item => item.name === event.name);

  const closeModalOnOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className="relative aspect-4/3">
      <div
        className="cursor-pointer w-full h-full absolute top-0 left-0"
        onClick={openModal}
      >
        <img
          className="w-full h-full object-cover hover:scale-105 duration-200"
          src={`/images/events/${event.name.toLowerCase()}.jpg`}
          alt={event.name}
        />
      </div>
      <h3 className="text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100">
        {event?.name}
      </h3>
      <EventModal
        isOpen={isModalOpen}
        onClose={closeModal}
        eventName={event.name}
        eventRule={currentEvent?.rule}
        heroImage={currentEvent?.heroImage}
        modalRef={modalRef}
      />
    </div>
  );
};

export default EventsCard;