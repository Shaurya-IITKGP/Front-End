import React from "react";

//Importing routes
import { LandingPage, EventsPage, TeamsPage, SignUpPage } from "./routes";


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
