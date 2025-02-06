import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import { IoLocationOutline } from "react-icons/io5";
import { IoLink } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineLaptopWindows } from "react-icons/md";
import DashboardCards from "../../components/graphs/DashboardCards";
import BookMeetingModal from "../../components/Modal/BookMeetingModal";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Sidebar>
          <div>
            <div className="w-full flex flex-row gap-5">
              <div className="w-3/5 flex flex-col space-y-5">
                <div className="bg-[#0a1226] w-full flex flex-row px-5 py-3 rounded-lg">
                  <div className="flex-1 space-y-4 w-3/5 items-center">
                    <h1 className="font-impact text-3xl">
                      Setup your wallet !
                    </h1>
                    <p className="font-poppins">
                      Connect with the right people at qualified companies with
                      new contact data
                    </p>
                    <button className="py-2 px-5 bg-[#4675ff] rounded-md text-sm font-Inter" onClick={() => navigate("/wallet")}>
                      Add Funds
                    </button>
                  </div>
                  <div className="w-2/5 flex justify-center">
                    <img src="Images/image 535.png" alt="" />
                  </div>
                </div>
                <div className="bg-[#0a0a0a] w-full px-5 py-3 rounded-lg space-y-3">
                  <h1 className="font-impact text-3xl">
                    Create your investor profile
                  </h1>
                  <p className="font-poppins opacity-60">
                    Cahero Source is a diversified private investment platform
                    that bridges investors and nonprofit organizations, creating
                    impactful partnerships across various social and
                    environmental areas. With robust donation tracking, outcome
                    reporting, and community engagement tools, Cahero source
                    empowers donors to connect with nonprofit partners, track
                    their contributions, and stay updated on the progress and
                    impact of supported initiatives.
                  </p>
                  <div>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="flex flex-row items-center gap-2 opacity-60">
                        <IoLocationOutline size={30} />
                        <h1 className="text-sm font-poppins">
                          Seattle, Washington, United States
                        </h1>
                      </div>
                      <div className="flex flex-row items-center gap-2 opacity-60">
                        <IoLink size={25} />
                        <h1 className="text-sm font-poppins">
                          Caheroequity.co
                        </h1>
                      </div>
                      <div className="flex flex-row items-center gap-2 opacity-60">
                        <BsCurrencyDollar size={25} />
                        <h1 className="text-sm font-poppins">Post-IPO Debt</h1>
                      </div>
                      <div className="flex flex-row items-center gap-2 opacity-60">
                        <IoPeopleSharp size={25} />
                        <h1 className="text-sm font-poppins">3.3k</h1>
                      </div>
                      <div className="flex flex-row items-center gap-2 opacity-60">
                        <RiBuilding2Fill size={25} />
                        <h1 className="text-sm font-poppins">10th</h1>
                      </div>
                      <div className="flex flex-row items-center gap-2 opacity-60">
                        <FaFileAlt size={20} />
                        <h1 className="text-sm font-poppins">Private</h1>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <button className="bg-[#4675ff] font-Inter text-sm py-2 px-10 mt-5 rounded-lg" onClick={() => navigate("/investor-details")}>
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/5 flex flex-col space-y-5">
                <div className="bg-[#0a0a0a] h-4/5 rounded-lg ">
                  <div className="pt-5 ml-5">
                    <h1 className="font-impact text-2xl">
                      This week on CAHERO Source
                    </h1>
                    <p className="font-poppins">Based on your interest</p>
                  </div>
                  <div className="flex flex-col font-poppins items-center h-5/6 justify-center space-y-16">
                    <div className="flex flex-row space-x-16">
                      <div className="flex flex-col items-center ">
                        <h1 className="text-6xl">16</h1>
                        <h2 className="text-xl">Funding Rounds</h2>
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className="text-6xl">$20M</h1>
                        <h2 className="text-xl">Total Fundings</h2>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-16">
                      <div className="flex flex-col items-center">
                        <h1 className="text-6xl">5</h1>
                        <h2 className="text-xl">Aquisition Recorded</h2>
                      </div>
                      <div className="flex flex-col items-center">
                        <h1 className="text-6xl">$10M</h1>
                        <h2 className="text-xl">Aquisition Amount</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0a0a0a] rounded-lg h-1/5 flex flex-row items-center justify-center gap-4 cursor-pointer hover:bg-[#303030] ease-in-out transition duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  <MdOutlineLaptopWindows size={40} />
                  <h1 className="font-impact text-3xl">
                    Book Meeting with Stakeholder
                  </h1>
                </div>
              </div>
            </div>

            <div>
              <h1 className="my-5 font-poppins text-2xl">Overview</h1>
              <DashboardCards/>
            </div>
          </div>
        </Sidebar>
      </div>
      <BookMeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
};

export default HomePage;
