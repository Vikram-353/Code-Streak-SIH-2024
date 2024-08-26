import React from "react";
import ProfileCard from "../Profile";

function Employees() {
  return (
    <div className="max-w-6xl mx-auto p-8 ">
      {/* Search Bar and See All Option */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
        <input
          type="text"
          placeholder="Search employees..."
          className="w-full max-w-lg p-3 mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button className="px-5 py-3 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-blue-600 transition">
          See All
        </button>
      </div>

      {/* Profile and Details Section */}
      <div className="flex justify-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Employee Profiles</h2>
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProfileCard
          profilePic="https://www.flaticon.com/free-icons/user"
          name="John Doe"
          department="Engineering"
          employeeId="EMP12345"
          shift="Day Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
        <ProfileCard
          profilePic="https://example.com/profile-pic2.jpg"
          name="Jane Smith"
          department="Marketing"
          employeeId="EMP67890"
          shift="Night Shift"
        />
      </div>
    </div>
  );
}

export default Employees;
