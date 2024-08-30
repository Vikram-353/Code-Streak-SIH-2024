// src/pages/LeaveReport.js

import React, { useState } from "react";

export default function LeaveReport() {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      employeeName: "John Doe",
      leaveType: "Sick Leave",
      startDate: "2024-08-25",
      endDate: "2024-08-27",
      status: "Approved",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      leaveType: "Annual Leave",
      startDate: "2024-09-01",
      endDate: "2024-09-10",
      status: "Pending",
    },
    // Add more sample leave requests
  ]);

  const handleApprove = (id) => {
    setLeaveRequests(
      leaveRequests.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  const handleReject = (id) => {
    setLeaveRequests(
      leaveRequests.map((request) =>
        request.id === id ? { ...request, status: "Rejected" } : request
      )
    );
  };

  return (
    <div className="mx-auto w-full max-w-7xl py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Leave Report</h1>
      <p className="text-lg text-center mb-6">
        Track and manage leave requests from employees.
      </p>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Current Leave Requests</h2>
        <ul className="space-y-4">
          {leaveRequests.map((request) => (
            <li
              key={request.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
            >
              <div>
                <p>
                  <strong>Employee:</strong> {request.employeeName}
                </p>
                <p>
                  <strong>Leave Type:</strong> {request.leaveType}
                </p>
                <p>
                  <strong>Start Date:</strong> {request.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {request.endDate}
                </p>
                <p>
                  <strong>Status:</strong> {request.status}
                </p>
              </div>
              {request.status === "Pending" && (
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="text-green-500 hover:text-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
