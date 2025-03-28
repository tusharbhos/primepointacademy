import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/+918390675123"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppWidget;
