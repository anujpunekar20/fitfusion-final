import React from "react";
import SearchExercise from "../components/searchExercise";
import HorizontalScrollBar from "../components/horizontalScrollBar";

const Workoutmuscles = () => {
  return (
    <div className=" bg-gray-900">
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Workout Section</h1>
      </header>
      <p className="mx-4 pt-2 text-gray-300 text-center md:text-2xl text-xl">
        Welcome to the workout section of fitfusion. The most important section
        to maintain your health
      </p>
      <p className="mx-4 pt-2 text-gray-300 text-center">
        {" "}
        Select any body part from the list of these body parts and get the
        exercises related to them
      </p>
      <HorizontalScrollBar />
      <SearchExercise />
    </div>
  );
};

export default Workoutmuscles;
