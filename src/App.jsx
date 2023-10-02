//Importing routes
import {
  LandingPage,
  EventsPage,
  TeamsPage,
  ComingSoon,
  OptionToLogin,
  SignInPage,
  ProfileDashboard,
  Portal,
  Cricket,
} from "./routes";

//Importing External Libraries
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EventRegistration from "./routes/EventRegistration";
import { useEffect, useMemo } from "react";
import { useAuth } from "./AppContext/AppContext";

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
        path: "ProfileDashboard",
        component: <ProfileDashboard />,
      },
      {
        path: "Cricket",
        component: <Cricket />,
      },
      {
        path: "Portal",
        component: <Portal />,
      },
      {
        path: "*",
        component: <ComingSoon />,
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
