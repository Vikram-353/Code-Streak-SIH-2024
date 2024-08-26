import React from "react";
// import "../App.css";

function Card({
  username,
  btnTtl = "View details",
  bgColor = "bg-gray-300",
  parah,
}) {
  return (
    <div className="relative max-w-xs sm:max-w-sm md:max-w-md w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* Full Width Decorative Div at the Top */}
      <div
        className={`absolute top-0 left-0 w-full h-16 rounded-b-lg ${bgColor}`}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 mt-4">
          {username}
        </h1>
      </div>
      {/* Main Content */}
      <div className="flex flex-col p-4 pt-16 h-full">
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
          {parah}
        </p>
        <div className="mt-auto">
          <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700">
            {btnTtl} →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
