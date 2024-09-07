import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import ScrollRestoration from "./components/common/ScrollRestoration.js/ScrollRestoration";
import ServiceDetail from "./pages/ServicesSection/ServiceDetail/ServiceDetail";
import { HelmetProvider } from "react-helmet-async";
import Career from "./pages/Career";
import Preloader from "./components/preloader/preloader";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = async () => {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Force hide after 5 seconds

      try {
        await Promise.all([loadImages(), loadData()]);
      } catch (error) {
        console.error("Error during route change:", error);
      } finally {
        clearTimeout(timer);
        setLoading(false);
      }
    };

    handleRouteChange();
  }, [location]);

  const loadImages = () => {
    return new Promise((resolve) => {
      const images = document.querySelectorAll("img");
      if (images.length === 0) {
        resolve(); // No images to load
        return;
      }

      let loadedImages = 0;
      images.forEach((img) => {
        img.onload = img.onerror = () => {
          loadedImages++;
          if (loadedImages === images.length) {
            resolve();
          }
        };
      });
    });
  };

  const loadData = async () => {
    // Replace this with actual data fetching logic
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <ScrollToTop />
      <ScrollRestoration />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/service/:serviceName' element={<ServiceDetail />} />
        <Route path='/projects' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />
        <Route path='/careers' element={<Career />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
