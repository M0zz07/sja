import Image from "next/image";
import { siteConfig } from "@/lib/config";
export default function Footer() {
  return (
    <footer className="bg-[var(--black2)] px-[5%] pt-[4.5rem] pb-[2rem] border-t border-[var(--border-red)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-[2rem] md:gap-[3rem] mb-[2.5rem] pb-[2.5rem] border-b border-[var(--border)]">
          
          <div>
            <div className="flex items-center gap-[10px] mb-[1rem]">
              <Image src="/Logo.jpeg" alt="SJA Kaca Film" width={44} height={44} className="w-[44px] h-[44px] object-cover rounded-[8px] border border-[var(--border-red)]" />
              <div>
                <span className="font-black text-[1.5rem] text-[var(--white)] block leading-none"><span className="text-[var(--red)]">SJA</span></span>
                <span className="text-[0.6rem] tracking-[0.12em] color-[var(--silver2)] uppercase">Kaca Film</span>
              </div>
            </div>
            <p className="text-[0.875rem] text-[var(--silver2)] leading-[1.7] max-w-[290px] mb-[1.25rem]">
              Jasa pasang kaca film profesional untuk gedung, rumah, dan kendaraan. Kualitas terjamin, harga transparan sejak 1999.
            </p>
            <div className="flex gap-[0.75rem]">
              <a href="https://www.instagram.com/sjakacafilm?igsh=MWpkNHhxZ2k1dGU4ZA==" target="_blank" rel="noopener noreferrer" className="group w-[38px] h-[38px] rounded-[8px] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] flex items-center justify-center transition-all duration-[var(--T)] hover:border-[var(--red)] hover:bg-[rgba(204,26,26,0.1)] hover:-translate-y-[2px]">
                <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] stroke-[var(--silver2)] fill-none stroke-[1.8] group-hover:stroke-[var(--red)] transition-stroke duration-[var(--T)]">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://wa.me/6281318808910" target="_blank" rel="noopener noreferrer" className="group w-[38px] h-[38px] rounded-[8px] bg-[rgba(255,255,255,0.04)] border border-[var(--border)] flex items-center justify-center transition-all duration-[var(--T)] hover:border-[var(--red)] hover:bg-[rgba(204,26,26,0.1)] hover:-translate-y-[2px]">
                <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-[var(--silver2)] group-hover:fill-[var(--red)] transition-colors duration-[var(--T)]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="font-extrabold text-[0.8rem] text-[var(--white)] uppercase tracking-[0.1em] mb-[1.25rem]">Layanan</div>
            <ul className="flex flex-col gap-[0.7rem] list-none">
              {["Kaca Film Gedung", "Kaca Film Rumah", "Kaca Film Mobil", "Kaca Film Dekoratif", "Konsultasi Gratis"].map((link, i) => (
                <li key={i}>
                  <a href={link === "Konsultasi Gratis" ? "#kontak" : "#layanan"} className="text-[0.875rem] text-[var(--silver2)] hover:text-[var(--red)] transition-colors duration-[var(--T)]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-extrabold text-[0.8rem] text-[var(--white)] uppercase tracking-[0.1em] mb-[1.25rem]">Kontak</div>
            <div className="flex items-start gap-[10px] text-[0.875rem] text-[var(--silver2)] mb-[0.75rem]">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] stroke-[var(--red)] fill-none stroke-[2] flex-shrink-0 mt-[3px]"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
              <span>{siteConfig.displayNumber}</span>
            </div>
            <div className="flex items-start gap-[10px] text-[0.875rem] text-[var(--silver2)] mb-[0.75rem]">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] stroke-[var(--red)] fill-none stroke-[2] flex-shrink-0 mt-[3px]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-start gap-[10px] text-[0.875rem] text-[var(--silver2)] mb-[0.75rem]">
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] stroke-[var(--red)] fill-none stroke-[2] flex-shrink-0 mt-[3px]"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <span>Senin – Minggu, 07.00 – 22.00 WIB</span>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[0.8rem] text-[var(--silver2)] gap-[0.5rem] text-center md:text-left">
          <span>© 2026 <span className="text-[var(--red)]">SJA Kaca Film</span>. All rights reserved.</span>
          <span>Jasa Pasang Kaca Film Profesional</span>
        </div>
      </div>
    </footer>
  );
}
