import React, { useState, useEffect } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { AiFillBank } from "react-icons/ai";
import { Checkbox } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import CreditCardModal from "./CreditCardModal";

export default function AddFundsModal({ open, onClose }) {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [creditmodalOpen, setCreditModalOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleAddFunds = () => {
    if (paymentMethod === "card") {
      setCreditModalOpen(true);
      console.log("CreditCardModal will open");
      onClose();
    } else if (paymentMethod === "bank") {
      console.log("Open BankTransferModal");
    } else if (paymentMethod === "paypal") {
      console.log("Open PayPalModal");
    }
  };

  console.log("CreditModalOpen State:", creditmodalOpen);  // Debugging log for modal state

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-black text-white p-6 rounded-xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          <RxCross2 size={25} className="opacity-60 hover:opacity-100 ease-in-out transition duration-300"/>
        </button>
        <h1 className="text-xl font-impact">Add Funds</h1>
        <h2 className="text-md font-poppins">
          Please provide some information to add funds.
        </h2>
        <div className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-impact">Enter Amount</label>
            <input
              type="number"
              placeholder="$0.00"
              className="w-full p-2 rounded-lg text-white bg-black outline-none border border-[#2d2d2d]"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full justify-between">
            {[50, 100, 500, 1000].map((amt) => (
              <button
                key={amt}
                className="text-white bg-black outline-none border border-[#2d2d2d] px-7 py-1 rounded-lg hover:bg-[#2d2d2d] ease-in-out transition duration-200"
                onClick={() => setAmount(amt)}
              >
                ${amt}
              </button>
            ))}
          </div>
          <label className="block text-md font-impact">
            Select Payment Method
          </label>
          <div className="space-y-3 font-poppins">
            <div className="flex flex-row gap-2 items-center">
              <input
                type="radio"
                name="payment"
                value="card"
                className="w-5 h-5"
                onChange={() => setPaymentMethod("card")}
              />
              <FaRegCreditCard /> Credit/Debit Card
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input
                type="radio"
                name="payment"
                value="bank"
                className="w-5 h-5"
                onChange={() => setPaymentMethod("bank")}
              />
              <AiFillBank /> Bank Transfer
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input
                type="radio"
                name="payment"
                value="paypal"
                className="w-5 h-5"
                onChange={() => setPaymentMethod("paypal")}
              />
              <BsPaypal /> Paypal
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              name="agreeToTerms"
              sx={{
                color: "#808080",
                "&.Mui-checked": {
                  color: "#808080",
                },
                "&:hover": {
                  color: "white",
                },
              }}
              required
            />
            <span className="text-sm font-poppins text-[#808080]">
              I agree to the terms and conditions
            </span>
          </div>
          <div className="w-full">
            <button
              className="bg-[#4675ff] text-white px-7 py-2 rounded font-Inter text-sm"
              onClick={handleAddFunds}
            >
              Add Funds
            </button>
          </div>
        </div>
      </div>
      <CreditCardModal open={creditmodalOpen} onClose={() => setCreditModalOpen(false)} />
    </div>
  );
}
