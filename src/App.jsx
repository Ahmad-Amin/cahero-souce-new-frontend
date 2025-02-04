import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Wallet from "./pages/Wallet/Wallet";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="*" element={<h1 className="text-center text-2xl">404 - Page Not Found</h1>} />
        </Routes>
    </Router>
  );
}
