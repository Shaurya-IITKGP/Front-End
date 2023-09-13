//Importing routes
import {
  LandingPage,
  EventsPage,
  TeamsPage,
  SignUpPage,
  ComingSoon,
  OptionToLogin,
  SignInPage,
} from "./routes";

//Importing External Libraries
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import EventRegistration from "./routes/EventRegistration";

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
    path: "/teams",
    component: <TeamsPage />,
  },
  {
    path: "signup",
    component: <OptionToLogin />,
  },
  {
    path: "register/player",
    component: <SignUpPage />,
  },
  {
    path: "register/event/:eventName",
    component: <EventRegistration />
  },
  {
    path: "signin/college",
    component: <SignInPage />,
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
