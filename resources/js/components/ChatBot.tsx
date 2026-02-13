// components/Chatbot.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Bonjour ! 👋 Je suis l’assistant NJIMOLUXE. Comment puis-je vous aider aujourd’hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Erreur');

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Oups, une petite panne... Réessayez ?" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[9999] w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-2xl hover:bg-green-500 transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400/40"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Fenêtre chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 z-[9999] w-80 sm:w-96 bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-green-700 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-800 flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div>
                  <p className="font-medium text-white">NJIMOLUXE Assistant</p>
                  <p className="text-xs text-green-200/80">Réponse instantanée</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <X size={20} />
              </button>
            </div>

            {/* Zone messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-950 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`
                      max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                      ${msg.role === 'user'
                        ? 'bg-green-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-100 rounded-bl-none'}
                    `}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none text-sm text-slate-300">
                    <span className="animate-pulse">•••</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Zone saisie */}
            <div className="p-3 border-t border-slate-700 bg-slate-900 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Tapez votre message..."
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-full text-white placeholder-slate-500 focus:outline-none focus:border-green-600 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-3 bg-green-600 text-white rounded-full hover:bg-green-500 disabled:opacity-50 transition-colors"
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