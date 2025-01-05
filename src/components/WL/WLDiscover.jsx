import { NavLink, Route, Routes } from "react-router-dom";

function WLDiscover() {
  return (
    <div className="w-full  h-full">
      <div className="flex justify-center items-center py-5">
        <div className="flex justify-between w-[70vw] lg:w-[40vw] items-center">
          <p className="text-2xl font-semibold">Discover</p>
          <select className="select select-bordered w-36 rounded-md max-w-xs font-medium">
            <option disabled selected>
              Most Recent
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </div>
      <div className="w-full flex justify-center items-center pt-5 sm:gap-2 gap-5">
        <NavLink to="/discover/articles" className={({isActive})=>`underline underline-offset-4 ${isActive?"decoration-slate-800":"decoration-slate-400"}`}>Articles</NavLink>
        <NavLink to="/discover/conversation" className={({isActive})=>`underline underline-offset-4 ${isActive?"decoration-slate-800":"decoration-slate-400"}`}>Conversation</NavLink>
      </div>
      <div>
        <Routes>
            <Route path="/articles" element={<div className="w-full h-full flex justify-center items-center">No Articles</div>} />
            <Route path="/conversation" element={<div className="w-full h-full flex justify-center items-center">No Conversation</div>} />
        </Routes>
      </div>
    </div>
  );
}

export { WLDiscover };
