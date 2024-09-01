import React from "react";

const PinCard = ({ pin }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl bg-blue-500 text-white font-semibold rounded-t-lg p-3">
        {pin.title} ({pin.type})
      </h2>

      <div className="flex">
        {/* Image Section */}
        {pin.media.length > 0 && (
          <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
            <img
              src={URL.createObjectURL(pin.media[0])}
              alt="media"
              className="w-full h-48 object-cover rounded-lg shadow-sm"
            />
          </div>
        )}

        <div className="flex-1 p-4">
          <p className="text-gray-700 mb-2 text-lg">{pin.description}</p>
          <p className="text-gray-600 mb-2">
            <strong>Date:</strong> {pin.date}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Time:</strong> {pin.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PinCard;
