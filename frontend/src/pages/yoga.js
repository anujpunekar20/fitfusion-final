import React from "react";
import yoga from "../images/yoga.jpg";

const Yoga = () => {
  return (
    <div className="bg-black text-white">
      <div>
        <div className="text-3xl font-semibold flex items-center justify-center p-6">
          Yoga
        </div>
        <div className="font-home md:text-xl flex flex-col text-base justify-between items-start">
          {/* <p className="text-gray-300">
            "Yoga is the journey of the self, through the self, to the self." -
            The Bhagavad Gita
          </p> */}
          <p>Welcome to the yoga section of Fitfusion!</p>
          <p>Here we will give you a great view on different kinds of yoga asanas and provide you with best possible way to do these tough looking yoga asanas in a way more easier way.</p>
          <img className="w-1/2 h-auto blur-sm self-end" alt="" src={yoga}></img>
        </div>
      </div>
    </div>
  );
};
export default Yoga;