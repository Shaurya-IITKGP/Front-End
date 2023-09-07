import { TeamCard } from "../../components/TeamCard";

const TeamsPage = () => {
  return (
    <div className="grid pb-20 justify-items-center md:grid-cols-3 gap-10 px-12 py-10">
      <TeamCard
        designation={"Web Head"}
        name={"Name"}
        image={"https://i.ibb.co/JC4skS0/team-animate.jpg"}
      />
      <TeamCard
        designation={"Name"}
        name={"Design Head"}
        image={"https://i.ibb.co/JC4skS0/team-animate.jpg"}
      />
      <TeamCard
        designation={"Name"}
        name={"Core Head"}
        image={"https://i.ibb.co/JC4skS0/team-animate.jpg"}
      />
    </div>
  );
};

export default TeamsPage;
