import "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Attorneys from "./pages/Attorneys";
import Blog from "./pages/Blog";
// import Consultation from "./pages/Consultation";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/login";
import PropertyRights from "./Blogpages/propertyRights";
import YourRights from "./Blogpages/yourRights";
import FamilyLaw from "./Blogpages/familyLaw";
// Dashboard
import Profile from "./Dashboard/Profile";
import Payment from "./Dashboard/payment";
import Privacy from "./Dashboard/privacy";
import Settings from "./Dashboard/settings";
import PaymentPage from "./components/paymentPage";
// Lawyer Signup
import LawyerSignupForm from "./pages/LawyerSignupForm";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/attorneys" element={<Attorneys />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/land-and-property-rights"
          element={<PropertyRights />}
        />
        <Route
          path="/blog/employee-rights-legal-overview"
          element={<YourRights />}
        />
        <Route path="/blog/family-and-domestic-law" element={<FamilyLaw />} />
        <Route path="/consultation" element={<PaymentPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dashboard */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/settings" element={<Settings />} />
        {/* Lawyer Signup */}
        <Route path="/lawyersignupform" element={<LawyerSignupForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
