import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Wallet from "./pages/Wallet/Wallet";
import TabbedPage from "./components/Layout/TabbedPage";
import AddCompany from "./pages/Add Company/AddCompany";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/investor-details" element={<TabbedPage/>} />
          <Route path="/investor-details/add-company" element={<AddCompany/>} />
          <Route path="*" element={<h1 className="text-center text-4xl font-impact">404 - Page Not Found</h1>} />
        </Routes>
    </Router>
  );
}
