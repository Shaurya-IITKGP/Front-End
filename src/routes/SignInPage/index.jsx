import React from "react";
import avatar from "./assets/avatar.svg";
import bg from "./assets/bg.svg";
import wave from "./assets/wave.png";
import "https://kit.fontawesome.com/a81368914c.js";
import { useState } from "react";
import { useEffect } from "react";
import { Formik } from "formik";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../AppContext/AppContext";
import { Navigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const RegisterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { login, user } = useAuth();

  useEffect(() => {
    console.log(location.pathname);
  }, []);

  const onCollegeLogin = async (values, resetValues) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/college/sign-in`,
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // Check the HTTP status code here
      if (response.status === 200) {
        resetValues();
        let userData = response.data.data;
        let token = response.data.token;
        console.log(userData, token);
        login(userData, token);
        navigate("/events");
      } else if (response.status === 400) {
        console.log("Bad Request:", response.data.message);
        resetValues();
        // Handle the 400 response here
      } else {
        console.log("Error:", response);
        resetValues();
        // Handle other non-200 responses here
      }
    } catch (error) {
      if (error.response) {
        // Axios has caught a response with an HTTP status code
        if (error.response.status === 400) {
          console.log("Bad Request:", error.response.data.message);
          // Handle the 400 response here
        } else {
          console.log("Error:", error.response);
          // Handle other non-200 responses here
        }
      } else if (error.request) {
        // Axios made the request, but no response was received (e.g., network error)
        console.log("Network Error:", error.message);
        // Handle network errors here
      } else {
        // Something else went wrong
        console.log("Error:", error.message);
      }
      resetValues();
    }
  };

  const onAddPlayer = async (values, resetValues) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/college/sign-in`,
        {
          username: values.user,
          password: values.pass,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // Check the HTTP status code here
      if (response.status === 200) {
        resetValues();
        let userData = response.data.data;
        let token = response.data.token;
        console.log(userData, token);
        login(userData, token);
        navigate("/events");
      } else if (response.status === 400) {
        console.log("Bad Request:", response.data.message);
        resetValues();
        // Handle the 400 response here
      } else {
        console.log("Error:", response);
        resetValues();
        // Handle other non-200 responses here
      }
    } catch (error) {
      if (error.response) {
        // Axios has caught a response with an HTTP status code
        if (error.response.status === 400) {
          console.log("Bad Request:", error.response.data.message);
          // Handle the 400 response here
        } else {
          console.log("Error:", error.response);
          // Handle other non-200 responses here
        }
      } else if (error.request) {
        // Axios made the request, but no response was received (e.g., network error)
        console.log("Network Error:", error.message);
        // Handle network errors here
      } else {
        // Something else went wrong
        console.log("Error:", error.message);
      }
      resetValues();
    }
  };

  return (
    <>
      <img
        className="wave box-border m-0 p-0  overflow-hidden fixed h-full z-[-1] left-0 bottom-0 max-[900px]:hidden"
        src={wave}
      />
      <div className="container box-border m-0 p-0 overflow-hidden w-screen h-[100%] grid grid-cols-[repeat(2,1fr)] gap-28 px-8 py-0 max-[1050px]:gap-20 max-[900px]:grid-cols-[1fr] pt-9">
        <div className="img flex items-center justify-end max-[900px]:hidden">
          <img src={bg} className="w-[500px] max-[1000px]:w-[400px]" />
        </div>
        <div className="login-content flex min-[900px]:ml-[12rem] justify-start items-center max-[900px]:justify-center">
          {location.pathname == "/register/player" ? (
            <Formik
              initialValues={{
                name: "",
                rollNo: "",
                email: "",
                phone: "",
                password: "",
                gender: "",
                collegeId: "",
              }}
              onSubmit={async (values, { resetForm }) => {
                onAddPlayer(values, resetForm);
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
                  <img src={avatar} className="h-[100px] block m-auto" />
                  <h2 className="title text-center text-[#ffff] uppercase text-[2.9rem] mx-0 my-[15px]  max-[1000px]:text-[2.4rem] max-[1000px]:mx-0 max-[1000px]:my-2">
                    {location.pathname == "/register/college"
                      ? "College Login"
                      : location.pathname == "/register/player"
                      ? "Player Registration"
                      : null}
                  </h2>

                  <div className="relative z-0 mb-8">
                    <input
                      type="text"
                      id="name"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.name}
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative z-0 mb-8">
                    <input
                      type="text"
                      id="rollNo"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.rollNo}
                    />
                    <label
                      htmlFor="rollNo"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Roll Number
                    </label>
                  </div>

                  <div className="relative z-0 mb-8">
                    <input
                      type="text"
                      id="email"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.email}
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative z-0 mb-8">
                    <input
                      type="text"
                      id="phone"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.phone}
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone
                    </label>
                  </div>

                  <div className="relative z-0 mb-8">
                    <label className="text-lg text-white mb-2">Apply for</label>
                    <div className="flex">
                      <div className="flex items-center mr-4">
                        <input
                          id="male"
                          type="radio"
                          value="Male"
                          name="gender"
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="male"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Male Category
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="female"
                          type="radio"
                          value="Female"
                          name="gender"
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="female"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Female Category
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-0 mb-8">
                    <input
                      type="text"
                      id="collegeId"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.collegeId}
                    />
                    <label
                      htmlFor="collegeId"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      College ID
                    </label>
                  </div>

                  <div className="relative z-0 mb-8">
                    <input
                      type="text"
                      id="password"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.password}
                    />
                    <label
                      htmlFor="password"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="btn block w-full h-[50px] bg-[linear-gradient(to_right,#32be8f,#38d39f,#32be8f)] bg-[200%] text-[1.2rem] text-white uppercase cursor-pointer transition-[0.5s] mx-0 my-4 rounded-[25px] border-[none] hover:bg-right"
                    value="Login"
                  />
                </form>
              )}
            </Formik>
          ) : location.pathname == "/register/college" ? (
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
                  <img src={avatar} className="h-[100px] block m-auto" />
                  <h2 className="title text-center text-[#ffff] uppercase text-[2.9rem] mx-0 my-[15px]  max-[1000px]:text-[2.4rem] max-[1000px]:mx-0 max-[1000px]:my-2">
                    {location.pathname == "/register/college"
                      ? "College Login"
                      : location.pathname == "/register/player"
                      ? "Player Registration"
                      : null}
                  </h2>
                  <div className="relative z-0 mb-8">
                    <input
                      type="text"
                      id="username"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.username}
                    />
                    <label
                      htmlFor="username"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      College ID
                    </label>
                  </div>

                  <div className="relative z-0 mb-8">
                    <input
                      type="password"
                      id="password"
                      className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      onChange={handleChange}
                      value={values.password}
                    />
                    <label
                      htmlFor="password"
                      className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="btn block w-full h-[50px] bg-[linear-gradient(to_right,#32be8f,#38d39f,#32be8f)] bg-[200%] text-[1.2rem] text-white uppercase cursor-pointer transition-[0.5s] mx-0 my-4 rounded-[25px] border-[none] hover:bg-right"
                    value="Login"
                  />
                </form>
              )}
            </Formik>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
