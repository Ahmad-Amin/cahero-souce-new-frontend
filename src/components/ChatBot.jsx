import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-5 right-5">
      {/* Floating Chat Button */}
      <button
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoChatbubbleEllipses size={24} />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="bg-black text-white w-80 p-4 rounded-lg shadow-xl border border-[#4675ff] absolute bottom-14 right-0 font-poppins">
          {/* Chat Header */}
          <div className="flex items-center space-x-2 mb-3">
            <img
              src="Images/Cahero Ascension_512x512 for any favicon 1 1 (1).png"
              alt="Bot Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="font-bold">CAHERO Bot</h2>
              <p className="text-gray-400 text-sm">AI Assistant</p>
            </div>
          </div>

          {/* Bot Message */}
          <p className="text-sm mb-3">
            Welcome Back! I'm CAHERO Bot, your AI assistant at CAHERO Kingdom.
            Need anything?
          </p>
          <p className="text-xs mb-4">
            Saw that you're interested in verifying your account. I'm available
            if you have questions!
          </p>

          {/* Buttons */}
          <div className="flex space-x-2 mb-3">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
              Customer Support
            </button>
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-xs">
              Schedule Event
            </button>
          </div>

          {/* Input Field */}
          <div className="flex items-center border border-[#3e3e3e] rounded-md p-2">
            <input
              type="text"
              placeholder="Ask a question"
              className="bg-transparent outline-none text-sm flex-grow"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="text-blue-500">
              <IoSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
