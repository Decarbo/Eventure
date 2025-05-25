import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    type: 'single',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-10">
        {['Edit', 'Banner', 'Ticketing', 'Review'].map((step, i) => (
          <div key={i} className="flex-1 text-center">
            <div className={`w-4 h-4 rounded-full mx-auto ${i === 0 ? 'bg-[#FFE047]' : 'bg-gray-300'}`} />
            <p className={`mt-2 text-sm ${i === 0 ? 'text-[#FFE047] font-semibold' : 'text-gray-500'}`}>{step}</p>
          </div>
        ))}
      </div>

      {/* Event Details Section */}
      <h2 className="text-2xl font-bold mb-6">Event Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">Event Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the name of your event"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Event Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option>Please select one</option>
            <option value="music">Music</option>
            <option value="tech">Technology</option>
            <option value="business">Business</option>
            {/* Add more as needed */}
          </select>
        </div>
      </div>

      {/* Date & Time Section */}
      <h3 className="text-xl font-semibold mt-10 mb-4">Date & Time</h3>

      <div className="mb-4 flex items-center gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="single"
            checked={formData.type === 'single'}
            onChange={handleChange}
          />
          Single Event
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="type"
            value="recurring"
            checked={formData.type === 'recurring'}
            onChange={handleChange}
          />
          Recurring Event
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Start Time *</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Where will your event take place? *</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option>Please select one</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="bangalore">Bangalore</option>
          {/* Add more */}
        </select>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Event Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe what’s special about your event & other important details."
          rows={5}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <Link to="/banner">
        <button className="bg-[#FFE047] text-white px-6 py-2 rounded hover:bg-[#f0d240]">
          Save & Continue
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateEventForm;
