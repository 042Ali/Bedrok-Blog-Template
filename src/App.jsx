import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/homePage";
import AllPostsPage from "./components/AllPostsPage/AllPostsPage";
import Entrepreneurship from "./components/Entrepreneurship/Entrepreneurship";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import BlogInfoPage from "./components/BlogInfoPage/BlogInfoPage";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/posts" element={<AllPostsPage />} />
        <Route path="/entrepreneurship" element={<Entrepreneurship />} />
        <Route path="/BlogInfoPage" element={<BlogInfoPage />} />
        <Route path="*" element={<ErrorPage />} />{" "}
      </Routes>
    </Router>
  );
}
