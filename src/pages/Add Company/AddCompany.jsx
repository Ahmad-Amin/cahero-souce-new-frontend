import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCompany = () => {
  const navigate = useNavigate();
  const [uploadFile, setUploadFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [mediaFile, setMediaFile] = useState(null);

  const handleFileChange = (e, setFile) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };
  return (
    <div>
      <Navbar />
      <div className="pt-20 w-full">
        <Sidebar>
          <div className="w-full mx-auto bg-black text-white font-poppins space-y-10">
            <button
              className="font-impact text-xl flex mb-5 items-center gap-2 opacity-60 hover:opacity-100 ease-in-out transition duration-300"
              onClick={() => navigate("/investor-details")}
            >
              <FaArrowLeft />
              Add Company
            </button>
            <h1 className="font-poppins text-lg mb-10">
              Please provide some information to add company.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Optemas Tech"
                  className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Industry
                </label>
                <select className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none">
                  <option value="" disabled selected>
                    Select an industry
                  </option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="real_estate">Real Estate</option>
                  <option value="automotive">Automotive</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="USA"
                  className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                />
              </div>
            </div>


            <div className="space-y-3">
              {/* Background Info */}
              <h2 className="text-xl font-impact mb-2">
                Company Description
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    About the Company
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter Your Company Description"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Key Highlights
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., revenue growth, unique product"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Background Info */}
              <h2 className="text-xl font-impact mb-2">Financial Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Funding Goal
                  </label>
                  <input
                    type="number"
                    placeholder="$0.00"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Valuation
                  </label>
                  <input
                    type="number"
                    placeholder="$0.00"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Revenue
                  </label>
                  <input
                    type="number"
                    placeholder="$0.00"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none "
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-impact mb-2">
                Supporting Documents & Media
              </h2>
              <p className="font-poppins text-md">
                For pitch decks, business plans, or financial reports
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Upload
                  </label>
                  <label className="flex items-center gap-2 w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md cursor-pointer">
                    <FaCloudUploadAlt className="text-xl" />
                    {uploadFile ? uploadFile.name : "Doc, PDF"}
                    <input
                      type="file"
                      accept=".doc,.docx,.pdf"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setUploadFile)}
                    />
                  </label>
                </div>

                {/* Logo (JPG, PNG) */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Logo
                  </label>
                  <label className="flex items-center gap-2 w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md cursor-pointer">
                    <FaCloudUploadAlt className="text-xl" />
                    {logoFile ? logoFile.name : "JPG, PNG"}
                    <input
                      type="file"
                      accept=".jpg,.png"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setLogoFile)}
                    />
                  </label>
                </div>

                {/* Image & Video (MP4, PNG) */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Image & Video
                  </label>
                  <label className="flex items-center gap-2 w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md cursor-pointer">
                    <FaCloudUploadAlt className="text-xl" />
                    {mediaFile ? mediaFile.name : "MP4, PNG"}
                    <input
                      type="file"
                      accept=".mp4,.png"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setMediaFile)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {/* Background Info */}
              <h2 className="text-xl font-impact mb-2">Contact Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    placeholder="Shery Brother"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="shery637@gnail.com"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="+9285689275"
                    className="w-full bg-[#0e0e0e] text-[#858585] p-3 rounded-md focus:outline-[#333333] outline-none "
                  />
                </div>
              </div>
            </div>

            <div className="pb-10">
            <button className="bg-[#4675ff] text-white font-poppins text-sm py-2 px-7 rounded-md">
              Save & Add
            </button>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default AddCompany;
