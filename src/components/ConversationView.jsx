// src/components/ConversationView.js
import React from "react";
import PinCard from "./PinCard";

const ConversationView = ({ pins }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Conversation View
      </h2>
      {pins.length === 0 ? (
        <p className="text-gray-600 text-center">No pins recorded</p>
      ) : (
        <div className="space-y-4">
          {pins.map((pin, index) => (
            <PinCard key={index} pin={pin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ConversationView;
