import { useState, useEffect } from "react";

// 🔥 IMPORT COMPONENTS (SUDAH FIX PATH)
import LoadingScreen from "./components/loadingScreen.tsx";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {

  // 🔄 STATE LOADING
  const [loading, setLoading] = useState(true);

  // ⏳ EFFECT (LOADING 2 DETIK)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 🟦 TAMPILKAN LOADING DULU
  if (loading) {
    return <LoadingScreen />;
  }

  // 🌐 WEBSITE UTAMA
  return (
    <div className="bg-white text-gray-900">
      

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}