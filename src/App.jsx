import "./App.css";
import "./Responsive.css";
import Routesfile from "./Routefiles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer />
      <Routesfile />
    </>
  );
}

export default App;
