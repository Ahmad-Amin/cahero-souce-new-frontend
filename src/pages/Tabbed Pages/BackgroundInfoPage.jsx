import React from 'react'

const BackgroundInfoPage = () => {
  return (
    <div className="w-full mx-auto p-6 bg-black text-white font-poppins space-y-10">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Saba Abbas"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Date of Birth</label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Nationality</label>
          <input
            type="text"
            placeholder="Pakistan"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
      </div>

      {/* Registered Address */}
      <h2 className="text-lg font-semibold mb-2">Registered Address</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Country</label>
          <input
            type="text"
            placeholder="Pakistan"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">City</label>
          <input
            type="text"
            placeholder="Islamabad"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Address</label>
          <input
            type="text"
            placeholder="123 colony xyz house"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
      </div>

      {/* Background Info */}
      <h2 className="text-lg font-semibold mb-2">Background</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Field</label>
          <input
            type="text"
            placeholder="Information Technology"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Experience</label>
          <input
            type="text"
            placeholder="15 Years"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Interest</label>
          <input
            type="text"
            placeholder="Investment"
            className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none "
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundInfoPage