import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import EVENT_DATA from "../../CardData/EventData.json";

const EventRegistration = () => {
  const { eventName, eventType } = useParams();

  for (let i = 0; i < EVENT_DATA.length; i++) {
    if (EVENT_DATA[i].name === eventName) {
      eventdata = EVENT_DATA[i];
    }
  }
  const minTeamSize = 2;
  const maxTeamSize = 5;

  const [teamMembers, setTeamMembers] = useState([
    { name: "", rollNumber: "", email: "", phoneNumber: "" },
  ]);

  const handleAddMember = () => {
    if (teamMembers.length < maxTeamSize) {
      setTeamMembers([
        ...teamMembers,
        { name: "", rollNumber: "", email: "", phoneNumber: "" },
      ]);
    }
  };

  const handleRemoveMember = (index) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers.splice(index, 1);
    setTeamMembers(updatedTeamMembers);
  };

  const handleSubmit = () => {
    if (
      teamMembers.length >= minTeamSize &&
      teamMembers.length <= maxTeamSize
    ) {
      if (
        teamMembers.every(
          (member) =>
            member.name.trim() !== "" &&
            member.rollNumber.trim() !== "" &&
            member.email.trim() !== "" &&
            member.phoneNumber.trim() !== ""
        )
      ) {
        console.log(teamMembers);
        alert("Registration successful");
      } else {
        alert(
          "Please fill in all team member details (Name, Roll Number, Email, and Phone Number)"
        );
      }
    } else {
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
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2"
        variants={itemVariants}
      >
        <h2 className="text-2xl mb-4">Team Registration</h2>
        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                name="rollNumber"
                value={member.rollNumber}
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
                name="phoneNumber"
                value={member.phoneNumber}
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
          ))}
        </div>
        <div className="mt-4">
          <motion.button
            onClick={handleAddMember}
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            variants={itemVariants}
          >
            Add Team Member
          </motion.button>
          <motion.button
            onClick={handleSubmit}
            className="p-2 ml-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            variants={itemVariants}
          >
            Submit
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventRegistration;
