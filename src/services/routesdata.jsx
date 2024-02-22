import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { routes } from "./routes";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

let isAuthenticated = true;

export const RoutesData = () => (
  <Router>
    <Header />
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            isAuthenticated ? route.element : <Navigate to="/" replace />
          }
        />
      ))}
    </Routes>
    <Footer />
  </Router>
);
