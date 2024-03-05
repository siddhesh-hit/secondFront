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
import Governer from "../pages/Governer";
import GovernerList from "../pages/GovernerList";
import Register from "../pages/Register";
import SearchDetails from "../pages/SearchDetails";
import VerifyOtp from "../pages/VerifyOtp";
import ResetPassword from "../pages/ResetPassword";
import AllLinks from "../pages/AllLinks";
import Feedback from "../pages/Feedback";
import MemberAssemblyDetails from "../pages/MemberAssemblyDetails";
import MembersCouncil from "../pages/MembersCouncil";
import MemberCouncilDetails from "../pages/MemberCouncilDetails";
import Gallery from "../components/Gallery";
import LegislativeAssembly from "../pages/LegislativeAssembly";
import LegislativeCouncil from "../pages/LegislativeCouncil";
import Judgments from "../pages/Judgments";
import SessionCalender from "../pages/SessionCalender";
import Gazetteers from "../pages/Gazetteers";
import Publications from "../pages/Publications";
import Gazette from "../pages/Gazette";
import Electionresult from "../pages/ElectionResult";
import Budgetyear from "../pages/BudgetYear";
import LegislationsBills from "../pages/LegislationsBills";
import Faq from "../pages/Faq";

export const routes = [
  {
    name: "HomePage",
    path: "/",
    exact: true,
    element: <Homepage />,
  },
  {
    name: "Register",
    path: "/Register",
    exact: true,
    element: <Register />,
  },
  {
    name: "Login",
    path: "/Login",
    exact: true,
    element: <Login />,
  },
  {
    name: "PhoneLogin",
    path: "/phone-login",
    exact: true,
    element: <PhoneLogin />,
  },
  {
    name: "VerifyOTP",
    path: "/verify-otp",
    exact: true,
    element: <VerifyOtp />,
  },
  {
    name: "ResetPassword",
    path: "/resetPassword/:token",
    exact: true,
    element: <ResetPassword />,
  },
  {
    name: "ForgetPassword",
    path: "/forgetpassword",
    exact: true,
    element: <ForgetPassword />,
  },
  {
    name: "AboutUs",
    path: "/AboutUs",
    exact: true,
    element: <AboutUs />,
  },
  {
    name: "Debate",
    path: "/Debate",
    exact: true,
    element: <Debate />,
  },
  {
    name: "Debate",
    path: "/DebateDetails",
    exact: true,
    element: <DebateDetails />,
  },
  {
    path: "/Governer",
    exact: true,
    element: <Governer />,
  },
  {
    path: "/GovernerList",
    exact: true,
    element: <GovernerList />,
  },
  {
    name: "Search",
    path: "/SearchDetails",
    exact: true,
    element: <SearchDetails />,
  },
  {
    name: "ContactUs",
    path: "/ContactUs",
    exact: true,
    element: <ContactUs />,
  },
  {
    name: "Library",
    path: "/Library",
    exact: true,
    element: <Library />,
  },
  {
    name: "HelpDesk",
    path: "/HelpDesk",
    exact: true,
    element: <HelpDesk />,
  },
  {
    name: "MemberAssembly",
    path: "/members-assembly",
    exact: true,
    element: <MembersAssembly />,
  },
  {
    name: "MantriParishad",
    path: "/mantri-parishad",
    exact: true,
    element: <MantriParishad />,
  },
  {
    name: "AllLink",
    path: "/all-links",
    exact: true,
    element: <AllLinks />,
  },
  {
    name: "Feedback",
    path: "/Feedback",
    exact: true,
    element: <Feedback />,
  },
  {
    name: "MemberAssembly",
    path: "/member-assembly-details/:id",
    exact: true,
    element: <MemberAssemblyDetails />,
  },
  {
    name: "MemberCouncil",
    path: "/member-council",
    exact: true,
    element: <MembersCouncil />,
  },
  {
    name: "MemberCouncil",
    path: "/member-council-details/:id",
    exact: true,
    element: <MemberCouncilDetails />,
  },
  {
    name: "Gallery",
    path: "/gallery",
    exact: true,
    element: <Gallery />,
  },
  {
    name: "LegislativeAssembly",
    path: "/LegislativeAssembly",
    exact: true,
    element: <LegislativeAssembly />,
  },
  {
    name: "LegislativeCouncil",
    path: "/LegislativeCouncil",
    exact: true,
    element: <LegislativeCouncil />,
  },
  {
    name: "Judgment",
    path: "/Judgments",
    exact: true,
    element: <Judgments />,
  },
  {
    name: "SessionCalender",
    path: "/SessionCalender",
    exact: true,
    element: <SessionCalender />,
  },
  {
    name: "Gazetteers",
    path: "/Gazetteers",
    exact: true,
    element: <Gazetteers />,
  },
  {
    name: "Publication",
    path: "/Publications",
    exact: true,
    element: <Publications />,
  },
  {
    name: "Gazette",
    path: "/Gazette",
    exact: true,
    element: <Gazette />,
  },
  {
    name: "ElectionResult",
    path: "/Electionresult",
    exact: true,
    element: <Electionresult />,
  },
  {
    name: "BudgetYear",
    path: "/Budgetyear",
    exact: true,
    element: <Budgetyear />,
  },
  {
    name: "LegislationsBill",
    path: "/LegislationsBills",
    exact: true,
    element: <LegislationsBills />,
  },
  {
    path: "/Faq",
    exact: true,
    element: <Faq />,
  },
];
