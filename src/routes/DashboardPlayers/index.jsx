import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../components/Dashboard";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { AppContext } from "../../AppContext/AppContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function DashboardPlayers() {
  return (
    <>
      <DashboardLayout>
        <PlayerDetails />
      </DashboardLayout>
    </>
  );
}

function PlayerDetails() {
  const { sport } = useParams();
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AppContext);

  useEffect(() => {
    const onCollegeLogin = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/college/${user.id}/events/${sport}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        );

        setTeamData(response?.data?.data || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    onCollegeLogin();
  }, []);

  return (
    <>
      <div className="p-10 h-screen">
        <h1 className="text-[2rem] text-center tracking-wider font-badger mb-8 text-white capitalize">
          Team Details
        </h1>

        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  ID
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Roll Number
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Phone Number
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Event Category
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {teamData.map((player) => (
                <tr className="bg-white">
                  <td className="p-3 font-bold text-blue-500 hover:underline text-sm whitespace-nowrap">
                    {player.id}
                  </td>
                  <td className="p-3 text-sm font-bold text-gray-700 whitespace-nowrap">
                    {player.name}
                  </td>
                  <td className="p-3 text-sm font-bold text-gray-700 whitespace-nowrap">
                    {player.rollNo}
                  </td>
                  <td className="p-3 text-sm font-bold text-gray-700 whitespace-nowrap">
                    {player.phone}
                  </td>
                  <td className="p-3 text-sm font-bold text-gray-700 whitespace-nowrap">
                    {player.eventCategories.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {teamData.map((player) => (
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-blue-500 text-sm font-bold hover:underline">
                {player.id}
              </div>
              <div className="text-base font-bold text-gray-700">
                {player.name}
              </div>
              <div className="text-base mb-2 font-bold text-gray-600">
                {player.eventCategory}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {player.rollNo}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {player.phone}
              </div>
            </div>
          ))}
          {/* <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #1001
                </a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  Shipped
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div className="text-sm font-medium text-black">$200.00</div>
          </div>
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #1002
                </a>
              </div>
              <div className="text-gray-500">10/10/2021</div>
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                  Canceled
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              Kring New Fit office chair, mesh + PU, black
            </div>
            <div className="text-sm font-medium text-black">$200.00</div>
          </div> */}
        </div>
      </div>
    </>
  );
}
