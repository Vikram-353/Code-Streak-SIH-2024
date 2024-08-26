import React from "react";

function ProfileCard({ profilePic, name, department, employeeId, shift }) {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover mb-4"
      />

      {/* Profile Details */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-1">Department: {department}</p>
        <p className="text-sm text-gray-600 mb-1">Employee ID: {employeeId}</p>
        <p className="text-sm text-gray-600">Shift: {shift}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
