import React from "react";
import "./style.css";
import { useState } from "react";

const Portal = () => {
  const [serviceList, setServiceList] = useState([{ player: "" }]);
  return (
    <>
      <div className="cont relative w-full min-h-screen bg-neutral-50 overflow-hidden flex items-center justify-center p-8">
        <div className="contact-form overflow-y-auto scroll-smooth bg-[#1abc9c] relative w-[60rem] h-[50rem] rounded-3xl">
          <form
            autoComplete="off"
            onsubmit="return false"
            className="z-10 overflow-y-auto relative  px-[2.2rem] py-[2.3rem]"
          >
            <h3 className="title text-white font-medium text-2xl leading-none mt-[-0.5rem] mb-[3rem]">
              Registration Portal
            </h3>
            {serviceList.map((singleService, index) => (
              <InputItem
                setServiceList={setServiceList}
                serviceList={serviceList}
                index={index}
                singleService={singleService}
                key={index}
              />
            ))}
          </form>
        </div>
      </div>
    </>
  );
};

function InputItem({ singleService, serviceList, setServiceList, index }) {
  const [isActive, setIsActive] = useState(false);
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

  const handleServiceSubmit = () => {};

  const handleClick = (e, index) => {
    // 👇️ toggle isActive state on click

    setIsActive((current) => !current);
    const ele = document.querySelector(".first-division input");
  };

  // .first-divison:focus-withn label {

  // }
  return (
    <>
      <div key={index} className=" input-container relative mx-0 my-4">
        <div className="first-division">
          <input
            type="text"
            name="player"
            id="service"
            value={singleService.service}
            className={
              "input w-[48rem] border-neutral-50 text-white font-medium text-[0.95rem] tracking-[0.5px] transition-[0.3s] px-[1.2rem] py-[0.6rem] rounded-[25px] border-2 border-solid outline-none bg-transparent"
            }
            onClick={(e) => handleClick(e, index)}
            onChange={(e) => handleServiceChange(e, index)}
            required
          />
          <label
            className={
              "floating-label absolute inline -translate-y-2/4 text-neutral-50 text-[1rem] font-normal pointer-events-none z-[1000] transition-[0.5s] px-[0.4rem] py-0 left-[15px] top-[40%]"
            }
            htmlFor=""
          >
            Shaurya ID
          </label>
          {serviceList.length !== 1 && (
            <input
              type="submit"
              value="Remove"
              className="add-btn bg-white block border-neutral-50 text-[0.95rem] text-[#1abc9c] leading-none cursor-pointer transition-[0.3s] ml-[49rem] mt-[-2.1rem] px-[1.3rem] py-[0.6rem] rounded-[25px] border-2 border-solid hover:bg-transparent hover:text-[#fff]"
              onClick={() => handleServiceRemove(index)}
            />
          )}
        </div>
      </div>
      <div>
        {serviceList.length - 1 === index && serviceList.length < 15 && (
          <input
            type="submit"
            value="Add"
            className="add-btn bg-white  border-neutral-50 text-[1rem] text-[#1abc9c] leading-none cursor-pointer transition-[0.3s] mt-[0.1rem] px-[1.3rem] py-[0.6rem] rounded-[25px] border-2 border-solid hover:bg-transparent hover:text-[#fff]"
            onClick={handleServiceAdd}
          />
        )}
        {serviceList.length - 1 === index && serviceList.length < 16 && (
          <input
            type="submit"
            value="Submit"
            className="submit-btn bg-white border-neutral-50 text-[1rem] text-[#1abc9c] leading-none cursor-pointer transition-[0.3s] m-2 mt-[0.1rem] px-[1.3rem] py-[0.6rem] rounded-[25px] border-2 border-solid hover:bg-transparent hover:text-[#fff]"
            onClick={handleServiceSubmit}
          />
        )}
      </div>
    </>
  );
}

export default Portal;
