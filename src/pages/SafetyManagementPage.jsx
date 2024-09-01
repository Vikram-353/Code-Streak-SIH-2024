import React, { useState } from "react";
import safetypdf from "../utils/safetypdf";

const SafetyManagementPage = () => {
  const [hazards, setHazards] = useState([]);
  const [controls, setControls] = useState([]);
  const [monitoring, setMonitoring] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);

  const [newHazard, setNewHazard] = useState("");
  const [newControl, setNewControl] = useState("");
  const [newMonitoring, setNewMonitoring] = useState("");
  const [newResponsibility, setNewResponsibility] = useState("");

  const handleAddHazard = () => {
    setHazards([...hazards, newHazard]);
    setNewHazard("");
  };

  const handleAddControl = () => {
    setControls([...controls, newControl]);
    setNewControl("");
  };

  const handleAddMonitoring = () => {
    setMonitoring([...monitoring, newMonitoring]);
    setNewMonitoring("");
  };

  const handleAddResponsibility = () => {
    setResponsibilities([...responsibilities, newResponsibility]);
    setNewResponsibility("");
  };

  const handleGeneratePdf = () => {
    safetypdf(hazards, controls, monitoring, responsibilities);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Safety Management Plan
      </h1>

      {/* Hazard Identification */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Hazard Identification
        </h2>
        <input
          type="text"
          value={newHazard}
          onChange={(e) => setNewHazard(e.target.value)}
          placeholder="Enter new hazard"
          className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddHazard}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Add Hazard
        </button>
        <ul className="mt-4">
          {hazards.map((hazard, index) => (
            <li key={index} className="border-b py-2 text-gray-700">
              {hazard}
            </li>
          ))}
        </ul>
      </div>

      {/* Control Mechanisms */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Control Mechanisms
        </h2>
        <input
          type="text"
          value={newControl}
          onChange={(e) => setNewControl(e.target.value)}
          placeholder="Enter new control mechanism"
          className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddControl}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Add Control
        </button>
        <ul className="mt-4">
          {controls.map((control, index) => (
            <li key={index} className="border-b py-2 text-gray-700">
              {control}
            </li>
          ))}
        </ul>
      </div>

      {/* Monitoring */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Monitoring
        </h2>
        <input
          type="text"
          value={newMonitoring}
          onChange={(e) => setNewMonitoring(e.target.value)}
          placeholder="Enter monitoring details"
          className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddMonitoring}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Add Monitoring
        </button>
        <ul className="mt-4">
          {monitoring.map((item, index) => (
            <li key={index} className="border-b py-2 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Responsibilities
        </h2>
        <input
          type="text"
          value={newResponsibility}
          onChange={(e) => setNewResponsibility(e.target.value)}
          placeholder="Enter responsibility details"
          className="border p-3 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddResponsibility}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Add Responsibility
        </button>
        <ul className="mt-4">
          {responsibilities.map((item, index) => (
            <li key={index} className="border-b py-2 text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Dashboard Overview */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Dashboard Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Hazards
            </h3>
            <ul>
              {hazards.length === 0 ? (
                <p className="text-gray-600">No hazards recorded.</p>
              ) : (
                hazards.map((hazard, index) => (
                  <li key={index} className="border-b py-2 text-gray-700">
                    {hazard}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Control Mechanisms
            </h3>
            <ul>
              {controls.length === 0 ? (
                <p className="text-gray-600">No control mechanisms recorded.</p>
              ) : (
                controls.map((control, index) => (
                  <li key={index} className="border-b py-2 text-gray-700">
                    {control}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Monitoring
            </h3>
            <ul>
              {monitoring.length === 0 ? (
                <p className="text-gray-600">No monitoring details recorded.</p>
              ) : (
                monitoring.map((item, index) => (
                  <li key={index} className="border-b py-2 text-gray-700">
                    {item}
                  </li>
                ))
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Responsibilities
            </h3>
            <ul>
              {responsibilities.length === 0 ? (
                <p className="text-gray-600">No responsibilities recorded.</p>
              ) : (
                responsibilities.map((item, index) => (
                  <li key={index} className="border-b py-2 text-gray-700">
                    {item}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Generate PDF Button */}
      <div className="text-center">
        <button
          onClick={handleGeneratePdf}
          className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
        >
          Generate PDF Overview
        </button>
      </div>
    </div>
  );
};

export default SafetyManagementPage;
