import { useContext } from "react";
import { SelectedMode } from "../../pages/WithLoginHomePage";

function ModeOptionsCard({ data }) {
    const {mode,setMode} = useContext(SelectedMode);
  return (
    <li>
      <button
        className="flex justify-between items-center"
        onClick={() => setMode(data?.onClick)}
      >
        <div>
          <p className="font-semibold">{data?.option?.name}</p>
          <p className="text-sm text-gray-400">{data?.option?.purpose}</p>
        </div>
        {mode === data?.onClick && (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle-check"
            className="svg-inline--fa fa-circle-check w-5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
            ></path>
          </svg>
        )}
      </button>
    </li>
  );
}

export { ModeOptionsCard };
