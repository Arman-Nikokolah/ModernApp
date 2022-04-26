import React from "react";
import { GlobalStyled } from "./Globalstyle";
import AboutUS from "./pages/AboutUs";
import OurWorks from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
import { Helmet } from "react-helmet";
import Navbar from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Waves from "./components/Wave";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyled />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUS />} exact />
          <Route path="/work" element={<OurWorks />} exact />
          <Route path="/work/:id" element={<MovieDetails />} />
          <Route path="/contactus" element={<ContactUs />} exact />
        </Routes>
      </AnimatePresence>
      <Helmet>
        <title>AboutPage</title>
      </Helmet>
    </div>
  );
}

export default App;
