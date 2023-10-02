import { Heading } from "@chakra-ui/react";
import TEAM_DATA from "../../CardData/TEAM_DATA";
import { TeamCard } from "../../components/TeamCard";

const TeamsPage = () => {
  return (
    <div className="py-10 px-10 w-full">
      <div className="grid md:grid-cols-3 mb-20 gap-8 justify-items-center">
        <h2 className="md:col-span-3 -mb-4 text-white text-[2.5rem] font-badger tracking-wider text-center">
          EXECUTIVE HEADS
        </h2>
        {TEAM_DATA["EXECUTIVE HEADS"]
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((person, index) => (
            <TeamCard
              designation={person?.designation}
              name={person?.name}
              image={
                person?.image || "https://i.ibb.co/JC4skS0/team-animate.jpg"
              }
              key={index}
              linkedin={person?.linkedin}
              facebook={person?.facebook}
              mail={person?.email}
              instagram={person?.instagram}
            />
          ))}
      </div>
      <div className="grid md:grid-cols-3 mb-20 gap-8 justify-items-center">
        <h2 className="md:col-span-3 -mb-4 text-white text-[2.5rem] font-badger tracking-wider text-center">
          STEERING COMMITTEE
        </h2>
        {TEAM_DATA["STEERING COMMITTEE"]
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((person, index) => (
            <TeamCard
              designation={person?.designation}
              name={person?.name}
              image={
                person?.image || "https://i.ibb.co/JC4skS0/team-animate.jpg"
              }
              key={index}
              linkedin={person?.linkedin}
              facebook={person?.facebook}
              mail={person?.email}
              instagram={person?.instagram}
            />
          ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 justify-items-center">
        <h2 className="md:col-span-3 -mb-4 text-white text-[2.5rem] font-badger tracking-wider text-center">
          HEADS
        </h2>
        {TEAM_DATA["HEADS"]
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((person, index) => (
            <TeamCard
              designation={person?.designation}
              name={person?.name}
              image={
                person?.image || "https://i.ibb.co/JC4skS0/team-animate.jpg"
              }
              key={index}
              linkedin={person?.linkedin}
              facebook={person?.facebook}
              mail={person?.email}
              instagram={person?.instagram}
            />
          ))}
      </div>
    </div>
  );
};

export default TeamsPage;
