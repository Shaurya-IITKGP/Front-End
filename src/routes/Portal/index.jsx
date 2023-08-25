import React from "react";

import "https://kit.fontawesome.com/64d58efce2.js";
import { useState } from "react";

const Portal = () => {
   const [serviceList, setServiceList] = useState([{ service: "" }]);
  console.log(serviceList);
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };


  return (
    <>
      <div className="cont relative w-full min-h-screen bg-neutral-50 overflow-hidden flex items-center justify-center p-8">
        <div className="contact-form overflow-y-scroll scroll-smooth bg-[#1abc9c] relative w-[40rem] h-[40rem] rounded-3xl">
          <form
            action="index.html"
            autoComplete="off"
            className="z-10 overflow-y-scroll relative  px-[2.2rem] py-[2.3rem]"
          >
            <h3 className="title text-white font-medium text-2xl leading-none mt-[-0.5rem] mb-[1.7rem]">
              Registration Portal
            </h3>
            {serviceList.map((singleService, index) => (
              <div key={index} className=" input-container relative mx-0 my-4">
                <div className="first-division">
                  <label
                    className="absolute inline -translate-y-2/4 text-neutral-50 text-[1rem] font-normal pointer-events-none z-[1000] transition-[0.5s] px-[0.4rem] py-0 left-[15px] top-[25%]"
                    htmlFor=""
                  >
                    Shaurya ID
                  </label>
                  <input
                    type="text"
                    name="service"
                    id="service"
                    value={singleService.service}
                    className="input w-[28rem] border-neutral-50 text-white font-medium text-[0.95rem] tracking-[0.5px] transition-[0.3s] px-[1.2rem] py-[0.6rem] rounded-[25px] border-2 border-solid outline-none bg-transparent"
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                  />
                  {serviceList.length !== 1 && (
                    <input
                      type="submit"
                      value="Remove"
                      className="add-btn bg-white block border-neutral-50 text-[0.95rem] text-[#1abc9c] leading-none cursor-pointer transition-[0.3s] ml-[29rem] mt-[-2.7rem] px-[1.3rem] py-[0.6rem] rounded-[25px] border-2 border-solid hover:bg-transparent hover:text-[#fff]"
                      onClick={() => handleServiceRemove(index)}
                    />
                  )}
                  {serviceList.length - 1 === index &&
                    serviceList.length < 15 && (
                      <input
                        type="submit"
                        value="Add"
                        className="add-btn bg-white block border-neutral-50 text-[1rem] text-[#1abc9c] leading-none cursor-pointer transition-[0.3s] mt-[0.7rem] px-[1.3rem] py-[0.6rem] rounded-[25px] border-2 border-solid hover:bg-transparent hover:text-[#fff]"
                        onClick={handleServiceAdd}
                      />
                    )}
                  <div className="second-division">
                    {/* {serviceList.length !== 1 && (
                    <input
                    type="submit"
                    value="Remove"
                    className="add-btn bg-white block border-neutral-50 text-[0.95rem] text-[#1abc9c] leading-none cursor-pointer transition-[0.3s] ml-[29rem] mt-[-2.7rem] px-[1.3rem] py-[0.6rem] rounded-[25px] border-2 border-solid hover:bg-transparent hover:text-[#fff]"
                    onClick={() => handleServiceRemove(index)}
                    />
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
};

export default Portal;
