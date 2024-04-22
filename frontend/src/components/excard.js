import React from "react";

const ExerciseCard = ({ exercise }) => {
  const { name, equipment, bodyPart, gifUrl, target } = exercise;

  return (
    <div className=" bg-gray-950 text-gray-300 p-4 rounded-md shadow-md mb-4 border-4 border-gray-400">
      <h2 className="text-xl font-semibold mb-2 capitalize text-center">{name}</h2>
      <div className="mb-2">
        <img src={gifUrl} alt={name} className="w-full h-auto rounded-md" />
      </div>
      <p>
        <strong>Body Part:</strong> {bodyPart}
      </p>
      <p> 
        <strong>Equipment:</strong> {equipment}
      </p>
      <p>
        <strong>Target:</strong> {target}
      </p>
    </div>
  );
};

export default ExerciseCard;
