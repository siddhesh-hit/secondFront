import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import { routes } from "./routes";

function RoutesData() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <Header />
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
        <Footer />
      </Router>
    </>
  );
}
export default RoutesData;
