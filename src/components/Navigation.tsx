"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, isMobile = false) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      if (isMobile) setMobileMenuOpen(false);
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] px-[5%] flex items-center justify-between transition-all duration-[var(--T)] ${
          scrolled ? "bg-[rgba(10,10,10,0.95)] backdrop-blur-[20px] shadow-[0_1px_0_var(--border-red)]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-[10px]">
          <Image src="/Logo.jpeg" alt="SJA Kaca Film Logo" width={42} height={42} className="w-[42px] h-[42px] object-cover rounded-[6px] border border-[var(--border-red)]" />
          <div>
            <div className="font-black text-[1.25rem] tracking-[-0.03em] text-[var(--white)]">
              <span className="text-[var(--red)]">SJA</span>
            </div>
            <div className="text-[0.65rem] font-medium text-[var(--silver2)] tracking-[0.12em] uppercase -mt-[2px]">
              Kaca Film
            </div>
          </div>
        </div>

        <ul className="hidden md:flex gap-[1.75rem] list-none">
          {["beranda", "layanan", "keunggulan", "testimoni", "kontak"].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={handleNavClick} className="text-[0.875rem] font-semibold text-[var(--silver2)] hover:text-[var(--red)] transition-colors duration-[var(--T)] capitalize">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/6285890326818" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-[var(--red)] text-[var(--white)] px-[1.3rem] py-[0.55rem] rounded-[100px] text-[0.875rem] font-bold transition-all duration-[var(--T)] shadow-[0_0_20px_var(--red-glow)] hover:bg-[var(--red-dark)] hover:-translate-y-[2px] hover:shadow-[0_4px_24px_rgba(204,26,26,0.4)]">
          Konsultasi Gratis
        </a>

        <div className="md:hidden flex flex-col gap-[5px] cursor-pointer p-[4px]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="block w-[22px] h-[2px] bg-[var(--silver)] rounded-[2px] transition-all"></span>
          <span className="block w-[22px] h-[2px] bg-[var(--silver)] rounded-[2px] transition-all"></span>
          <span className="block w-[22px] h-[2px] bg-[var(--silver)] rounded-[2px] transition-all"></span>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 bg-[var(--black2)] px-[5%] py-[1.5rem] border-b border-[var(--border-red)] flex flex-col gap-[1rem] z-[49] md:hidden">
          {["beranda", "layanan", "keunggulan", "testimoni", "kontak"].map((item) => (
            <a key={item} href={`#${item}`} onClick={(e) => handleNavClick(e, true)} className="font-semibold text-[var(--silver)] py-[0.5rem] border-b border-[var(--border)] capitalize">
              {item}
            </a>
          ))}
          <a href="https://wa.me/6281318808910" target="_blank" rel="noopener noreferrer" className="bg-[var(--red)] text-[var(--white)] px-[1.5rem] py-[0.75rem] rounded-[100px] text-center font-bold mt-[0.5rem]">
            Konsultasi via WhatsApp
          </a>
        </div>
      )}
    </>
  );
}