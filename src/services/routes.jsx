import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Debate from "../pages/Debate";
import DebateDetails from "../pages/DebateDetails";
import ForgetPassword from "../pages/ForgetPassword";
import HelpDesk from "../pages/HelpDesk";
import Homepage from "../pages/Homepage";
import Library from "../pages/Library";
import Login from "../pages/Login";
import MantriParishad from "../pages/MantriParishad";
import MembersAssembly from "../pages/MembersAssembly";
import PhoneLogin from "../pages/PhoneLogin";
import Rajyapal from "../pages/Rajyapal";
import RajyapalList from "../pages/RajyapalList";
import Register from "../pages/Register";
import SearchDetails from "../pages/SearchDetails";


export const routes = [
  {
    path: "/",
    exact: true,
    element: <Homepage />,
  },
  {
    path: "/register",
    exact: true,
    element: <Register />,
  },
  {
    path: "/Login",
    exact: true,
    element: <Login />,
  },
  {
    path: "/phone-login",
    exact: true,
    element: <PhoneLogin />,
  },
  {
    path: "/forgetpassword",
    exact: true,
    element: <ForgetPassword />,
  },
  {
    path: "/AboutUs",
    exact: true,
    element: <AboutUs />,
  },
  {
    path: "/Debate",
    exact: true,
    element: <Debate />,
  },
  {
    path: "/DebateDetails",
    exact: true,
    element: <DebateDetails />,
  },
  {
    path: "/rajyapal",
    exact: true,
    element: <Rajyapal />,
  },
  {
    path: "/rajyapal-list",
    exact: true,
    element: <RajyapalList />,
  },
  {
    path: "/SearchDetails",
    exact: true,
    element: <SearchDetails />,
  },
  {
    path: "/ContactUs",
    exact: true,
    element: <ContactUs />,
  },
  {
    path: "/Library",
    exact: true,
    element: <Library />,
  },
  {
    path: "/HelpDesk",
    exact: true,
    element: <HelpDesk />,
  },
  {
    path: "/members-assembly",
    exact: true,
    element: <MembersAssembly />,
  },
  {
    path: "/mantri-parishad",
    exact: true,
    element: <MantriParishad />,
  },
];
