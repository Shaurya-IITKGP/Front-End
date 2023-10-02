import React from "react";
const EventRegistration = () => {
  return (
    <>
    
      <div className="flex flex-col items-center justify-center py-4 px-4  w-full text-white">
        <div
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 min-[1024px]:w-[104%]   "
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl mb-4 capitalize">
          Player Details-Cricket(Men)
        </h2>
          <div className="">
            <div className="">Player 1</div>
            <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-4">
              {/* <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  
                  className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                /> */}
              <div className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400">
                Ratan Kumar
              </div>
              {/* <input
              type="text"
              placeholder="Enter Roll Number"
              name="rollNo"
              className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            /> */}
              <div className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400">
                22EC10067
              </div>
              {/* <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            /> */}
              <div className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400">
                Ratanbhwekj@gmail.com
              </div>
              {/* <input
              type="tel"
              placeholder="Enter Phone Number"
              name="phone"
              className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            /> */}
              <div className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-400">
                222-111-9988-992
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventRegistration;
