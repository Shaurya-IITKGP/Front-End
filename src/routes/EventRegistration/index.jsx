import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import EVENT_DATA from "../../CardData/EventData.jsx";
import { useAuth } from "../../AppContext/AppContext.jsx";



import Loader from 'react-spinner-loader';
import { Spinner } from "@chakra-ui/react";
// import 'react-spinner-loader/dist/index.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EventRegistration = () => {
  const { eventName, eventType } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const EVENT = useMemo(() => {
    return EVENT_DATA.find(
      (event) => event.name == eventName && event.category == eventType,
    );
  }, [eventName, eventType]);

  const minTeamSize = useMemo(() => {
    return EVENT.min_players;
  }, [EVENT]);

  const maxTeamSize = useMemo(() => {
    return EVENT.max_players;
  }, [EVENT]);

  const [teamMembers, setTeamMembers] = useState([
    { name: "", rollNo: "", email: "", phone: "" },
  ]);

  useEffect(() => {
    setTeamMembers(
      Array.from({ length: minTeamSize }, () => ({
        ...{ name: "", rollNo: "", email: "", phone: "" },
      })),
    );
  }, [minTeamSize]);

  const handleAddMember = () => {
    if (teamMembers.length < maxTeamSize) {
      setTeamMembers([
        ...teamMembers,
        { name: "", rollNo: "", email: "", phone: "" },
      ]);
    }
  };

  const handleRemoveMember = (index) => {
    if (teamMembers.length > minTeamSize && teamMembers.length <= maxTeamSize) {
      const updatedTeamMembers = [...teamMembers];
      updatedTeamMembers.splice(index, 1);
      setTeamMembers(updatedTeamMembers);
    }
  };

  const handleSubmit = async () => {
    if (
      teamMembers.length >= minTeamSize &&
      teamMembers.length <= maxTeamSize
    ) {
      if (
        teamMembers.every(
          (member) =>
            member.name.trim() !== "" &&
            member.rollNo.trim() !== "" &&
            member.email.trim() !== "" &&
            member.phone.trim() !== "",
        )
      ) {
        try {
          setLoading(true);
          const response = await axios.post(
            `${BASE_URL}/api/team/register`,
            {
              eventId: EVENT.id,
              players: teamMembers,
            },
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            },
          );

          if (response.status === 200) {
            setTeamMembers([{ name: "", rollNo: "", email: "", phone: "" }]);
            setLoading(false);
            navigate("/events");
          } else if (response.status === 400) {
            setLoading(false);
            alert("Bad Request:", response?.data?.message);
            setTeamMembers([{ name: "", rollNo: "", email: "", phone: "" }]);
          } else {
            setLoading(false);
            alert(
              "Some Error Occured, please try again or contact the respective point of contact",
            );
            setTeamMembers([{ name: "", rollNo: "", email: "", phone: "" }]);
          }
        } catch (error) {
          if (error.response) {
            if (error.response.status === 400) {
              setLoading(false);
              alert("Bad Request:", error?.response?.data?.message);
            } else {
              setLoading(false);
              alert(
                "Some Error Occured, please try again or contact the respective point of contact",
              );
            }
          } else {
            setLoading(false);
            alert(
              "Some Error Occured, please try again or contact the respective point of contact",
            );
          }
          setTeamMembers([{ name: "", rollNo: "", email: "", phone: "" }]);
        }
      } else {
        setLoading(false);
        alert(
          "Please fill in all team member details (Name, Roll Number, Email, and Phone Number)",
        );
      }
    } else {
      setLoading(false);
      alert(`Team size should be between ${minTeamSize} and ${maxTeamSize}`);
    }
  };

  const handleInputChange = (index, event) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index][event.target.name] = event.target.value;
    setTeamMembers(updatedTeamMembers);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className="flex flex-col items-center justify-center py-4 px-4 h-full w-full bg-black text-white">
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-2xl mb-4 capitalize">
          Event Registration - {`${EVENT.name} (${EVENT.category})`}
        </h2>
        <div className="">
          {teamMembers.map((member, index) => (
            <React.Fragment key={index}>
              <div className="">Player {index + 1}</div>
              <motion.div
                key={index}
                className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-4"
                variants={itemVariants}
              >
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={member.name}
                  onChange={(e) => handleInputChange(index, e)}
                  className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Enter Roll Number"
                  name="rollNo"
                  value={member.rollNo}
                  onChange={(e) => handleInputChange(index, e)}
                  className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={member.email}
                  onChange={(e) => handleInputChange(index, e)}
                  className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={member.phone}
                  onChange={(e) => handleInputChange(index, e)}
                  className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
                <motion.button
                  onClick={() => handleRemoveMember(index)}
                  className="p-2 w-[100px] bg-red-500 text-white rounded-lg hover:bg-red-600"
                  variants={itemVariants}
                >
                  Remove
                </motion.button>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4">
          {teamMembers.length < maxTeamSize && (
            <motion.button
              onClick={handleAddMember}
              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-4"
              variants={itemVariants}
            >
              Add Team Member
            </motion.button>
          )}

          <motion.button
            onClick={handleSubmit}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            variants={itemVariants}
          >
            {loading ?  <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='red.500'
  size='xl'
/> : "Submit" }
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventRegistration;
