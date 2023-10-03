import React, { useContext, useEffect, useState } from "react";
import DashboardLayout from "../../components/Dashboard";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContext";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function DashboardProfile() {
  return (
    <DashboardLayout>
      <DashboardHome />
    </DashboardLayout>
  );
}

function DashboardCard({ sport }) {
  const navigate = useNavigate();

  return (
    <div
      className={`p-4 hover:bg-[#f97316] border-[#f97316] bg-[#0003] backdrop-blur-md sm:max-w-[18rem] w-full rounded-xl`}
    >
      <h3 className="text-2xl font-bold mb-3 capitalize">{sport.sportName}</h3>
      <p className="mb-4">
        <span className="font-bold">Players Registed</span> : {sport.playerCount}
      </p>
      <button
        onClick={() => {
          let route =
            "/dashboard/" + sport.sportName.split(" ").join("").toLowerCase();
          navigate(route);
        }}
        className="bg-white w-full text-black px-4 py-3 rounded-lg"
      >
        Player Details
      </button>
    </div>
  );
}

function DashboardHome() {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AppContext);
  useEffect(() => {
    const onCollegeLogin = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/college/${user.id}/events`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        console.log(response.data.data.sports);
        setRegisteredEvents(response?.data?.data?.sports || []);
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
      <div className="h-full w-full">
        <h2 className="text-white md:text-[2.5rem] text-[1.5rem] mb-8 text-center font-badger font-[3rem] tracking-wider">
          DASHBOARD
        </h2>
        <div className="justify-center text-white flex gap-12 flex-wrap ">
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#0EA5E9"
              size="lg"
            />
          ) : (
            <>
              {registeredEvents?.length == 0 ? (
                <h3 className="text-white text-center font-bold text-xl">
                  You have not registered in any of the events yet!
                </h3>
              ) : (
                <>
                  {registeredEvents.map((sport) => {
                    return <DashboardCard sport={sport} />;
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
