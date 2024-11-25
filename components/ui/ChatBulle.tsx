"use client";

import { useState } from "react";
import { MessageCircle, Bot } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ChatBubble() {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const handleChatBubbleClicked = () => {
    router.push("/chatbot");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <button
        className="bg-orange-600 text-white rounded-full p-6 shadow-lg hover:bg-orange-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleChatBubbleClicked()}
        aria-label="Ouvrir le chat"
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isHovered ? <MessageCircle size={32} /> : <Bot size={32} />}
        </motion.div>
      </button>
    </motion.div>
  );
}
