'use client'

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BiBot } from "react-icons/bi";

import { useState, useRef, useEffect } from "react";
import { AiOutlineEnter } from "react-icons/ai";

export default function QuoboBotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
      setIsChatOpen(false);
    }
  };

  useEffect(() => {
    if (isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onClick={toggleChat}
        className={`group transition-all cursor-pointer bg-primary hover:bg-secondary rounded-full hover:scale-105 text-secondary hover:text-black fixed z-100 p-4 bottom-24 ${isChatOpen ? "-right-24 opacity-0" : "right-10 opacity-100"} transition-all`}
      >
        <BiBot className="size-8" />
        <div className="opacity-0 transition-all text-secondary group-hover:opacity-100 absolute leading-4 -z-1 text-sm text-nowrap pointer-events-none top-0 group-hover:-top-10 left-1/2 -translate-x-1/2 py-1 px-2 bg-primary rounded-full after:absolute after:size-2 after:bg-primary after:-bottom-1 after:-z-1 after:right-1/2 after:translate-x-1/2 after:rotate-45">
          Ask QuoboBot
        </div>
      </motion.button>
      <AnimatePresence>
        {isChatOpen && (
          <QuoboChat toggleChat={toggleChat} ref={chatRef} />
        )}
      </AnimatePresence>
    </>
  );
}

type MessageType = {
  user: "you" | "bot";
  dataType: "text" | "image" | "file" | "audio";
  text?: string;
  image?: string;
  audio?: string;
  file?: string;
  timestamp: Date;
};

const messages: MessageType[] = [
  {
    user: "you",
    dataType: "text",
    text: "Hi, how can I help you today?",
    timestamp: new Date("2025-02-15T09:00:00"),
  },
  {
    user: "bot",
    dataType: "text",
    text: "I am looking for a job",
    timestamp: new Date("2025-02-15T09:05:00"),
  },
  {
    user: "you",
    dataType: "text",
    text: "Sure, I can help you with that. Can you tell me more about your skills?",
    timestamp: new Date("2025-02-15T09:10:00"),
  },
  {
    user: "bot",
    dataType: "text",
    text: "I am a web developer",
    timestamp: new Date("2025-02-15T09:15:00"),
  },
  {
    user: "you",
    dataType: "text",
    text: "Great! We have a few openings for web developers. Can you share your resume with me?",
    timestamp: new Date("2025-02-15T09:20:00"),
  },
  {
    user: "bot",
    dataType: "text",
    text: "Sure, I will send it to you right away",
    timestamp: new Date("2025-02-15T09:25:00"),
  },
  {
    user: "you",
    dataType: "text",
    text: "Thank you! I will get back to you soon.",
    timestamp: new Date("2025-02-15T09:30:00"),
  },
  {
    user: "you",
    dataType: "text",
    text: "Hi, how can I help you today?",
    timestamp: new Date("2025-02-16T10:00:00"),
  },
  {
    user: "bot",
    dataType: "text",
    text: "I am looking for a job",
    timestamp: new Date("2025-02-16T10:05:00"),
  },
  {
    user: "you",
    dataType: "text",
    text: "Sure, I can help you with that. Can you tell me more about your skills?",
    timestamp: new Date("2025-02-16T10:10:00"),
  },
  {
    user: "bot",
    dataType: "text",
    text: "I am a web developer",
    timestamp: new Date("2025-02-16T10:15:00"),
  },
  {
    user: "you",
    dataType: "text",
    text: "Great! We have a few openings for web developers. Can you share your resume with me?",
    timestamp: new Date("2025-02-16T10:20:00"),
  },
  {
    user: "bot",
    dataType: "text",
    text: "Sure, I will send it to you right away",
    timestamp: new Date("2025-02-16T10:25:00"),
  },
  {
    user: "you",
    dataType: "text",
    text: "Thank you! I will get back to you soon.",
    timestamp: new Date("2025-02-16T10:30:00"),
  },
];

function QuoboChat({toggleChat, ref}: {toggleChat: () => void, ref?: React.Ref<HTMLDivElement>}) {
  const endRef = useRef<HTMLDivElement | null>(null)
  const [chats, setChats] = useState<MessageType[]>(messages)
  const addChat = (chat: MessageType) => {
    setChats([...chats, chat])
  }
  const [input, setInput] = useState("")
  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [chats]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.15 }}
      className="fixed z-102 bottom-24 right-10 w-80 h-96 bg-stone-900 shadow-lg rounded-lg p-4 flex flex-col border-2 border-border/40"
    >
      <button
        onClick={toggleChat}
        className="self-end cursor-pointer ring-2 px-1.5 rounded-full text-stone-400 hover:text-stone-200 transition-colors"
      >
        ✖
      </button>
      <div className="flex-1 mt-4 relative overflow-y-auto text-sm scrollbar-thin">
          {
            chats.length > 0 ? (
              <div className="text-stone-400 space-y-4 flex flex-col">
                {
                  chats.map((chat, i) => (
                    <div key={i} className={`flex gap-2 max-w-4/5 ${chat.user === "you" ? "self-end" : "self-start"}`}>
                      <div className={`p-2 rounded-lg ${chat.user === "you" ? "bg-primary text-secondary" : "bg-stone-800 text-stone-400"}`}>
                        {chat.text}
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="absolute top-1/2 left-1/2 -translate-1/2 flex items-center gap-1">
                <div className="text-nowrap text-stone-400">Say hello to QuoboBot!</div><div className="mb-1">👋</div>
              </div>
            )
          }
        <div ref={endRef} />
      </div>
      <div className="mt-4 relative">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && input.trim()) {
              addChat({
                user: "you",
                dataType: "text",
                text: input.trim(),
                timestamp: new Date(),
              });
              setInput("");
            }
          }}
          placeholder="Type your message..."
          className="w-full p-2 pr-9 border rounded border-border/50 text-sm"
        />
        <div className="absolute top-1/2 right-2 -translate-y-1/2"><AiOutlineEnter className="stroke-3 size-5" /></div>
      </div>
    </motion.div>
  )
}