"use client";

import { useEffect, useState } from "react";
import { BotMessageSquare, X } from "lucide-react";

type Message = { sender: "user" | "bot"; text: string };

const questions = [
  {
    question: "❓ How many invoices can we upload per day?",
    answer: "30–300 invoices can be uploaded per day.",
  },
  {
    question: "❓ Do you provide support on weekends?",
    answer: "Yes, our support team is available on weekends from 9 AM to 5 PM.",
  },
];

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState(0); // 0 = greeting, 1 = show questions
  const [userInput, setUserInput] = useState(""); // ✅ controlled input

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openChatBox", handleOpen);
    return () => window.removeEventListener("openChatBox", handleOpen);
  }, []);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ sender: "bot", text: "Hi 👋, welcome!" }]);
      setStep(0);
    }
  }, [isOpen, messages.length]);

  const handleUserReply = (text: string) => {
    if (!text.trim()) return; // ignore empty input
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setUserInput(""); // ✅ clear after send

    if (step === 0) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "How can I help you today?" },
        ]);
        setStep(1);
      }, 500);
    } else if (step === 1) {
      const question = questions.find((q) => q.question === text);
      setTimeout(() => {
        if (question) {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: question.answer },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: "❌ Sorry, I don’t have that info yet." },
          ]);
        }
      }, 500);
    }
  };

  return (
    <div>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 flex flex-col items-center">
          {/* Top label */}
          <span className="mb-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md animate-pulse">
            👋 Hello! Need any help?
          </span>

          {/* Chat button (open) */}
          <button
            className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-5 rounded-full shadow-lg hover:scale-110 transition-transform"
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            title="Open chat"
          >
            <BotMessageSquare className="w-9 h-9" />
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-30 -z-10"></span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2">
            <h3 className="font-semibold">Chat with Expert</h3>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              title="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-3 text-sm bg-black-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-2xl max-w-[75%] leading-snug ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white ml-auto text-right shadow-md font-medium"
                    : "bg-gray-200 text-gray-900 mr-auto text-left shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Step 1: Show questions */}
            {step === 1 &&
              questions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleUserReply(q.question)}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 mb-1"
                >
                  {q.question}
                </button>
              ))}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              className="flex-1 p-2 text-sm text-gray-900 placeholder-gray-400 outline-none"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleUserReply(userInput);
              }}
            />
            <button
              className="px-4 text-sm bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => handleUserReply(userInput)}
              aria-label="Send message"
              title="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
