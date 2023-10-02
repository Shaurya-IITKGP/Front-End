//Importing routes
import {
  LandingPage,
  EventsPage,
  TeamsPage,
  ComingSoon,
  SignInPage,
  SponsorPage,
} from "./routes";

//Importing External Libraries
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EventRegistration from "./routes/EventRegistration";
import { useEffect, useMemo } from "react";
import { useAuth } from "./AppContext/AppContext";
import DashboardProfile from "./routes/DashboardHome";
import DashboardPlayers from "./routes/DashboardPlayers";

function App() {
  const { isAuthenticated } = useAuth();

  const ROUTES = useMemo(() => {
    const RoutingPaths = [
      {
        path: "/",
        component: <LandingPage />,
      },
      {
        path: "events",
        component: <EventsPage />,
      },
      {
        path: "sponsors",
        component: <SponsorPage />,
      },
      {
        path: "teams",
        component: <TeamsPage />,
      },
      {
        path: "register/event/:eventName/:eventType",
        component: isAuthenticated ? (
          <EventRegistration />
        ) : (
          <Navigate to="/" />
        ),
      },
      {
        path: "login",
        component: <SignInPage />,
      },
      {
        path: "*",
        component: <ComingSoon />,
      },
      {
        path: "dashboard",
        component: <DashboardProfile />,
      },
      {
        path: "dashboard/:sport",
        component: <DashboardPlayers />,
      },
    ];
    return RoutingPaths;
  }, [isAuthenticated]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {ROUTES.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
