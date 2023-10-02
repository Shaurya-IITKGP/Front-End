import { useState } from "react";
import "./module.css";
import Sidebar1 from "./Sidebar1";
import Header1 from "./Header1";
import Home1 from "./Home1";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <div className="grid-container1">
        <Sidebar1
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
      </div>
      <div>
        <Header1 OpenSidebar={OpenSidebar} />
        <Home1 /> 
      </div>
      
     
    </>
  );
}

export default App;
