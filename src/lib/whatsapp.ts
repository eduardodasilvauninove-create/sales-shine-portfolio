export const WHATSAPP_PHONE = "5511969369888";
export const WHATSAPP_MESSAGE =
  "Olá, vim pelo site e gostaria de mais informações.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const openWhatsApp = () => {
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
};
