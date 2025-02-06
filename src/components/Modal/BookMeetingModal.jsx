import React from "react";
import { TextField } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

const BookMeetingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  const textfieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#79747E",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    svg: { color: '#fff' },

    
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-black p-5 rounded-lg w-[500px]">
        <div className="w-full flex justify-between">
        <h1 className="text-xl font-impact mb-4">Book Your Meeting</h1>
        <RxCross2 size={25} className="opacity-60 hover:opacity-100 ease-in-out transition duration-300" onClick={onClose}/>
        </div>
        <div className="space-y-3">
          <div>
            <TextField
              type="text"
              className="w-full p-2 rounded bg-[#0d0d0d]"
              label="Full Name"
              sx={textfieldStyles}

            />
          </div>
          <div className="flex space-x-3">
            <div className="w-1/2">
              <TextField
                type="time"
                className="w-full p-2 rounded bg-[#0d0d0d]"
                sx={textfieldStyles}
              />
            </div>
            <div className="w-1/2">
              <TextField
                type="date"
                className="w-full p-2 rounded bg-[#0d0d0d]"
                sx={textfieldStyles}
              />
            </div>
          </div>
          <div className="w-full">
            <TextField
              sx={textfieldStyles}
              placeholder="What do you want to discuss?"
              label="Reason"
              type="view"
              rows={4}
              multiline
              className="w-full bg-[#0d0d0d]"
            />
          </div>
          <div className="w-full flex items-center justify-center">
          <button className="mt-3 py-2 px-7 bg-[#4675ff] rounded-lg font-poppins" onClick={onClose}>
            Book Meeting
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMeetingModal;
