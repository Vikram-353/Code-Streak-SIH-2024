// src/components/PinCard.js
import React from "react";

const PinCard = ({ pin }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">
        {pin.title} ({pin.type})
      </h2>
      <p className="mb-2">{pin.description}</p>
      <p className="text-gray-600 mb-2">Date: {pin.date}</p>
      <p className="text-gray-600 mb-4">Time: {pin.time}</p>
      {pin.media.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {pin.media.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`media-${index}`}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-auto object-cover rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PinCard;
