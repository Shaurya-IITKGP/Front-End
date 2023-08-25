import React from "react";

//Importing routes
import { LandingPage, EventsPage, TeamsPage, SignUpPage, SignInPage, Portal } from "./routes";


//Importing External Libraries
import { Routes, Route } from "react-router-dom";

const RoutingPaths = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/events",
    component: <EventsPage />,
  },
  {
    path: "/teams",
    component: <TeamsPage />,
  },
  {
    path: "/signup",
    component: <SignUpPage/>
  },
  {
    path: "/signin",
    component: <SignInPage/>
  },
  {
    path: "/portal",
    component: <Portal/>
  },
];
function App() {
  return (
    <Routes>
      {RoutingPaths.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

export default App;
