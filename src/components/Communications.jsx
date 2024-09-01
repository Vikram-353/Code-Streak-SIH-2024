// src/components/Communications.js
import React, { useState, useEffect } from "react";

const Communications = ({ setMessages }) => {
  const [messages, localSetMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Load messages from local storage on component mount
    const savedMessages =
      JSON.parse(localStorage.getItem("communications")) || [];
    localSetMessages(savedMessages);
  }, []);

  useEffect(() => {
    // Save messages to local storage whenever they change
    localStorage.setItem("communications", JSON.stringify(messages));
    setMessages(messages);
  }, [messages, setMessages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString(); // Capture current date and time
    const newMessages = [...messages, { text: message, timestamp }];
    localSetMessages(newMessages);
    setMessage("");
  };

  const handleClearMessages = () => {
    localStorage.removeItem("communications");
    localSetMessages([]);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Communications
      </h2>
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col space-y-2">
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message here..."
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
      <div className="space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-1">{msg.timestamp}</p>
            <p className="text-gray-800">{msg.text}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleClearMessages}
        className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Clear Communications
      </button>
    </div>
  );
};

export default Communications;
