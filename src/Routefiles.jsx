import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SearchDetails from "./pages/SearchDetails";
import Library from "./pages/Library";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HelpDesk from "./pages/HelpDesk";
import DebateDetails from "./pages/DebateDetails";
import Homepage1 from "./pages/Homepage1";
import Debate from "./pages/Debate";
import Homepage2 from "./pages/Homepage2";

const Routesfile = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage1" element={<Homepage1 />} />
          <Route path="/SearchDetails" element={<SearchDetails />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/HelpDesk" element={<HelpDesk />} />
          <Route path="/DebateDetails" element={<DebateDetails />} />
          <Route path="/Debate" element={<Debate />} />
          <Route path="/Homepage2" element={<Homepage2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routesfile;
