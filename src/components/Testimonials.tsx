export default function Testimonials() {
  const testimonials = [
    {
      name: "Andi Rahmawan",
      role: "Kaca Film Gedung Perkantoran",
      text: "Hasilnya luar biasa! Kaca film di kantor kami terpasang rapi dan bersih. Ruangan jadi lebih sejuk dan privasi lebih terjaga. Sangat rekomen!",
      avatar: "AR",
    },
    {
      name: "Dewi Santika",
      role: "Kaca Film Mobil SUV",
      text: "Mobil saya jauh lebih sejuk setelah pasang kaca film di SJA. Prosesnya cepat, teknisinya ramah dan profesional. Sangat worth it!",
      avatar: "DS",
    },
    {
      name: "Budi Hartono",
      role: "Kaca Film Rumah Tinggal",
      text: "Survey gratis, harga transparan, hasil kerja rapi. Rumah saya sekarang lebih adem dan tagihan listrik turun. Pasti repeat order!",
      avatar: "BH",
    },
  ];

  return (
    <section id="testimoni" className="bg-[#111111] border-t border-[rgba(255,255,255,0.07)] py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="reveal inline-block text-[0.72rem] font-bold tracking-[0.15em] uppercase text-[#cc1a1a] bg-[rgba(204,26,26,0.1)] border border-[rgba(204,26,26,0.25)] py-[0.28rem] px-[0.9rem] rounded-full mb-[1rem]">
            Testimoni
          </span>
          <h2 className="reveal text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold text-white mb-[0.875rem] max-w-[600px] leading-[1.15]">
            Kata Mereka<br />tentang SJA Kaca Film
          </h2>
          <p className="reveal text-[1rem] text-[#8a8a8a] max-w-[520px] mb-[3rem] leading-[1.7]">
            Kepercayaan pelanggan adalah prioritas utama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          {testimonials.map((testi, index) => (
            <div key={index} className={`reveal reveal-d${index} bg-[#0a0a0a] rounded-[18px] p-[2rem] border border-[rgba(255,255,255,0.07)] transition-all duration-[0.32s] hover:border-[rgba(204,26,26,0.25)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] hover:-translate-y-[4px]`}>
              <div className="text-[1rem] text-[#cc1a1a] mb-[1rem] tracking-[3px] drop-shadow-[0_0_8px_rgba(204,26,26,0.18)]">
                ★★★★★
              </div>
              <p className="text-[0.9rem] text-[#8a8a8a] leading-[1.75] mb-[1.5rem] italic">
                "{testi.text}"
              </p>
              <div className="flex items-center gap-[0.875rem]">
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(204,26,26,0.15)] border border-[rgba(204,26,26,0.25)] flex items-center justify-center font-extrabold text-[0.85rem] text-[#cc1a1a] flex-shrink-0">
                  {testi.avatar}
                </div>
                <div>
                  <div className="font-bold text-[0.9rem] text-white mb-[0.15rem]">
                    {testi.name}
                  </div>
                  <div className="text-[0.775rem] text-[#8a8a8a]">
                    {testi.role}
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