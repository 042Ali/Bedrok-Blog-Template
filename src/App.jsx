import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";

export default function App() {
  const [page, setPage] = useState("HomePage");

  return (
    <>
      <NavBar page={page} setPage={setPage} />
      {page === "HomePage" ? (
        <HomePage />
      ) : page === "AboutPage" ? (
        <AboutPage />
      ) : page === "ContactPage" ? (
        <ContactPage />
      ) : (
        "Something went wrong"
      )}
    </>
  );
}
