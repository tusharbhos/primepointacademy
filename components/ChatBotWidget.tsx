"use client";
import { FaComments } from 'react-icons/fa';
import { useState } from 'react';

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        <FaComments size={24} />
      </button>
      {/* Chat Box (demo implementation) */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white border rounded shadow-lg z-50">
          <div className="p-4">
            <h4 className="font-bold mb-2">Chat with us!</h4>
            <p className="text-gray-600">
              This is a demo chat box. Integrate your chat solution here.
            </p>
            <button onClick={toggleChat} className="mt-4 text-blue-600 hover:underline">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotWidget;
