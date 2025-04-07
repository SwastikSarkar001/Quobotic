'use client'

import { AnimatePresence, motion } from "framer-motion";
import { BiBot } from "react-icons/bi";

import { useState, useRef, useEffect } from "react";
import { BsArrowReturnLeft, BsStopCircle } from "react-icons/bs";
import { messages } from "@/data/data";
import handleSubmit from "@/actions/ask-quobobot";
import { useFormStatus } from "react-dom";
import { useLenis } from "lenis/react";

export default function QuoboBotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)
  const [showAnimation, setShowAnimation] = useState(true)
  
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleKeyEvent = (event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "q") {
      event.preventDefault();
      toggleChat()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setShowAnimation(false); // Triggers only on the first render
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
      setIsChatOpen(false);
    }
  };

  const lenis = useLenis()

  useEffect(() => {
    if (isChatOpen) {
      lenis?.stop()
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start()
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isChatOpen, lenis]);

  const [shortcut, setShortcut] = useState<string>("");

  useEffect(() => {
    const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
    setShortcut(isMac ? "⌘Q" : "Ctrl+Q");
  }, []);

  return (
    <>
      <motion.button
        layoutId="ask-quobobot"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: '#f5f5f4',
          color: '#000',
          transition: {
            duration: 0.15,
          }
        }}
        transition={showAnimation ? { duration: 0.8, delay: 0.6 } : undefined}
        onClick={toggleChat}
        aria-labelledby="ask-quobobot"
        className={`group right-6 sm:right-10 cursor-pointer bg-primary rounded-full text-secondary fixed z-100 p-3 sm:p-4 bottom-24`}
      >
        <BiBot className="size-6 sm:size-8" />
        <div id='ask-quobobot' className="opacity-0 space-y-0.5 transition-all text-secondary group-hover:opacity-100 absolute leading-4 -z-1 text-xs sm:text-sm text-nowrap pointer-events-none top-0 group-hover:-top-16 left-1/2 -translate-x-1/2 py-2 px-2 bg-primary rounded-lg after:absolute after:size-2 after:bg-primary after:-bottom-1 after:-z-1 after:right-1/2 after:translate-x-1/2 after:rotate-45">
          <div>Ask QuoboBot</div>
          <kbd className="px-1.5 py-0.5 text-xs font-semibold text-stone-300">{shortcut}</kbd>
        </div>
      </motion.button>

      <AnimatePresence>
        {
          isChatOpen && (
            <>
              <QuoboBotChat toggleChat={toggleChat} ref={chatRef} />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-99 backdrop-blur-xs"
              />
            </>
          )
        }
      </AnimatePresence>
    </>
  );
}

function QuoboBotChat({toggleChat, ref}: {toggleChat: () => void, ref?: React.Ref<HTMLDivElement>}) {
  const formRef = useRef<HTMLFormElement | null>(null)
  const endRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fetchingAnswer, setFetchingAnswer] = useState(false)  // eslint-disable-line

  // Configure server actions here using useFormAction

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, []);

  useEffect(() => {
    const handleModalKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "q")) {
        e.preventDefault();
        toggleChat();
      }
    };
    document.addEventListener("keydown", handleModalKey);
    return () => {
      document.removeEventListener("keydown", handleModalKey);
    };
  }, [toggleChat]);

  useEffect(() => {
    const scrollableDiv = endRef.current?.parentElement;
    const handleWheel = (e: Event) => {
      e.stopPropagation();
    };
    if (scrollableDiv) {
      scrollableDiv.addEventListener('wheel', handleWheel);
    }
  
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <motion.div
      layoutId="ask-quobobot"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-102 bottom-24 right-6 sm:right-10 w-70 sm:w-80 h-96 bg-stone-900 shadow-lg rounded-lg p-2.5 sm:p-4 flex flex-col border-2 border-border/40"
    >
      <button
        onClick={toggleChat}
        aria-label="Close QuoboBot"
        title="Close QuoboBot"
        className="self-end cursor-pointer ring-2 px-1.5 rounded-full text-stone-400 hover:text-stone-200 transition-colors"
      >
        ✖
      </button>
      <div className="flex-1 mt-4 relative overflow-y-auto text-sm scrollbar-thin [mask-image:linear-gradient(to_bottom,transparent,rgb(6,15,17)_30%)]">
          {
            messages.length > 0 ? (
              <div className="text-stone-400 space-y-4 flex flex-col pr-2">
                {
                  messages.map((chat, i) => (
                    <div key={i} className={`gap-1 max-w-4/5 ${chat.user === "you" ? "self-end" : "self-start"}`}>
                      <div className={`p-2 rounded-lg flex flex-col gap-1 ${chat.user === "you" ? "bg-primary" : "bg-stone-800"} text-secondary`}>
                        <div>
                          {chat.text}
                        </div>
                        <div className={`text-xs ${chat.user === "you" ? 'text-stone-200 self-end' : 'text-stone-400'}`}>
                          {chat.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                        </div>
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
      <form
        ref={formRef}
        action={
          formData => {
            formRef.current?.reset()
            handleSubmit(formData)
            endRef.current?.scrollIntoView();
          }
        }
        className="mt-4 relative"
      >
        <input
          type="text"
          name='text'
          ref={inputRef}
          disabled={fetchingAnswer}
          placeholder={fetchingAnswer ? "QuoboBot is responding..." : "Ask QuoboBot about..."}
          className="disabled:cursor-not-allowed w-full p-2 pr-10 border rounded border-border/50 text-sm"
        />
        <SubmitButton />
      </form>
    </motion.div>
  )
}

function SubmitButton() {
  const { pending: fetchingAnswer } = useFormStatus()
  return (
    <button
      type='submit'
      aria-label='Send Prompt'
      title='Send Prompt'
      className="cursor-pointer hover:bg-stone-500/50 p-1 rounded absolute z-1 top-1/2 right-2 -translate-y-1/2"
    >
      {
        fetchingAnswer ? <BsStopCircle className="size-4" /> : <BsArrowReturnLeft className="stroke-1 size-4" />
      }
    </button>
  )
}