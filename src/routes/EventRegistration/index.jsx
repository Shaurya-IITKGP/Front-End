import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EventRegistration = () => {
  const { eventName } = useParams();
  const maxTeamSize = 5; 
  const minTeamSize = 2; 
  /*
  todo - make an eventname to max-min player mapping
  */

  const [teamMembers, setTeamMembers] = useState(['']); 

  const handleAddMember = () => {
    if (teamMembers.length < maxTeamSize) {
      setTeamMembers([...teamMembers, '']);
    }
  };

  const handleRemoveMember = (index) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers.splice(index, 1);
    setTeamMembers(updatedTeamMembers);
  };

  const handleSubmit = () => {
    //max-min check
    if (teamMembers.length >= minTeamSize && teamMembers.length <= maxTeamSize) {
      // non-null check
      if (teamMembers.every((member) => member.trim() !== '')) {
        console.log(teamMembers);
        /*
        todo - 
        send data to the backend
        */
       alert("ok")
      } else {
        alert('Please fill in all team member IDs');
      }
    } else {
      alert(`Team size should be between ${minTeamSize} and ${maxTeamSize}`);
    }
  };

  const handleInputChange = (index, event) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index] = event.target.value;
    setTeamMembers(updatedTeamMembers);
  };

  return (
    <div className="flex flex-col items-center py-[10vh] bg-black text-white min-h-screen p-8">
      <h2 className="text-2xl mb-4">{eventName} Team Registration</h2>
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter Shaurya ID"
              value={member}
              onChange={(e) => handleInputChange(index, e)}
              className="p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button
              onClick={() => handleRemoveMember(index)}
              className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={handleAddMember}
          className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Add Team Member
        </button>
        <button
          onClick={handleSubmit}
          className="p-2 ml-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EventRegistration;
