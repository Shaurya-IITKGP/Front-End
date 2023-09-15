import { Heading } from "@chakra-ui/react";
import TEAM_DATA from "../../CardData/TEAM_DATA";
import { TeamCard } from "../../components/TeamCard";

const TeamsPage = () => {
  return (
    <div className="py-10 px-10">
      <div className="grid md:grid-cols-3 mb-10 gap-8 justify-items-center">
        <Heading className="md:col-span-3 text-3xl text-white text-bold text-center">
          EXECUTIVE HEADS
        </Heading>
        {TEAM_DATA["EXECUTIVE HEADS"].map((person) => (
          <TeamCard
            designation={person?.designation}
            name={person?.name}
            image={person?.image || "https://i.ibb.co/JC4skS0/team-animate.jpg"}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 justify-items-center">
        <Heading className="md:col-span-3 text-3xl text-white text-bold text-center">
          HEADS
        </Heading>
        {TEAM_DATA["HEADS"].map((person) => (
          <TeamCard
            designation={person?.designation}
            name={person?.name}
            image={person?.image || "https://i.ibb.co/JC4skS0/team-animate.jpg"}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
