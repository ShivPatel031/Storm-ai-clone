import { NavLink } from "react-router-dom";
import { menuOptions } from "./const";

function MenuOptions({ data }) {
  return (
    <NavLink
      to={data.to}
      className={({isActive})=>`btn justify-start w-full mb-2 shadow-none flex-nowrap ${isActive?"btn-neutral":""}`}
      style={{ transition: "400ms ease-out" }}
    >
      <div>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix={data.svg.dataPrefix}
          data-icon={data.svg.dataIcon}
          className={data.svg.className}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={data.svg.viewBox}
        >
          <path fill="currentColor" d={data.path.d}></path>
        </svg>
      </div>
      <p className="whitespace-nowrap">{data.name}</p>
    </NavLink>
  );
}


function Menu() {
  return (
    <div className="drawer-side h-screen z-50" style={{ overflow: "hidden" }}>
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul
        className="menu p-0 bg-base-200 text-base-content pt-0 h-full overflow-y-auto overflow-x-hidden w-72"
        style={{ transition: "400ms ease-out" }}
      >
        <div className="w-full">
          <div id="drawer-ul" className="p-4 overflow-auto">
            {menuOptions && menuOptions.map((data)=><MenuOptions key={data.name} data={data}/>)}
          </div>
          <div className="px-4"></div>
        </div>
      </ul>
    </div>
  );
}

export { Menu };
