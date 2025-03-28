import "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Attorneys from "./pages/Attorneys";
import Blog from "./pages/Blog";
import Consultation from "./pages/Consultation";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/attorneys" element={<Attorneys />} />
          <Route index path="/blog" element={<Blog />} />
          <Route index path="/consultation" element={<Consultation />} />
          <Route index path="/profile" element={<Profile />} />
          <Route index path="/register" element={<Register />} />
          <Route index path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
