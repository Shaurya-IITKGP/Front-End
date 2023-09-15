import { Heading } from "@chakra-ui/react";
import TEAM_DATA from "../../CardData/TEAM_DATA";
import { TeamCard } from "../../components/TeamCard";

const TeamsPage = () => {
  return (
    <div className="py-10 px-10 w-full">
      <div className="grid md:grid-cols-3 mb-20 gap-8 justify-items-center">
        <Heading className="md:col-span-3 -mb-4 text-3xl text-white text-bold text-center">
          EXECUTIVE HEADS
        </Heading>
        {TEAM_DATA["EXECUTIVE HEADS"]
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((person) => (
            <TeamCard
              designation={person?.designation}
              name={person?.name}
              image={
                person?.image || "https://i.ibb.co/JC4skS0/team-animate.jpg"
              }
            />
          ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 justify-items-center">
        <Heading className="md:col-span-3 -mb-4 text-3xl text-white text-bold text-center">
          HEADS
        </Heading>
        {TEAM_DATA["HEADS"]
          .sort((a, b) =>
            a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          )
          .map((person) => (
            <TeamCard
              designation={person?.designation}
              name={person?.name}
              image={
                person?.image || "https://i.ibb.co/JC4skS0/team-animate.jpg"
              }
            />
          ))}
      </div>
    </div>
  );
};

export default TeamsPage;
