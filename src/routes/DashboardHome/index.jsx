import React from "react";
import DashboardLayout from "../../components/Dashboard";
import { useNavigate } from "react-router-dom";

const colors = {
  athletics: "#22c55e",
  badminton: "#22d3ee",
  basketball: "#eab308",
  cricket: "#22c55e",
  chess: "#22d3ee",
  football: "#eab308",
  tabletennis: "#22c55e",
  tennis: "#22d3ee",
  volleyball: "#eab308",
  weightlifting: "#22c55e",
  powerlifting: "#22d3ee",
};
export default function DashboardProfile() {
  return (
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  );
}

function DashboardCard({ sportName, nPlayers, color, price }) {
  console.log(color);
  const navigate = useNavigate();
  return (
    <div
      className={`p-4 hover:bg-[#f97316] border-[#f97316] bg-[#0003] backdrop-blur-md sm:max-w-[18rem] w-full rounded-xl`}
    >
      <h3 className="text-2xl font-bold mb-3">{sportName}</h3>
      <p className="mb-4">Players Registered: {nPlayers}</p>
      <button
        onClick={() => {
          let route =
            "/dashboard/" + sportName.split(" ").join("").toLowerCase();
          navigate(route);
        }}
        bg-blue-800
        className="bg-white w-full text-black px-4 py-3 rounded-lg"
      >
        Player Details
      </button>
    </div>
  );
}

function DashboardHome() {
  return (
    <>
      <div className="h-full w-full">
        <h2 className="text-white md:text-[2.5rem] text-[1.5rem] mb-8 text-center font-badger font-[3rem] tracking-wider">
          DASHBOARD
        </h2>
        <div className="justify-center text-white flex gap-12 flex-wrap ">
          {Object.keys(colors).map((sport) => (
            <DashboardCard sportName={sport} color={colors[sport]} />
          ))}
        </div>
      </div>
    </>
  );
}
