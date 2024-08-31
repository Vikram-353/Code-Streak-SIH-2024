import React from "react";

function Notice() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 mx-4 sm:mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Shift Handover Record
        </h1>
        <form>
          {/* Manager Name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="managerName"
            >
              Manager Name
            </label>
            <input
              id="managerName"
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter manager name"
            />
          </div>

          {/* Shift Date */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="shiftDate"
            >
              Shift Date
            </label>
            <input
              id="shiftDate"
              type="date"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Shift Time */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="shiftTime"
            >
              Shift Time
            </label>
            <input
              id="shiftTime"
              type="time"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Shift Notes */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="shiftNotes"
            >
              Shift Notes
            </label>
            <textarea
              id="shiftNotes"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter shift notes"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Submit Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Notice;
