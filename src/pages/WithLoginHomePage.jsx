import { Navbar } from "../components/WL/WLNavbar";
import { WLDiscover } from "../components/WL/WLDiscover";
import { WLHomeBody } from "../components/WL/WLHomeBody";
import { Menu } from "../components/WL/Menu";
import { Routes, Route } from "react-router-dom";
import { WLMyLibrary } from "../components/WL/WLMyLibrary";
import { createContext, useState } from "react";
import { XLMenu } from "../components/WL/XLMenu";

export const SelectedMode = createContext();

function WithLoginHomePage() {
  const [mode, setMode] = useState("storm");
  const [expendXLMenu,setExpendXLMenu] = useState(false);
  return (
    <>
      <div className="drawer h-screen w-screen">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <SelectedMode.Provider value={{ mode, setMode,expendXLMenu,setExpendXLMenu }}>
          <div className="drawer-content w-full h-full">
            <div className="drawer lg:drawer-open w-full h-full">
              <input id="xl-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col w-full h-full">
                <Navbar />
                <div className="mt-20"></div>
                <Routes>
                  <Route path="/" element={<WLHomeBody />} />
                  <Route path="/discover/*" element={<WLDiscover />} />
                  <Route path="/myLibrary/*" element={<WLMyLibrary />} />
                </Routes>
              </div>
              <XLMenu />
            </div>
          </div>
          <Menu />
        </SelectedMode.Provider>
      </div>
    </>
  );
}

export { WithLoginHomePage };
