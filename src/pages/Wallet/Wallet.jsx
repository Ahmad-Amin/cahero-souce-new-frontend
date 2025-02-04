import React from "react";
import Sidebar from "../../components/Layout/Sidebar";
import Navbar from "../../components/Navbar";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { GiPiggyBank } from "react-icons/gi";
import PerformanceGraphs from "../../components/graphs/PerformanceGraphs";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Sidebar>
          <div className="w-full">
            <div className="flex flex-row mb-10 items-center">
              <button
                className="font-impact text-xl flex-1 flex items-center gap-2 opacity-60 hover:opacity-100 ease-in-out transition duration-300"
                onClick={() => navigate("/")}
              >
                <FaArrowLeft />
                My Wallet
              </button>
              <button className="bg-[#4675ff] px-7 py-2 rounded-md hover:bg-[#385dcc] ease-in-out transition duration-300 font-inter font-semibold">
                Add Funds
              </button>
            </div>
            <div className="w-full flex flex-row gap-5">
              <div className="w-1/4 bg-[#0d0d0d] p-5 rounded-lg space-y-10">
                <div className="w-full flex flex-row items-center gap-2">
                  <div className="w-14 h-14 bg-[#191919] rounded-full flex items-center justify-center text-[#4675ff]">
                    <AiOutlineDollarCircle size={35} />
                  </div>
                  <h1 className="font-poppins text-lg text-[#839cc7]">
                    Total Amount
                  </h1>
                </div>
                <h1 className="font-Inter text-[#DCDCDC] text-5xl">$0</h1>
              </div>
              <div className="w-1/4 bg-[#0d0d0d] p-5 rounded-lg space-y-10">
                <div className="w-full flex flex-row items-center gap-2">
                  <div className="w-14 h-14 bg-[#dcfaf8] rounded-full flex items-center justify-center text-[#16dbcc]">
                    <GiPiggyBank size={35} />
                  </div>
                  <h1 className="font-poppins text-lg text-[#839cc7]">
                    Amount Spent
                  </h1>
                </div>
                <h1 className="font-Inter text-[#DCDCDC] text-5xl">$0</h1>
              </div>
              <div className="w-1/2 bg-[#0d0d0d]">
                <PerformanceGraphs />
              </div>
            </div>

            <div>
                <h1 className="font-impact text-2xl py-7">Recent Transaction</h1>
                <div className="bg-[#0d0d0d] rounded-lg text-[#b3b3b3] w-full h-48 flex items-center justify-center font-poppins font-semibold"> 
                    No transactions yet
                </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default Wallet;
