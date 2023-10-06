import React, { useContext } from "react";
import "https://kit.fontawesome.com/a81368914c.js";
import { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner, useDisclosure } from "@chakra-ui/react";
import ErrorModal from "../../components/ErrorModal";
import { BsArrowRight } from "react-icons/bs";
import { AppContext } from "../../AppContext/AppContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState({ title: "", text: "" });

  const { login, user } = useContext(AppContext);

  const onCollegeLogin = async (values, resetValues) => {
    if (!loading) {
      try {
        setLoading(true);

        if (values.username.length != 12) {
          setMessage({
            text: "Please enter a valid college id",
            title: "Error",
          });
          onOpen();
          resetValues();
          setLoading(false);
          return;
        }

        if (values?.password?.length <= 0) {
          setMessage({
            text: "Please enter password",
            title: "Error",
          });
          onOpen();
          resetValues();
          setLoading(false);
          return;
        }

        const response = await axios.post(`${BASE_URL}/api/college/login`, {
          username: values?.username,
          password: values?.password,
        });

        // Check the HTTP status code here
        if (response.status === 200) {
          let userData = response?.data?.data;
          let token = response?.data?.token;

          login(userData, token);

          resetValues();
          setLoading(false);
        } else {
          setMessage({
            text: response.data.message,
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
              <form className="max-w-[20rem]" onSubmit={handleSubmit}>
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

                <div className="flex justify-center">
                  {loading ? (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="#0EA5E9"
                      size="lg"
                    />
                  ) : (
                    <>
                      <button
                        disabled={loading}
                        type="submit"
                        className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden transition-all transition-[0.5s] group border-[#0EA5E9] 
                      border-2 text-[1.2rem] text-[#0EA5E9] uppercase cursor-pointer rounded-[25px] duration-300"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full text-white bg-[#0EA5E9] group-hover:translate-x-0 ease">
                          <BsArrowRight className="text-3xl" />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-[#0EA5E9] transition-all duration-300 transform group-hover:translate-x-full ease">
                          LOGIN
                        </span>
                        <span className="relative invisible">LOGIN </span>
                      </button>
                    </>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
