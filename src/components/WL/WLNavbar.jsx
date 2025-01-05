import { useContext } from "react";
import { ContextApp } from "../../App";
import userTempImg from "../../assets/user.png";
import { SelectedMode } from "../../pages/WithLoginHomePage";
import { modeOptions } from "./const";
import { ModeOptionsCard } from "./ModeOptionCard";

function Navbar() {
  const { setAuth } = useContext(ContextApp);
  const { mode, setExpendXLMenu } = useContext(SelectedMode);
  return (
    <div className="navbar bg-base-100 px-4 xl:px-10 fixed top-0 z-40">
      {/* Menu Options */}
      <div className="flex-none">
        <div className="dropdown">
          <div className="drawer-content">
            <label
              htmlFor="xl-drawer"
              className="max-xl:hidden btn btn-ghost btn-circle"
              onClick={() => setExpendXLMenu((state) => !state)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </label>
            <label
              htmlFor="my-drawer"
              className="xl:hidden btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Storm Options */}
      <div className="flex-1">
        <div
          className="relative w-fit place-items-center rounded-[--border-radius] p-0.5"
          // style="--border-radius: 8px"
        >
          <div
            className='pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine'
            // style="
            //       --border-width: 1px;
            //       --border-radius: 8px;
            //       --duration: 14s;
            //       --mask-linear-gradient: linear-gradient(#fff 0 0)
            //           content-box,
            //         linear-gradient(#fff 0 0);
            //       --background-radial-gradient: radial-gradient(
            //         transparent,
            //         transparent,
            //         #2e69b2,
            //         #fe8fb5,
            //         #ffbe7b,
            //         transparent,
            //         transparent
            //       );
            //     "
          ></div>
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost text-xl">
              {mode === "storm" ? "STORM" : "CO-STORM"}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="svg-inline--fa fa-caret-down fa-xs w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
            >
              <div className="flex flex-row items-center">
                <li className="menu-title">Mode</li>
              </div>
              {modeOptions?.length > 0 &&
                modeOptions.map((data) => (
                  <ModeOptionsCard key={data?.option?.name} data={data} />
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-none fixed right-10">
        <button className="btn btn-ghost hidden xl:block">Contact Us</button>
        <button className="btn btn-ghost hidden xl:block">Bug Report</button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-sm xl:btn-md btn-ghost btn-circle avatar placeholder"
          >
            <div className="w-10 rounded-full bg-neutral text-neutral-content text-lg">
              <img
                src={userTempImg}
                alt="avatar"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="btn btn-ghost block xl:hidden">
                Contact Us
              </button>
            </li>
            <li>
              <button className="btn btn-ghost block xl:hidden">
                Bug Report
              </button>
            </li>
            <li>
              <button className="btn btn-ghost">Terms of Service</button>
            </li>
            <li>
              <button
                className="btn btn-ghost text-error"
                onClick={() => setAuth(false)}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
