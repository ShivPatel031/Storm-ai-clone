import { NavLink, Route, Routes } from "react-router-dom";

function WLMyLibrary() {
  return (
    <div className="w-full  h-full">
      <div className="flex justify-center items-center py-5">
        <div className="flex justify-between w-[70vw] lg:w-[40vw] items-center">
          <p className="text-lg lg:text-2xl font-semibold">My Library</p>
          <input type="text" placeholder="Search here" className="input input-bordered w-36 lg:w-60 max-w-xs rounded-md" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-5 gap-2">
      <NavLink
          to="/myLibrary/All"
          className={({ isActive }) =>
            `underline underline-offset-4 ${
              isActive ? "decoration-slate-800" : "decoration-slate-400"
            }`
          }
        >
          All
        </NavLink>
        <NavLink
          to="/myLibrary/articles"
          className={({ isActive }) =>
            `underline underline-offset-4 ${
              isActive ? "decoration-slate-800" : "decoration-slate-400"
            }`
          }
        >
          Articles
        </NavLink>
        <NavLink
          to="/myLibrary/conversation"
          className={({ isActive }) =>
            `underline underline-offset-4 ${
              isActive ? "decoration-slate-800" : "decoration-slate-400"
            }`
          }
        >
          Conversation
        </NavLink>
      </div>
      <div>
        <Routes>
        <Route
            path="/all"
            element={
              <div className="w-full h-full flex justify-center items-center">
                Nothing found
              </div>
            }
          />
          <Route
            path="/articles"
            element={
              <div className="w-full h-full flex justify-center items-center">
                No Articles
              </div>
            }
          />
          <Route
            path="/conversation"
            element={
              <div className="w-full h-full flex justify-center items-center">
                No Conversation
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
export { WLMyLibrary };
