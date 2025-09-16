// src/App.jsx
import React from "react";
import StarBackground from "./components/StarBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow"; // ⬅️ importa

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans bg-black">
      {/* Fondo estrellado */}
      <StarBackground />

      {/* Cursor brillante global */}
      <CursorGlow />

      {/* Navbar */}
      <Navbar />

      {/* Secciones */}
      <main className="pt-16 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Goals />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
