"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    revealEls.forEach((el) => revealObs.observe(el));

    return () => {
      revealObs.disconnect(); 
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Advantages />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}