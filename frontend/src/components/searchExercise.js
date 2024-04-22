import React, { useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchdata";
import ExerciseCard from "./excard";

const SearchExercise = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState("");
  const [exercisesData, setExercisesData] = useState(null);
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];

  const handleSearch = async () => {
    if (selectedBodyPart !== "") {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
        exerciseOptions
      );
      setExercisesData(data);
      console.log(data);
    } else {
      alert("Please select a body part!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md mt-8">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Exercise Database
        </h1>
        <div className="flex flex-col items-center space-y-6">
          <select
            value={selectedBodyPart}
            onChange={(e) => setSelectedBodyPart(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option disabled value="">
              Select Body Part
            </option>
            {bodyParts.map((part, index) => (
              <option className="capitalize" key={index} value={part}>
                {part}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            disabled={!selectedBodyPart}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 mx-4">
        {exercisesData &&
          exercisesData.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
      </div>
    </div>
  );
};

export default SearchExercise;

