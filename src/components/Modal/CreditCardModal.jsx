import { Box, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

export default function CreditCardModal({ open, onClose }) {
  const textfieldStyles = {
    "& .MuiInput-root": {
      color: "#ffffff",
      fontFamily: "Poppins",
      "&:before": {
        content: '""', // Necessary for pseudo-element to work
        borderBottom: "2px solid #ababab", // Explicit bottom border styling
      },
      "&:hover:before": {
        borderBottom: "2px solid #ffffff", // Optional: if you want hover effect
      },
    },
    "& .MuiInputLabel-standard": {
      color: "#ababab",
    },
  };

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

  console.log("CreditCardModal Open State:", open);

  if (!open) return null;

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
          <RxCross2
            size={25}
            className="opacity-60 hover:opacity-100 ease-in-out transition duration-300"
          />
        </button>
        <h1 className="text-xl font-impact">Credit/Debit Card Details</h1>
        <h2 className="text-md font-poppins">
          Please fill out this form to add card.
        </h2>
        <div className="w-5/6 space-y-6 mt-5">
          <Box sx={{ position: "relative" }}>
            <TextField
              id="full-name"
              label="Full Name"
              variant="standard"
              type="text"
              className="w-full"
              sx={textfieldStyles}
            />
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2">
              <img
                src="Images/icons8-mastercard-48.png"
                alt="Mastercard"
                style={{ width: "24px", height: "auto" }}
              />
            </span>
          </Box>
          <TextField
            id="credit-card-number"
            label="Credit Card Number"
            variant="standard"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className="w-full"
            sx={textfieldStyles}
          />
          <div className="flex justify-between">
            <TextField
              id="expiry-date"
              label="Expiry Date"
              variant="standard"
              className="w-1/3"
              sx={textfieldStyles}
            />
            <TextField
              id="cvv-pin"
              label="CVV"
              variant="standard"
              className="w-1/3"
              sx={textfieldStyles}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
