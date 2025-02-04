import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaUsers, FaWallet, FaRegCalendarAlt, FaExchangeAlt, FaCogs, FaBolt } from "react-icons/fa";
import { HiRocketLaunch } from "react-icons/hi2";

const Sidebar = ({ children }) => {
  const links = [
    { name: "Opportunities", icon: <FaBolt />, path: "/opportunities" },
    { name: "Webinars", icon: <FaBook />, path: "/webinars" },
    { name: "Community", icon: <FaUsers />, path: "/community" },
    { name: "Allocations", icon: <FaCogs />, path: "/allocations" },
    { name: "Transaction", icon: <FaExchangeAlt />, path: "/transaction" },
    { name: "Wallet", icon: <FaWallet />, path: "/wallet" },
    { name: "Event", icon: <FaRegCalendarAlt />, path: "/event" },
  ];

  const opportunities = [
    "CAHERO Alquimq",
    "CAHERO Catalyst",
    "CAHERO Legacy",
    "CAHERO Evolution",
    "CAHERO Ascension",
    "CAHERO Unity",
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-black text-white p-4 h-screen overflow-y-auto fixed left-0 border-r-2 border-[#333333]">
        {/* Logo Section */}
        <h2 className="text-xl font-impact mb-6 flex flex-row items-center gap-2"><HiRocketLaunch/> My CAHERO Source</h2>

        {/* Main Navigation Links */}
        <div className="space-y-2">
          {/* Opportunities Dropdown */}
          <NavLink
              to="/opportunities"
              className={({ isActive }) =>
                `flex items-center justify-between gap-2 p-2 rounded-md hover:bg-[#2b2b2b] ease-in-out transition duration-300${
                  isActive ? "bg-[#2b2b2b]" : ""
                }`
              }
            >
              <span className="flex items-center gap-2 font-impact text-lg">
                <FaBolt /> Opportunities
              </span>
            </NavLink>
          <div className="bg-[#0a0a0a] border border-[#3b3b3b] rounded-md">
            
            <div className="p-2 space-y-1">
              {opportunities.map((item) => (
                <NavLink
                  key={item}
                  to={`/opportunities/${item.toLowerCase().replace(/ /g, "-")}`}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 font-poppins rounded-md hover:bg-[#2b2b2b] ease-in-out transition duration-300${
                      isActive ? "bg-[#2b2b2b]" : ""
                    }`
                  }
                >
                  ⚡ {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Other Links */}
          {links
            .filter((link) => link.name !== "Opportunities")
            .map(({ name, icon, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-md font-impact text-lg hover:bg-[#2b2b2b] ease-in-out transition duration-300${
                    isActive ? "bg-[#2b2b2b]" : ""
                  }`
                }
              >
                {icon} {name}
              </NavLink>
            ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[20%] p-6 h-full">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
