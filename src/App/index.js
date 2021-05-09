import RouterComponent from "../routes/RouterComponent";
import { Navbar } from "../components";
import "./App.css";

export const App = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="appContainer">
        <RouterComponent />
      </div>
    </div>
  );
};
