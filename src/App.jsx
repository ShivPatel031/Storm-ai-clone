import { createContext, useState } from "react";
import { LoginBox } from "./components/WOL/LoginBox";
import { WithLoginHomePage } from "./pages/WithLoginHomePage";
import { WithoutLoginHomePage } from "./pages/WithoutLoginHomePage";
import { BrowserRouter as Router } from "react-router-dom";

export const ContextApp = createContext();
function App() {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <div data-theme="pastel" className="">
        <Router>
          <ContextApp.Provider value={{ auth, setAuth }}>
            {!auth ? <WithoutLoginHomePage /> : <WithLoginHomePage />}
            <LoginBox />
          </ContextApp.Provider>
        </Router>
      </div>
    </>
  );
}

export default App;
