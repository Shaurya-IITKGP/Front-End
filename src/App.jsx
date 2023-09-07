import React from "react";

//Importing routes
import {
  LandingPage,
  EventsPage,
  TeamsPage,
  SignUpPage,
  ComingSoon,
  OptionToLogin,
} from "./routes";

//Importing External Libraries
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";

const RoutingPaths = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "events",
    component: <EventsPage />,
  },
  // {
  //   path: "/teams",
  //   component: <TeamsPage />,
  // },
  {
    path: "signup",
    component: <OptionToLogin />,
  },
  {
    path: "signup/player",
    component: <SignUpPage />,
  },
  {
    path: "*",
    component: <ComingSoon />,
  },
];
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {RoutingPaths.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
