import { ToastContainer } from "react-toastify";
import "./App.css";
import "./Responsive.css";
import RoutesData from "./services/routesdata";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  return (
    <>
      <ToastContainer />
      <RoutesData />
    </>
  );
}

export default App;
