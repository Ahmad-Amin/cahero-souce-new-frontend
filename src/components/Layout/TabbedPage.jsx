import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import CompaniesPage from "../../pages/Tabbed Pages/CompaniesPage";
import BackgroundInfoPage from "../../pages/Tabbed Pages/BackgroundInfoPage";
export default function TabbedPage() {
  const [activeTab, setActiveTab] = useState("background");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="w-full pt-20">
        {/* Tab Navigation */}
        <Sidebar>
          <button
            className="font-impact mb-10 text-xl flex-1 flex items-center gap-2 opacity-60 hover:opacity-100 ease-in-out transition duration-300"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft />
            Investor Details
          </button>
          <div className="flex space-x-6 border-b-2 border-[#333333] font-poppins">
            <button
              className={`pb-2 text-white ${
                activeTab === "background"
                  ? "border-b-2 border-blue-500"
                  : "text-[#808080]"
              }`}
              onClick={() => setActiveTab("background")}
            >
              Background Info
            </button>
            <button
              className={`pb-2 text-white ${
                activeTab === "companies"
                  ? "border-b-2 border-blue-500"
                  : "text-[#808080]"
              }`}
              onClick={() => setActiveTab("companies")}
            >
              Companies
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "background" && <BackgroundInfo />}
            {activeTab === "companies" && <Companies />}
          </div>
        </Sidebar>
      </div>
    </div>
  );
}

// Placeholder Components
function BackgroundInfo() {
  return <div className="text-white">
<BackgroundInfoPage/>
</div>;
}

function Companies() {
  return <div className="text-white"><CompaniesPage/></div>;
}
