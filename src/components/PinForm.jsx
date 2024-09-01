// src/components/PinForm.js
import React, { useState } from "react";

const PinForm = ({ addPin }) => {
  const [pin, setPin] = useState({
    type: "",
    title: "",
    description: "",
    date: "",
    time: "",
    media: [],
  });

  const handleChange = (e) => {
    setPin({ ...pin, [e.target.name]: e.target.value });
  };

  const handleMediaChange = (e) => {
    setPin({ ...pin, media: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPin(pin);
    setPin({
      type: "",
      title: "",
      description: "",
      date: "",
      time: "",
      media: [],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md mb-4"
    >
      <select
        name="type"
        value={pin.type}
        onChange={handleChange}
        className="border p-2 rounded mb-2 w-full"
        required
      >
        <option value="">Select Pin Type</option>
        <option value="Hazard">Hazard</option>
        <option value="Incident">Incident</option>
        <option value="Operation">Operation</option>
        <option value="Task">Task</option>
      </select>
      <input
        type="text"
        name="title"
        value={pin.title}
        onChange={handleChange}
        placeholder="Pin Title"
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <textarea
        name="description"
        value={pin.description}
        onChange={handleChange}
        placeholder="Pin Description"
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <input
        type="date"
        name="date"
        value={pin.date}
        onChange={handleChange}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <input
        type="time"
        name="time"
        value={pin.time}
        onChange={handleChange}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <input
        type="file"
        name="media"
        onChange={handleMediaChange}
        className="border p-2 rounded mb-2 w-full"
        multiple
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Pin
      </button>
    </form>
  );
};

export default PinForm;
