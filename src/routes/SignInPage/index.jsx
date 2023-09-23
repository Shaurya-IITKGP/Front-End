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
  const [loading, setLoading] = useState(false);

  const { login, user } = useAuth();

  const onCollegeLogin = async (values, resetValues) => {
    try {
      if (values.username.length != 9) {
        alert("Please enter a valid college id");
        return resetValues();
      }
      // if (values.password.length != 10) { alert("Please enter the 10 character password provided"); return resetValues() }
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/api/college/login`, {
        username: values.username,
        password: values.password,
      });

      // Check the HTTP status code here
      if (response.status === 200) {
        resetValues();
        let userData = response.data.data;
        let token = response.data.token;
        login(userData, token);
        setLoading(false);
        navigate("/events");
      } else if (response.status === 400) {
        setLoading(false);
        alert("Bad Request:", response?.data?.message);
        resetValues();
        // Handle the 400 response here
      } else {
        setLoading(false);
        alert(
          "Some Error Occured, please try again or contact the respective point of contact",
        );
        resetValues();
        // Handle other non-200 responses here
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setLoading(false);
          alert("Bad Request:", error?.response?.data?.message);
        } else {
          setLoading(false);
          alert(
            "Some Error Occured, please try again or contact the respective point of contact",
          );
        }
      } else if (error.request) {
        setLoading(false);
        alert(
          "Some Error Occured, please try again or contact the respective point of contact",
        );
      } else {
        setLoading(false);
        alert(
          "Some Error Occured, please try again or contact the respective point of contact",
        );
      }
      resetValues();
    }
  };

  return (
    <>
      <img
        className="wave box-border m-0 p-0 overflow-hidden fixed h-full z-[-1] left-0 bottom-0 max-[900px]:hidden"
        src={wave}
      />
      <div className="container box-border m-0 p-0 overflow-hidden w-screen h-[100%] grid grid-cols-[repeat(2,1fr)] gap-28 px-8 py-0 max-[1050px]:gap-20 max-[900px]:grid-cols-[1fr] pt-9">
        <div className="img flex items-center justify-end max-[900px]:hidden">
          <img
            loading="lazy"
            src={bg}
            className="w-[500px] max-[1000px]:w-[400px]"
          />
        </div>
        <div className="login-content flex min-[900px]:ml-[12rem] justify-start items-center max-[900px]:justify-center">
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
                <img
                  loading="lazy"
                  src={avatar}
                  className="h-[100px] block m-auto"
                />
                <h2 className="title text-center text-[#ffff] uppercase text-[2.9rem] mx-0 my-[15px]  max-[1000px]:text-[2.4rem] max-[1000px]:mx-0 max-[1000px]:my-2">
                  College Login
                </h2>
                <div className="relative z-0 mb-8">
                  <input
                    type="text"
                    id="username"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[] focus:outline-none focus:ring-0 focus:border-[#32be8f] peer"
                    placeholder=" "
                    onChange={handleChange}
                    value={values.username}
                  />
                  <label
                    htmlFor="username"
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[#32be8f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    College ID
                  </label>
                </div>

                <div className="relative z-0 mb-8">
                  <input
                    type="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#32be8f] focus:outline-none focus:ring-0 focus:border-[#32be8f] peer"
                    placeholder=" "
                    onChange={handleChange}
                    value={values.password}
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#32be8f] peer-focus:dark:text-[#32be8f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="submit"
                  className="btn block w-full h-[50px] bg-[#32be8f] text-[1.2rem] text-white uppercase cursor-pointer transition-[0.5s] mx-0 my-4 rounded-[25px] border-[none] hover:bg-[#32be8fad]"
                  value={loading ? "Logging In" : "Login"}
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
