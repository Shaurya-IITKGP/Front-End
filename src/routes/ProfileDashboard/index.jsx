import React from 'react';
import { useAuth } from '../../AppContext/AppContext';

const ProfileDashboard = () => {
  const { user } = useAuth()
  const events = [{ name: "cricket", date: "13/10/2023" }, { name: "athletics", date: "14/10/2023" }]
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* User Info */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center md:w-1/3 flex items-center flex-col">
            <div className="w-32 h-32 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {/* SVG Path for User Icon */}
              </svg>
            </div>
            <h1 className="text-3xl font-semibold mb-2">{user.college}</h1>
            <p className="text-gray-400 text-sm mb-4">Shaurya ID: {user.id}</p>
          </div>

          {/* Demarcation Line */}
          <div className="bg-gray-600 w-0.5 h-full hidden md:block"></div>

          {/* Registered Events */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl md:w-2/3">
            <h2 className="text-xl font-semibold mb-4">Registered Events</h2>
            <ul>
              {events.map((event, index) => (
                <li key={index} className="mb-2">
                  <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        {/* SVG Path for Event Icon */}
                      </svg>
                    </div>
                    <div className="text-lg">{event.name}</div>
                    <div className="text-gray-400">{event.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
