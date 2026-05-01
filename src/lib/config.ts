// lib/config.ts

export const siteConfig = {
  whatsappNumber: "6281318808910",
  displayNumber: "+62 813-1880-8910",
  defaultMessage: "Halo SJA Kaca Film, saya ingin konsultasi mengenai pemasangan kaca film. Bisa minta informasi lebih lanjut?",
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || siteConfig.defaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};