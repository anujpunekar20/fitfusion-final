import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";

const HorizontalScrollBar = () => {
  const bodyParts = [
    "Back",
    "Cardio",
    "Chest",
    "Lower Arms",
    "Lower Legs",
    "Neck",
    "Shoulders",
    "Upper Arms",
    "Upper Legs",
    "Waist",
  ];

  return (
    <div className="flex overflow-x-auto mx-10 py-4">
      {bodyParts.map((part, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center px-4 size-60 bg-gray-200 rounded-lg shadow-md m-2 border-4 border-gray-500 hover:scale-105 duration-300"
        >
          <GiWeightLiftingUp size={55} className="mb-2" />
          <span className="text-sm font-medium">{part}</span>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;



