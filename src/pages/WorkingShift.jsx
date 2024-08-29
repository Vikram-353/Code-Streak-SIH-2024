// // src/pages/WorkingShift.js

// import React, { useState } from "react";

// export default function WorkingShift() {
//   const [shifts, setShifts] = useState([
//     {
//       id: 1,
//       workerName: "Ram",
//       shift: "Morning",
//       date: "2024-08-29",
//     },
//     {
//       id: 2,
//       workerName: "Shyam",
//       shift: "Afternoon",
//       date: "2024-08-29",
//     },
//     // Add more sample shifts
//   ]);

//   const [newShift, setNewShift] = useState({
//     workerName: "",
//     shift: "",
//     date: "",
//   });

//   const handleInputChange = (e) => {
//     setNewShift({
//       ...newShift,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleAddShift = () => {
//     setShifts([...shifts, { ...newShift, id: shifts.length + 1 }]);
//     setNewShift({
//       workerName: "",
//       shift: "",
//       date: "",
//     });
//   };

//   const handleDeleteShift = (id) => {
//     setShifts(shifts.filter((shift) => shift.id !== id));
//   };

//   return (
//     <div className="mx-auto w-full max-w-7xl py-10">
//       <h1 className="text-3xl font-bold text-center mb-8">Working Shifts</h1>
//       <p className="text-lg text-center mb-6">
//         Manage and record your working shifts efficiently here.
//       </p>

//       {/* Display Existing Shifts */}
//       <div className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">Current Shifts</h2>
//         <ul className="space-y-4">
//           {shifts.map((shift) => (
//             <li
//               key={shift.id}
//               className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
//             >
//               <div>
//                 <p>
//                   <strong>Worker:</strong> {shift.workerName}
//                 </p>
//                 <p>
//                   <strong>Shift:</strong> {shift.shift}
//                 </p>
//                 <p>
//                   <strong>Date:</strong> {shift.date}
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleDeleteShift(shift.id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Add New Shift */}
//       <div className="mb-10">
//         <h2 className="text-2xl font-semibold mb-4">Assign New Shift</h2>
//         <div className="space-y-4">
//           <input
//             type="text"
//             name="workerName"
//             value={newShift.workerName}
//             onChange={handleInputChange}
//             placeholder="Worker Name"
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             type="text"
//             name="shift"
//             value={newShift.shift}
//             onChange={handleInputChange}
//             placeholder="Shift (e.g., Morning, Afternoon, Night)"
//             className="w-full p-2 border rounded-lg"
//           />
//           <input
//             type="date"
//             name="date"
//             value={newShift.date}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded-lg"
//           />
//           <button
//             onClick={handleAddShift}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             Add Shift
//           </button>
//         </div>
//       </div>

//       {/* Future Enhancements */}
//       {/* Add filtering and sorting functionalities */}
//       {/* Example: Filter by date, worker name, shift type */}
//     </div>
//   );
// }

import React, { useState } from "react";

export default function WorkingShift() {
  // State to manage existing shifts
  const [shifts, setShifts] = useState([
    {
      id: 1,
      workerName: "John Doe",
      shift: "Morning",
      date: "2024-08-29",
      handoverNotes: "Checked all equipment, everything is functional.",
      handoverAcknowledged: false,
    },
    {
      id: 2,
      workerName: "Jane Smith",
      shift: "Afternoon",
      date: "2024-08-29",
      handoverNotes: "",
      handoverAcknowledged: false,
    },
    // Add more sample shifts
  ]);

  // State to manage new shift creation
  const [newShift, setNewShift] = useState({
    workerName: "",
    shift: "",
    date: "",
  });

  // State to manage handover note editing
  const [selectedShiftId, setSelectedShiftId] = useState(null);
  const [handoverNote, setHandoverNote] = useState("");

  // Handle input change for new shift
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (selectedShiftId !== null) {
      setHandoverNote(value);
    } else {
      setNewShift((prevShift) => ({
        ...prevShift,
        [name]: value,
      }));
    }
  };

  // Add new shift
  const handleAddShift = () => {
    setShifts((prevShifts) => [
      ...prevShifts,
      {
        ...newShift,
        id: prevShifts.length + 1,
        handoverNotes: "",
        handoverAcknowledged: false,
      },
    ]);
    setNewShift({ workerName: "", shift: "", date: "" });
  };

  // Delete shift
  const handleDeleteShift = (id) => {
    setShifts((prevShifts) => prevShifts.filter((shift) => shift.id !== id));
  };

  // Select shift for handover note editing
  const handleSelectShift = (id) => {
    setSelectedShiftId(id);
    const shift = shifts.find((shift) => shift.id === id);
    setHandoverNote(shift.handoverNotes || "");
  };

  // Add or update handover note
  const handleAddHandoverNote = () => {
    setShifts((prevShifts) =>
      prevShifts.map((shift) =>
        shift.id === selectedShiftId
          ? { ...shift, handoverNotes: handoverNote }
          : shift
      )
    );
    setHandoverNote("");
    setSelectedShiftId(null);
  };

  // Acknowledge handover
  const handleAcknowledgeHandover = (id) => {
    setShifts((prevShifts) =>
      prevShifts.map((shift) =>
        shift.id === id ? { ...shift, handoverAcknowledged: true } : shift
      )
    );
  };

  return (
    <div className="mx-auto w-full max-w-7xl py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Working Shifts</h1>
      <p className="text-lg text-center mb-6">
        Manage and record your working shifts efficiently here.
      </p>

      {/* Display Existing Shifts */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Current Shifts</h2>
        <ul className="space-y-4">
          {shifts.map((shift) => (
            <li
              key={shift.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg"
            >
              <div>
                <p>
                  <strong>Worker:</strong> {shift.workerName}
                </p>
                <p>
                  <strong>Shift:</strong> {shift.shift}
                </p>
                <p>
                  <strong>Date:</strong> {shift.date}
                </p>
                <p>
                  <strong>Handover Notes:</strong>{" "}
                  {shift.handoverNotes || "None"}
                </p>
                <p>
                  <strong>Handover Status:</strong>{" "}
                  {shift.handoverAcknowledged ? "Acknowledged" : "Pending"}
                </p>
              </div>
              <div className="flex space-x-4">
                {!shift.handoverAcknowledged && (
                  <button
                    onClick={() => handleAcknowledgeHandover(shift.id)}
                    className="text-green-500 hover:text-green-700"
                  >
                    Acknowledge
                  </button>
                )}
                <button
                  onClick={() => handleSelectShift(shift.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Add/Edit Handover Note
                </button>
                <button
                  onClick={() => handleDeleteShift(shift.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add/Edit Handover Note */}
      {selectedShiftId !== null && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Add/Edit Handover Note
          </h2>
          <textarea
            name="handoverNote"
            value={handoverNote}
            onChange={handleInputChange}
            placeholder="Enter handover notes here"
            className="w-full p-2 border rounded-lg mb-4"
            rows="4"
          ></textarea>
          <button
            onClick={handleAddHandoverNote}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save Handover Note
          </button>
        </div>
      )}

      {/* Add New Shift */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Assign New Shift</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="workerName"
            value={newShift.workerName}
            onChange={handleInputChange}
            placeholder="Worker Name"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="shift"
            value={newShift.shift}
            onChange={handleInputChange}
            placeholder="Shift (e.g., Morning, Afternoon, Night)"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="date"
            name="date"
            value={newShift.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
          <button
            onClick={handleAddShift}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Shift
          </button>
        </div>
      </div>
    </div>
  );
}
