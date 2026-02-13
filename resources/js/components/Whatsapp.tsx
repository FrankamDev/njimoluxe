// // components/WhatsAppButton.tsx
// import { MessageCircle } from 'lucide-react';

// export default function WhatsApp() {
//   const phoneNumber = '+237690461830';
//   const message = encodeURIComponent("Bonjour NJIMOLUXE ! Je suis intéressé(e) par vos services.");
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Contacter via WhatsApp"
//       className="
//         fixed bottom-6 left-6 z-50
//         flex items-center justify-center
//         w-14 h-14
//         bg-[#25D366] hover:bg-[#20bd5a]
//         text-white
//         rounded-full
//         shadow-lg hover:shadow-xl
//         transition-all duration-300
//         hover:scale-110 active:scale-95
//         ring-4 ring-[#25D366]/30 hover:ring-[#25D366]/50
//         focus:outline-none focus:ring-4 focus:ring-green-500/40
//       "
//     >
//       <MessageCircle size={28} className="stroke-[2.5]" />

//       {/* Petit point "nouveau message" animé */}
//       <span
//         className="
//           absolute -top-1 -right-1
//           w-5 h-5
//           bg-red-500
//           rounded-full
//           border-2 border-white
//           animate-pulse
//         "
//       />
//     </a>
//   );
// }


// components/WhatsAppChatbot.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const phoneNumber = '+237690461830';
  const welcomeMessage = "Bonjour ! 👋 Comment puis-je vous aider aujourd'hui ?";

  const handleSend = () => {
    if (!message.trim()) return;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setMessage('');
    setIsOpen(false); // optionnel : ferme le chat après envoi
  };

  // Focus auto sur l’input quand on ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ouvrir le chat WhatsApp"
        className={`
          fixed bottom-6 left-6 z-50
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] hover:bg-[#20bd5a]
          text-white shadow-xl
          transition-all duration-300
          hover:scale-110 active:scale-95
          ring-4 ring-[#25D366]/30 hover:ring-[#25D366]/50
        `}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} strokeWidth={2.5} />}
      </button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`
              fixed bottom-24 left-6 z-50
              w-80 sm:w-96
              bg-white rounded-2xl shadow-2xl overflow-hidden
              border border-gray-200
            `}
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                N
              </div>
              <div>
                <p className="font-medium">NJIMOLUXE</p>
                <p className="text-xs opacity-80">En ligne</p>
              </div>
            </div>

            {/* Corps du chat */}
            <div className="bg-[#E5DDD5] p-4 min-h-[180px] max-h-[400px] overflow-y-auto flex flex-col">
              {/* Message automatique */}
              <div className="bg-white rounded-tl-none rounded-2xl rounded-br-2xl p-3 mb-4 max-w-[80%] self-start shadow-sm">
                <p className="text-sm text-gray-800">{welcomeMessage}</p>
                <p className="text-xs text-gray-500 mt-1 text-right">
                  {new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>

            {/* Zone de saisie */}
            <div className="bg-[#F0F0F0] px-4 py-3 flex items-center gap-3">
              <input
                ref={inputRef}
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Votre message..."
                className="
                  flex-1 px-4 py-3 rounded-full bg-white border border-gray-300
                  focus:outline-none focus:border-green-500
                  text-gray-800 placeholder-gray-500 text-sm
                "
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className={`
                  p-3 rounded-full
                  ${message.trim() ? 'bg-[#25D366] text-white' : 'bg-gray-300 text-gray-500'}
                  transition-colors
                `}
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}