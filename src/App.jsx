import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";
import "./App.css";
import MainLayout from "./pages/MainLayout/MainLayout";

const App = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Scroll duration in seconds
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: "vertical", // Vertical scroll
    });

    // Scroll update frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Clean up Lenis instance on component unmount
    return () => {
      // No destroy method, so just leave this empty or remove the return
    };
  }, []);

  return (
    <div>
      <MainLayout />
    </div>
  );
};

export default App;
