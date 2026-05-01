"use client";

import { useState } from "react";

export default function Advantages() {
  const [activeIndex, setActiveIndex] = useState(0);

  const advantages = [
    {
      num: "01",
      title: "Material Berkualitas",
      desc: "Produk bergaransi dari brand terpercaya internasional",
      details: ["Film anti-UV grade A internasional", "Garansi produk 2–5 tahun", "Pilihan warna & kegelapan variatif", "Tahan goresan & gelembung"],
      svg: <><circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" /><path d="M13 20l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></>
    },
    {
      num: "02",
      title: "Harga Transparan",
      desc: "No hidden cost, estimasi jelas sebelum pengerjaan dimulai",
      details: ["Estimasi tertulis sebelum mulai", "Tidak ada biaya tersembunyi", "Harga bersaing di pasaran", "Bisa cicilan & negosiasi"],
      svg: <><rect x="8" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M14 18h12M14 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
    },
    {
      num: "03",
      title: "Proses Cepat & Rapi",
      desc: "Pengerjaan efisien, hasil bersih tanpa gelembung udara",
      details: ["Selesai dalam 1 hari kerja", "Teknik presisi bebas gelembung", "Lokasi bersih setelah pengerjaan", "Tepat waktu sesuai jadwal"],
      svg: <><circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" /><path d="M20 14v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>
    },
    {
      num: "04",
      title: "Free Survey & Konsultasi",
      desc: "Kunjungan lokasi & konsultasi kebutuhan tanpa biaya",
      details: ["Survey lokasi 100% gratis", "Konsultasi pilihan film terbaik", "Estimasi harga langsung di tempat", "Jadwal fleksibel sesuai Anda"],
      svg: <><path d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M16 20h8M20 16v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
    }
  ];

  return (
    <section id="keunggulan" className="bg-[#111111] border-t border-[rgba(255,255,255,0.07)] py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-[5%]">
        <div className="flex-1 min-w-[280px] pt-[0.5rem] mb-10 lg:mb-0">
          <span className="reveal inline-block text-[0.72rem] font-bold tracking-[0.15em] uppercase text-[#cc1a1a] bg-[rgba(204,26,26,0.1)] border border-[rgba(204,26,26,0.25)] py-[0.28rem] px-[0.9rem] rounded-full mb-[1rem]">
            Mengapa SJA?
          </span>
          <h2 className="reveal section-title text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold text-white mb-[0.875rem] max-w-[600px] leading-[1.15]">
            Standar Kami<br />Adalah Kepuasan Anda
          </h2>
          <p className="reveal section-sub text-[#8a8a8a] text-[1rem] max-w-[520px] mb-0 leading-[1.7]">
            Kami berkomitmen memberikan layanan terbaik dengan material berkualitas dan tim yang berpengalaman. Klik kartu untuk detail.
          </p>
        </div>

        <div className="flex-[1.1] grid grid-cols-1 md:grid-cols-2 gap-[1rem] w-full">
          {advantages.map((item, index) => (
            <div key={index} className={`reveal reveal-d${index} h-full`}>
              
              <div 
                onClick={() => setActiveIndex(index)}
                className={`group h-full bg-[#0a0a0a] rounded-[12px] border cursor-pointer transition-all duration-[0.35s] cubic-bezier(0.4,0,0.2,1) relative overflow-hidden ${activeIndex === index ? 'border-[#cc1a1a] bg-[rgba(204,26,26,0.06)] shadow-[0_12px_40px_rgba(204,26,26,0.2)] -translate-y-[4px]' : 'border-[rgba(255,255,255,0.07)] hover:border-[rgba(204,26,26,0.25)] hover:shadow-[0_8px_30px_rgba(204,26,26,0.12)] hover:-translate-y-[3px]'}`}
              >
                <div className="p-[1.25rem] relative">
                  <div className={`w-[44px] h-[44px] rounded-[10px] border flex items-center justify-center mb-[0.75rem] transition-all duration-[0.3s] ease-in-out ${activeIndex === index ? 'bg-[#cc1a1a] border-[#cc1a1a] text-white' : 'bg-[rgba(204,26,26,0.08)] border-[rgba(204,26,26,0.25)] text-[#cc1a1a]'}`}>
                    <svg viewBox="0 0 40 40" fill="none" className="w-[22px] h-[22px]">
                      {item.svg}
                    </svg>
                  </div>
                  
                  <div className={`absolute top-[1rem] right-[1rem] text-[0.65rem] font-extrabold rounded-full py-[0.15rem] px-[0.55rem] tracking-[0.05em] transition-all duration-[0.3s] ease-in-out ${activeIndex === index ? 'bg-[#cc1a1a] text-white border-[#cc1a1a]' : 'text-[#cc1a1a] bg-[rgba(204,26,26,0.1)] border border-[rgba(204,26,26,0.25)]'}`}>
                    {item.num}
                  </div>

                  <div className="text-[0.9rem] font-bold text-white mb-[0.3rem]">{item.title}</div>
                  <div className="text-[0.8rem] text-[#8a8a8a] leading-[1.55]">{item.desc}</div>

                  <div className={`overflow-hidden transition-all duration-[0.45s] cubic-bezier(0.4,0,0.2,1) ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="h-[1px] bg-[linear-gradient(to_right,#cc1a1a,transparent)] my-[0.75rem]" />
                    <ul className="list-none flex flex-col gap-[0.4rem]">
                      {item.details.map((detail, i) => (
                        <li key={i} className="text-[0.78rem] text-[#c8c8c8] flex items-center gap-[0.5rem]">
                          <span className="w-[4px] h-[4px] rounded-full bg-[#cc1a1a] flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`flex items-center gap-[4px] text-[0.68rem] text-[#8a8a8a] mt-[0.75rem] transition-all duration-300 ${activeIndex === index ? 'opacity-0 h-0 m-0 overflow-hidden' : 'opacity-60'}`}>
                    <svg viewBox="0 0 16 16" fill="none" className="w-[11px] h-[11px] stroke-[#cc1a1a]">
                      <path d="M8 3v10M3 8l5 5 5-5" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    Klik untuk detail
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}