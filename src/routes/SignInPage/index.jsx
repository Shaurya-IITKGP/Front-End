import React from "react";
import avatar from "./assets/avatar.svg";
import bg from "./assets/bg.svg";
import wave from "./assets/wave.png";
import ball from "./assets/soccer.svg";
import college from "./assets/school.png";
import bk from "./assets/bk.png";

import "https://kit.fontawesome.com/a81368914c.js";
import { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AppContext/AppContext";
import { Spinner, useDisclosure } from "@chakra-ui/react";
import ErrorModal from "../../components/ErrorModal";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState({ title: "", text: "" });

  const { login, user } = useAuth();

  const onCollegeLogin = async (values, resetValues) => {
    if (!loading) {
      try {
        setLoading(true);

        if (values.username.length != 9) {
          setMessage({
            text: "Please enter a valid college id",
            title: "Error",
          });
          onOpen();
          resetValues();
          setLoading(false);
          return;
        }

        const response = await axios.post(`${BASE_URL}/api/college/login`, {
          username: values.username,
          password: values.password,
        });

        // Check the HTTP status code here
        if (response.status === 200) {
          let userData = response?.data?.data;
          let token = response?.data?.token;

          login(userData, token);

          resetValues();
          setLoading(false);
          navigate("/events");
        } else {
          setMessage({
            text: "Something went wrong. Please Try Again",
            title: "Failed",
          });
          onOpen();
          resetValues();
          setLoading(false);
        }
      } catch (error) {
        setMessage({
          text: "Something went wrong. Please Try Again",
          title: "Failed",
        });
        onOpen();
        resetValues();
        setLoading(false);
      }
    }
  };

  return (
    <>
      <img
        className="wave box-border m-0 p-0 overflow-hidden fixed h-full z-[-1] left-0 bottom-0 max-[900px]:hidden"
        src={bk}
      />
      <ErrorModal isOpen={isOpen} onClose={onClose} message={message} />
      <div className="container box-border m-0 p-0 overflow-hidden w-screen h-[100%] grid grid-cols-[repeat(2,1fr)] gap-28 px-8 py-0 max-[1050px]:gap-20 max-[900px]:grid-cols-[1fr] pt-9">
        <div className="img flex items-center justify-end max-[900px]:hidden">
          {/* <img
            loading="lazy"
            src={ball}
            className="w-[500px] max-[1000px]:w-[400px] animate-bounce w-[250px] mr-[10rem] mt-[5rem] overflow-hidden"
          /> */}
        </div>
        <div className="login-content flex min-[900px]:ml-[5rem] justify-start items-center max-[900px]:justify-center">
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={async (values, { resetForm }) => {
              onCollegeLogin(values, resetForm);
            }}
          > 
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                className="w-[360px] max-[1000px]:w-[290px]"
                onSubmit={handleSubmit}
              >
                {/* <img
                  loading="lazy"
                  src={college}
                  className="h-[100px] block m-auto"
                /> */}
                <h2 className="title text-center text-[#ffff] uppercase text-[2.9rem] mx-0 my-[15px]  max-[1000px]:text-[2.4rem] max-[1000px]:mx-0 max-[1000px]:my-2">
                  College Login
                </h2>
                <div className="relative z-0 mb-8">
                  <input
                    type="text"
                    id="username"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[] focus:outline-none focus:ring-0 focus:border-[orange] peer"
                    placeholder=" "
                    onChange={handleChange}
                    value={values.username}
                  />
                  <label
                    htmlFor="username"
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[orange] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    College ID
                  </label>
                </div>

                <div className="relative z-0 mb-8">
                  <input
                    type="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[orange] focus:outline-none focus:ring-0 focus:border-[orange] peer"
                    placeholder=" "
                    onChange={handleChange}
                    value={values.password}
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[orange] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className=""
                >
                  {loading ? (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="#E36914"
                      size="lg"
                    />
                  ) : (
                    <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Login</span>
<span class="relative invisible">Login</span>
</a>
                  )}
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
