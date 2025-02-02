import "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Attorneys from "./pages/Attorneys";
import Blog from "./pages/Blog";
import Rights from "./pages/Rights";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/attorneys" element={<Attorneys />} />
          <Route index path="/blog" element={<Blog />} />
          <Route index path="/rights" element={<Rights />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
