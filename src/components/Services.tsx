"use client";

import { useState } from "react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Gedung & Bangunan",
      description: "Kaca film untuk kantor, ruko, apartemen, dan gedung komersial. Hemat energi, privasi terjaga, tampilan elegan.",
      svg: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>
    },
    {
      title: "Rumah Tinggal",
      description: "Pemasangan kaca film pada jendela, pintu kaca, dan partisi rumah. Menolak panas, blokir UV, hunian lebih nyaman.",
      svg: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>
    },
    {
      title: "Kendaraan & Mobil",
      description: "Kaca film otomotif untuk semua jenis kendaraan. Privasi, perlindungan UV, interior lebih sejuk dan awet.",
      svg: <><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>
    },
    {
      title: "Dekoratif & Frosted",
      description: "Kaca film dekoratif, frosted, dan motif estetik. Fungsi privasi sekaligus meningkatkan nilai estetika ruangan.",
      svg: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></>
    },
  ];

  const getWhatsAppLink = (serviceName: string) => {
    const message = `Halo SJA Kaca Film, saya tertarik untuk konsultasi mengenai layanan *${serviceName}*. Bisa minta informasi lebih lanjut?`;
    return `https://wa.me/6281318808910?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="layanan" className="bg-[#0a0a0a] py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <span className="reveal inline-block text-[0.72rem] font-bold tracking-[0.15em] uppercase text-[#cc1a1a] bg-[rgba(204,26,26,0.1)] border border-[rgba(204,26,26,0.25)] py-[0.28rem] px-[0.9rem] rounded-full mb-[1rem]">
          Layanan Kami
        </span>
        <h2 className="reveal section-title text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold text-white mb-[0.875rem] max-w-[600px] leading-[1.15]">
          Solusi Kaca Film<br />untuk Semua Kebutuhan
        </h2>
        <p className="reveal section-sub text-[#8a8a8a] text-[1rem] max-w-[520px] mb-[3rem] leading-[1.7]">
          Kami melayani pemasangan kaca film berkualitas tinggi untuk berbagai jenis properti dan kendaraan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.25rem]">
          {services.map((service, index) => (
            <div key={index} className={`reveal reveal-d${index} h-full`}>
              
              <div 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="group h-full bg-[#111111] rounded-[18px] p-[2rem_1.5rem] border border-[rgba(255,255,255,0.07)] transition-all duration-[0.32s] relative overflow-hidden cursor-pointer hover:border-[rgba(204,26,26,0.25)] hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] flex flex-col"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(204,26,26,0.07)_0%,transparent_60%)] opacity-0 transition-opacity duration-[0.32s] group-hover:opacity-100" />
                
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#cc1a1a] scale-x-0 origin-left transition-transform duration-[0.35s] ease-in-out group-hover:scale-x-100" />
                
                <div className="w-[52px] h-[52px] rounded-[10px] bg-[rgba(204,26,26,0.1)] border border-[rgba(204,26,26,0.25)] flex items-center justify-center mb-[1.25rem] relative z-10 transition-colors duration-300 group-hover:bg-[#cc1a1a] group-hover:border-[#cc1a1a]">
                  <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] stroke-[#cc1a1a] group-hover:stroke-white fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round transition-colors duration-300">
                    {service.svg}
                  </svg>
                </div>
                
                <h3 className="text-[1.05rem] font-bold text-white mb-[0.6rem] relative z-10">{service.title}</h3>
                <p className="text-[0.85rem] text-[#8a8a8a] leading-[1.65] relative z-10 flex-grow">{service.description}</p>

                <div className={`relative z-10 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[60px] opacity-100 mt-[1.25rem]' : 'max-h-0 opacity-0 mt-0 group-hover:max-h-[60px] group-hover:opacity-100 group-hover:mt-[1.25rem]'}`}>
                  <a 
                    href={getWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-[8px] w-full bg-[#25d366] text-white py-[0.6rem] rounded-[8px] font-bold text-[0.85rem] transition-all hover:bg-[#1da851] shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
                  >
                    <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Tanya via WA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}