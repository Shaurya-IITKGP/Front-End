import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import EVENT_DATA from "../../CardData/EventData.jsx";
import { useAuth } from "../../AppContext/AppContext.jsx";

import { Spinner, useDisclosure } from "@chakra-ui/react";
import ErrorModal from "../../components/ErrorModal/index.jsx";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BsPlusLg } from 'react-icons/bs'
import { BsFillPlusCircleFill } from 'react-icons/bs'




// import 'react-spinner-loader/dist/index.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const EventRegistration = () => {
  const { eventName, eventType } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ title: "", text: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [registered, setRegisterd] = useState(false);
  const navigate = useNavigate();

  const EVENT = useMemo(() => {
    return EVENT_DATA.find(
      (event) => event.name == eventName && event.category == eventType
    );
  }, [eventName, eventType]);

  const minTeamSize = useMemo(() => {
    return EVENT.min_players;
  }, [EVENT]);

  const maxTeamSize = useMemo(() => {
    return EVENT.max_players;
  }, [EVENT]);

  const [teamMembers, setTeamMembers] = useState([
    { name: "", rollNo: "", email: "", phone: "", gender: EVENT.gender },
  ]);

  useEffect(() => {
    setTeamMembers(
      Array.from({ length: minTeamSize }, () => ({
        ...{ name: "", rollNo: "", email: "", phone: "" },
      }))
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
            member.phone.trim() !== ""
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
            }
          );

          if (response.status === 200) {
            setTeamMembers([{ name: "", rollNo: "", email: "", phone: "" }]);
            setLoading(false);
            setMessage({
              title: "Success",
              text: "Team Registered Successfully!",
            });
            setRegisterd(true);
            onOpen();
          } else {
            setTeamMembers([{ name: "", rollNo: "", email: "", phone: "" }]);
            setLoading(false);
            setMessage({
              title: "Error",
              text: "Some Error Occured, please try again or contact the respective point of contact",
            });
            setRegisterd(false);
            onOpen();
          }
        } catch (error) {
          setTeamMembers([{ name: "", rollNo: "", email: "", phone: "" }]);
          setLoading(false);
          setMessage({
            title: "Error",
            text: "Some Error Occured, please try again or contact the respective point of contact",
          });
          setRegisterd(false);
          onOpen();
        }
      } else {
        setLoading(false);
        setMessage({
          title: "Error",
          text: "Please fill in all team member details (Name, Roll Number, Email, and Phone Number)",
        });
        setRegisterd(false);
        onOpen();
      }
    } else {
      setLoading(false);
      setMessage({
        title: "Error",
        text: `Team size should be between ${minTeamSize} and ${maxTeamSize}`,
      });
      setRegisterd(false);
      onOpen();
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
    <motion.div className="flex flex-col items-center justify-center py-4 px-4 h-full w-full text-white">
      <motion.div
        className="bg-zinc-800 bg-linear-gradient(#141e30, #2a6c56) p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <ErrorModal
          isOpen={isOpen}
          onClose={() => {
            if (registered) {
              navigate("/events");
              onClose();
            } else {
              onClose();
            } a
          }}
          message={message}
        />
        <div className="text-4xl mb-4  text-center capital uppercase text-green-500">
          Event Registration
        </div>

        <h2 className="text-2xl mb-4  text-center capital uppercase text-green-500">
          {`${EVENT.name} (${EVENT.category})`}
        </h2>
        <div className="">
          {teamMembers.map((member, index) => (
            <React.Fragment key={index}>
              <div className="mb-[20px] text-green-500">Player {index + 1}</div>
              <motion.div
                key={index}
                className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-4"
                variants={itemVariants}
              >

                <div className="relative z-0 mb-8">
                  <input
                    type="text"
                    id={"name-" + index}
                    name="name"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[] focus:outline-none focus:ring-0 focus:border-[orange] peer"
                    placeholder=" "
                    onChange={(e) => handleInputChange(index, e)}
                    value={member.name}
                  />
                  <label
                    htmlFor={"name-" + index}
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[orange] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Player Name
                  </label>
                </div>
                <div className="relative z-0 mb-8">
                  <input
                    type="text"
                    id={"rollNo-" + index}
                    name="rollNo"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[] focus:outline-none focus:ring-0 focus:border-[orange] peer"
                    placeholder=" "
                    onChange={(e) => handleInputChange(index, e)}
                    value={member.rollNo}
                  />
                  <label
                    htmlFor={"rollNo-" + index}
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[orange] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Roll No
                  </label>
                </div>
                <div className="relative z-0 mb-8">
                  <input
                    type="text"
                    id={"email-" + index}
                    name="email"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[] focus:outline-none focus:ring-0 focus:border-[orange] peer"
                    placeholder=" "
                    onChange={(e) => handleInputChange(index, e)}
                    value={member.email}
                  />
                  <label
                    htmlFor={"email-" + index}
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[orange] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
                <div className="relative z-0 mb-8">
                  <input
                    type="text"
                    id={"phone-" + index}
                    name="phone"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[] focus:outline-none focus:ring-0 focus:border-[orange] peer"
                    placeholder=" "
                    onChange={(e) => handleInputChange(index, e)}
                    value={member.phone}
                  />
                  <label
                    htmlFor={"phone-" + index}
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[orange] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone No
                  </label>
                </div>

                
                <motion.button
                  onClick={() => handleRemoveMember(index)}
                  className="p-2 w-[100px] hover:text-red-600 duration-[0.5s] ease-in-out"
                  variants={itemVariants}
                >
                  <RiDeleteBin2Fill className="inline mr-[5px]" />Remove
                </motion.button>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
        <div className="mt-4 ">
          {teamMembers.length < maxTeamSize && (
            <motion.button
              onClick={handleAddMember}
              className="text-white mr-4 hover:text-yellow-600 duration-[0.5s] ease-in-out"
              variants={itemVariants}
            >

              <BsPlusLg className="inline mr-[5px]" />Add Player
            </motion.button>
          )}

          <motion.button
            onClick={handleSubmit}
            className=""
            variants={itemVariants}
          >
            {loading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="red.500"
                size="xl"
              />
            ) : (
              <a href="#_" className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group">
                <span className="absolute inset-0 flex items-center justify-center w
                .................0-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">SUBMIT</span>
                <span className="relative invisible">SUBMIT</span>
              </a>
            )}

          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventRegistration;
