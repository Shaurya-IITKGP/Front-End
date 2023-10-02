import React from "react";
import DashboardLayout from "../../components/Dashboard";
import { useNavigate } from "react-router-dom";

export default function DashboardProfile() {
  return (
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  );
}

function DashboardCard({ sportName, nPlayers, price }) {
  const navigate = useNavigate();
  return (
    <div className="p-4 bg-blue-800 max-w-[18rem] rounded-xl">
      <h3 className="text-2xl font-bold mb-3">{sportName}</h3>
      <p className="mb-2">Players Registered: {nPlayers}</p>
      <button
        onClick={() => {
          let route = "/dashboard/" + sportName.split(" ").join("").toLowerCase();
          navigate(route);
        }}
        className="bg-white text-black px-4 py-3 rounded-lg"
      >
        Player Details
      </button>
    </div>
  );
}

function DashboardHome() {
  return (
    <>
      <div className="h-full overflow-scroll w-full bg-gray-900 px-10 py-10">
        <h2 className="text-white text-[2.5rem] mb-8">DASHBOARD</h2>
        <div className="text-white flex gap-4 flex-wrap ">
          <DashboardCard sportName={"Table Tennis"} />
        </div>
      </div>
    </>
  );
}
