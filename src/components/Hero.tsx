"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="beranda" className="min-h-screen flex items-center relative overflow-hidden bg-[#0a0a0a] pt-[130px] px-[5%] pb-[80px]">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-[center_30%] opacity-[0.18] z-0" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(110deg,rgba(10,10,10,0.98)_35%,rgba(10,10,10,0.7)_65%,rgba(10,10,10,0.4)_100%)]" />
      <div className="absolute left-0 top-0 bottom-0 w-[3px] z-20 bg-[linear-gradient(to_bottom,transparent,#cc1a1a_30%,#cc1a1a_70%,transparent)]" />

      <div className="max-w-[640px] relative z-30">
        <div className="reveal inline-flex items-center gap-[8px] bg-[rgba(204,26,26,0.1)] border border-[rgba(204,26,26,0.25)] text-[#cc1a1a] rounded-full mb-[1.75rem] py-[0.4rem] px-[1rem] text-[0.78rem] font-bold tracking-[0.1em] uppercase">
          <span className="w-[6px] h-[6px] rounded-full bg-[#cc1a1a]"></span>
          Profesional & Terpercaya
        </div>

        <h1 className="reveal reveal-d1 font-black text-white mb-[0.25rem] text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.15]">
          <span className="text-[#cc1a1a]">SJA</span> Kaca Film
        </h1>

        <div className="reveal reveal-d2 font-black text-[#8a8a8a] mb-[1.5rem] text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.15]">
          Berkualitas, Sempurna.
        </div>

        <p className="reveal reveal-d3 text-[1.05rem] text-[#8a8a8a] max-w-[460px] mb-[2.5rem] leading-[1.75]">
          Solusi kaca film profesional untuk rumah, gedung, dan kendaraan Anda.<br />Material terbaik, pemasangan rapi, garansi terjamin.
        </p>

        <div className="reveal reveal-d4 flex gap-[1rem] flex-wrap">
          <a href="#layanan" className="bg-[#cc1a1a] text-white py-[0.9rem] px-[2rem] rounded-full font-bold text-[0.95rem] transition-all duration-300 shadow-[0_0_24px_rgba(204,26,26,0.18)] hover:bg-[#9e1313] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(204,26,26,0.45)] inline-block">
            Lihat Layanan
          </a>
          <a href="https://wa.me/6285890326818" target="_blank" rel="noopener noreferrer" className="group bg-transparent text-[#c8c8c8] py-[0.9rem] px-[2rem] rounded-full font-bold text-[0.95rem] border border-[rgba(255,255,255,0.15)] transition-all duration-300 inline-flex items-center gap-[8px] hover:border-[#cc1a1a] hover:text-[#cc1a1a] hover:-translate-y-[2px]">
            <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current transition-colors duration-300">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Kami
          </a>
        </div>
      </div>

      <div className="hidden lg:block absolute right-[6%] top-1/2 -translate-y-1/2 z-[3] w-[min(38vw,420px)] animate-[fadeLeft_1s_0.6s_forwards] opacity-0">
        <Image src="/Logo.jpeg" alt="SJA Kaca Film Logo" width={420} height={420} className="w-full rounded-[18px] shadow-[0_0_80px_rgba(204,26,26,0.2),_0_30px_60px_rgba(0,0,0,0.6)] border border-[rgba(204,26,26,0.25)]" />
      </div>
    </section>
  );
}