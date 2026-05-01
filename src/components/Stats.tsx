export default function Stats() {
  const stats = [
    { number: "500+", label: "Pelanggan Puas", delay: "" },
    { number: "1999", label: "Berdiri Sejak", delay: "reveal-d1" },
    { number: "4", label: "Jenis Layanan", delay: "reveal-d2" },
    { number: "100%", label: "Garansi Kepuasan", delay: "reveal-d3" },
  ];

  return (
    <section id="stats" className="bg-[var(--black2)] border-y border-[var(--border-red)] py-[3rem] px-[5%]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[1.5rem] md:gap-[1rem]">
        {stats.map((stat, index) => (
          <div key={index} className={`reveal ${stat.delay} text-center`}>
            <div className="text-[2.8rem] font-black text-[var(--red)] leading-none mb-[0.4rem] drop-shadow-[0_0_20px_var(--red-glow)]">
              {stat.number}
            </div>
            <div className="text-[0.8rem] font-bold text-[var(--silver2)] uppercase tracking-[0.08em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}