import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TbEdit } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const CompaniesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <button className="font-Inter bg-[#4675ff] text-white py-2 px-8 rounded-lg" onClick={() => navigate("/invester-details/add-company")}>
          Add Company
        </button>
      </div>

      <div className="w-full mt-10">
        <div className="w-full flex justify-between">
          <h1 className="font-impact text-xl">My Companies</h1>
          <button className="font-poppins text-[#4675ff] gap-2 flex flex-row items-center">
            View All <FaArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Images/image (1).png",
            "Images/image (1).png",
            "Images/image (3).png",
          ].map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Company ${index + 1}`}
                className="w-full object-cover "
              />
              {/* Hover Content */}
              <div className="absolute inset-0 bg-black border-2 border-[#333333] text-white flex flex-col justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="p-5 space-y-4">
                  <img
                    src="Images/Cahero Source_512x512 for any favicon 1 2 (1).png"
                    alt=""
                  />
                  <h3 className="text-sm font-bold font-Inter">
                    San Francisco, California, United States . 191 Contacts
                  </h3>
                  <p className="text-xs font-semibold font-Inter opacity-60">
                    501 - 1000 employees
                  </p>
                  <p className="text-sm font-poppins">
                    Source is a U.S.-based artificial intelligence (AI)
                    public-benefit startup founded in 2021. It researches and
                    develops AI to "study their safety
                  </p>
                  <div className="flex flex-row m-10">
                    <button className="gap-2 flex items-center justify-center w-1/2 text-xl font-inter">
                      <TbEdit size={30} />
                      Edit
                    </button>
                    <button className="gap-2 flex items-center justify-center w-1/2 text-xl font-inter">
                      <RxCross2 size={30} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-10">
        <div className="w-full flex justify-between">
          <h1 className="font-impact text-xl">Investors Companies</h1>
          <button className="font-poppins text-[#4675ff] gap-2 flex flex-row items-center">
            View All <FaArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Images/image (1).png",
            "Images/image (1).png",
            "Images/image (3).png",
          ].map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`Company ${index + 1}`}
                className="w-full object-cover "
              />
              {/* Hover Content */}
              <div className="absolute inset-0 bg-black border-2 border-[#333333] text-white flex flex-col justify-start items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="p-5 space-y-4">
                  <img
                    src="Images/Cahero Source_512x512 for any favicon 1 2 (1).png"
                    alt=""
                  />
                  <h3 className="text-sm font-bold font-Inter">
                    San Francisco, California, United States . 191 Contacts
                  </h3>
                  <p className="text-xs font-semibold font-Inter opacity-60">
                    501 - 1000 employees
                  </p>
                  <p className="text-sm font-poppins">
                    Source is a U.S.-based artificial intelligence (AI)
                    public-benefit startup founded in 2021. It researches and
                    develops AI to "study their safety
                  </p>
                  <div className="flex flex-row mt-10 w-full">
                    <button className="gap-2 flex items-center justify-center w-1/2 text-xl font-inter">
                      <TbEdit size={30} />
                      Edit
                    </button>
                    <button className="gap-2 flex items-center justify-center w-1/2 text-xl font-inter">
                      <RxCross2 size={30} />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesPage;
