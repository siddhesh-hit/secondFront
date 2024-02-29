import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import { routes } from "./routes";

const Layout = ({ children }) => {
  const location = useLocation();
  const noHeaderFooterPaths = [
    "/login",
    "/register",
    "/phone-login",
    "/verify-otp",
    "/resetPassword",
    "/forgetpassword",
  ];

  const showHeaderFooter = !noHeaderFooterPaths.includes(
    location.pathname.toLowerCase()
  );
  console.log(showHeaderFooter);
  return (
    <>
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};

function RoutesData() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                // element={
                //   isAuthenticated ? route.element : <Navigate to="/" replace />
                // }
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
export default RoutesData;
