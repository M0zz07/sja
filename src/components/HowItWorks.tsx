export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Hubungi & Konsultasi",
      desc: "Ceritakan kebutuhan Anda via WhatsApp. Tim kami siap membantu memilih solusi terbaik.",
      delay: ""
    },
    {
      num: "02",
      title: "Survey & Estimasi",
      desc: "Tim kami datang ke lokasi, ukur area, dan berikan penawaran harga transparan tanpa biaya.",
      delay: "reveal-d1"
    },
    {
      num: "03",
      title: "Pemasangan Profesional",
      desc: "Teknisi kami memasang kaca film dengan teliti dan rapi sesuai jadwal yang disepakati.",
      delay: "reveal-d2"
    },
    {
      num: "04",
      title: "Garansi & After-Sales",
      desc: "Garansi pemasangan aktif dan kami siap membantu jika ada kendala setelah pekerjaan selesai.",
      delay: "reveal-d3"
    }
  ];

  return (
    <section id="cara-kerja" className="bg-[var(--black)] py-[6rem] px-[5%] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(204,26,26,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <span className="reveal inline-block text-[0.72rem] font-bold tracking-[0.15em] uppercase text-[var(--red)] bg-[rgba(204,26,26,0.1)] border border-[var(--border-red)] py-[0.28rem] px-[0.9rem] rounded-full mb-[1rem]">
          Cara Kerja
        </span>
        <h2 className="reveal text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold text-[var(--white)] mb-[0.875rem] max-w-[600px] leading-[1.15]">
          Proses Simpel,<br />Hasil Maksimal
        </h2>
        <p className="reveal text-[1rem] text-[var(--silver2)] max-w-[520px] mb-[3rem] leading-[1.7]">
          Empat langkah mudah dari konsultasi hingga kaca film terpasang sempurna.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] relative">
          <div className="hidden lg:block absolute top-[32px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-[1px] bg-[linear-gradient(to_right,var(--red),rgba(204,26,26,0.2),var(--red))] -z-10" />

          {steps.map((step, i) => (
            <div key={i} className={`reveal ${step.delay} text-center group`}>
              <div className="w-[64px] h-[64px] rounded-full border-2 border-[var(--border-red)] flex items-center justify-center text-[1.15rem] font-black text-[var(--red)] mx-auto mb-[1.25rem] bg-[var(--black2)] transition-all duration-[var(--T)] relative group-hover:bg-[var(--red)] group-hover:text-white group-hover:border-[var(--red)] group-hover:shadow-[0_0_24px_rgba(204,26,26,0.4)]">
                {step.num}
                <div className="absolute inset-[-4px] rounded-full border border-dashed border-[rgba(204,26,26,0.2)]" />
              </div>
              <h3 className="text-[1rem] font-bold text-[var(--white)] mb-[0.5rem]">{step.title}</h3>
              <p className="text-[0.85rem] text-[var(--silver2)] leading-[1.65]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}