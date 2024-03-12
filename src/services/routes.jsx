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
import UserProfile from "../pages/UserProfile";

export const routes = [
  {
    path: "/",
    exact: true,
    element: <Homepage />,
  },
  {
    path: "/Register",
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
  { path: "/verify-otp", exact: true, element: <VerifyOtp /> },
  { path: "/resetPassword/:token", exact: true, element: <ResetPassword /> },
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
  {
    path: "/all-links",
    exact: true,
    element: <AllLinks />,
  },
  {
    path: "/Feedback",
    exact: true,
    element: <Feedback />,
  },
  {
    path: "/member-assembly-details/:id",
    exact: true,
    element: <MemberAssemblyDetails />,
  },
  {
    path: "/member-council",
    exact: true,
    element: <MembersCouncil />,
  },
  {
    path: "/member-council-details/:id",
    exact: true,
    element: <MemberCouncilDetails />,
  },
  {
    path: "/gallery",
    exact: true,
    element: <Gallery />,
  },
  {
    path: "/LegislativeAssembly",
    exact: true,
    element: <LegislativeAssembly />,
  },
  {
    path: "/LegislativeCouncil",
    exact: true,
    element: <LegislativeCouncil />,
  },
  {
    path: "/Judgments",
    exact: true,
    element: <Judgments />,
  },
  {
    path: "/SessionCalender",
    exact: true,
    element: <SessionCalender />,
  },
  {
    path: "/Gazetteers",
    exact: true,
    element: <Gazetteers />,
  },
  {
    path: "/Publications",
    exact: true,
    element: <Publications />,
  },
  {
    path: "/Gazette",
    exact: true,
    element: <Gazette />,
  },
  {
    path: "/Electionresult",
    exact: true,
    element: <Electionresult />,
  },
  {
    path: "/Budgetyear",
    exact: true,
    element: <Budgetyear />,
  },
  {
    path: "/LegislationsBills",
    exact: true,
    element: <LegislationsBills />,
  },
  {
    path: "/Faq",
    exact: true,
    element: <Faq />,
  },
  {
    path: "/UserProfile",
    exact: true,
    element: <UserProfile />,
  },
];
