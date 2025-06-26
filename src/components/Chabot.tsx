import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks! We'll get back to you soon or call us directly at (07) 1234 5678.",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div>
      {/* Floating button */}
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 rounded-full p-4 shadow-lg z-50"
        >
          <MessageCircle className="text-black" size={24} />
        </Button>
      )}

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-lg shadow-xl flex flex-col z-50 border border-gray-200">
          <div className="flex items-center justify-between bg-yellow-500 text-black font-bold px-4 py-3 rounded-t-lg">
            <span>Chat with us</span>
            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 max-h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="flex items-center gap-2 p-3 border-t bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none"
            />
            <button onClick={handleSend}>
              <SendHorizonal className="text-blue-500 hover:text-blue-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
