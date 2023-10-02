import React from "react";
import avatar from "./assets/avatar.svg";
import bg from "./assets/bg.svg";
import wave from "./assets/wave.png";
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
      <ErrorModal isOpen={isOpen} onClose={onClose} message={message} />
      <div className="w-full flex items-center justify-center md:justify-end md:px-20">
        <div className="backdrop-blur-md sm:p-20 p-10 bg-[#0004] rounded-3xl">
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
                className="max-w-[20rem]"
                onSubmit={handleSubmit}
              >
                <h2 className="title font-badger tracking-[0.3rem] text-center text-[#ffff] uppercase sm:text-[3rem] text-[2rem] mb-8">
                  College Login
                </h2>
                <div className="relative z-0 mb-8">
                  <input
                    type="text"
                    id="username"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 appearance-none text-white border-gray-300 focus:outline-none focus:ring-0 focus:border-[#0EA5E9] peer font-helvetica tracking-wider"
                    placeholder=" "
                    onChange={handleChange}
                    value={values.username}
                  />
                  <label
                    htmlFor="username"
                    className="absolute text-xl text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0EA5E9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-helvetica font-bold"
                  >
                    College ID
                  </label>
                </div>

                <div className="relative z-0 mb-8">
                  <input
                    type="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 appearance-none text-white border-gray-300 focus:outline-none focus:ring-0 focus:border-[#0EA5E9] peer font-helvetica tracking-wider"
                    placeholder=" "
                    onChange={handleChange}
                    value={values.password}
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-xl text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0EA5E9] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-helvetica font-bold"
                  >
                    Password
                  </label>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="btn block w-full h-[50px] items-center flex justify-center border-[#0EA5E9] border-2 text-[1.2rem] text-[#0EA5E9] uppercase cursor-pointer transition-[0.5s] mx-0 my-4 rounded-[25px] border-[none] hover:text-white transition-all hover:bg-[#0EA5E9]"
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
                    "Login"
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
