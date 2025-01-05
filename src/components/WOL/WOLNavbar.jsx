import svg from "../../assets/logo_full_v2.9bfb3ec4.svg";
function Navbar() {
  return (
    <>
      <div className="fixed top-0 navbar flex items-center justify-center border bg-white z-40">
        <div className="navbar bg-base-100 max-w-7xl">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl rounded-lg">
              <img src={svg} alt="logo image" className="w-14"></img>
              <span className="mb-1.5 font-normal">
                from Stanford University
              </span>
            </a>
          </div>
          <div className="navbar-end ">
            <a
              className="hidden md:rounded-lg md:btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export { Navbar };
