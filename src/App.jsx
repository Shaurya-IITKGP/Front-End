//Importing routes
import {
  LandingPage,
  EventsPage,
  TeamsPage,
  ComingSoon,
  SignInPage as LoginPage,
  SponsorPage,
} from "./routes";

//Importing External Libraries
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EventRegistration from "./routes/EventRegistration";
import DashboardProfile from "./routes/DashboardHome";
import DashboardPlayers from "./routes/DashboardPlayers";
import { useContext } from "react";
import { AppContext } from "./AppContext/AppContext";

function App() {
  const { isAuthenticated } = useContext(AppContext);
  console.log(isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/sponsors" element={<SponsorPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate replace to={"/dashboard"} />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <DashboardProfile />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }
        />
        <Route
          path="/dashboard/:sport"
          element={
            isAuthenticated ? (
              <DashboardPlayers />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }
        />
        <Route
          path="/events/:eventName/:eventType"
          element={
            isAuthenticated ? (
              <EventRegistration />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
