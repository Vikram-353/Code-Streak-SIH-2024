import React, { useState } from "react";
import PinForm from "../components/PinForm";
import ConversationView from "../components/ConversationView";
import Communications from "../components/Communications";
import generatePdf from "../utils/generatePdf";

const WorkingShift = () => {
  const [pins, setPins] = useState([]);
  const [messages, setMessages] = useState([]);

  const addPin = (pin) => {
    setPins([...pins, pin]);
  };

  const handleGeneratePdf = () => {
    generatePdf(pins, messages);
  };

  return (
    <div className="container mx-auto p-6  min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Shift Management System
      </h1>

      <PinForm addPin={addPin} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        <div className="col-span-1">
          <Communications setMessages={setMessages} />
        </div>
        <div className="col-span-2 lg:col-span-2">
          <ConversationView pins={pins} />
        </div>
      </div>

      <button
        onClick={handleGeneratePdf}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200 ease-in-out"
      >
        Generate PDF Report
      </button>
    </div>
  );
};

export default WorkingShift;
