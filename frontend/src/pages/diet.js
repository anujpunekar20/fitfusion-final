import React, { useState } from "react";
import days from "../utils/nonvegDietData";

const Diet = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedMeal, setExpandedMeal] = useState([]);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const toggleMeal = (dayIndex, mealIndex) => {
    const newExpandedMeals = [...expandedMeal];
    if (newExpandedMeals[dayIndex] === mealIndex) {
      newExpandedMeals[dayIndex] = null;
    } else {
      newExpandedMeals[dayIndex] = mealIndex;
    }
    setExpandedMeal(newExpandedMeals);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Weekly Diet Plan</h1>
      </header>
      <div>Here is our weekly diet plan:</div>
      <div className="container mx-auto mx px-4">
        {days.map((day, dayIndex) => (
          <section key={dayIndex} className="my-8">
            <button
              className="text-2xl font-bold border-gray-400 border-4 bg-gray-950 rounded-md p-6 w-full mb-2 "
              onClick={() => toggleDay(dayIndex)}
            >
              {day.day}
            </button>
            {expandedDay === dayIndex && (
              <div className="mt-4">
                {day.meals.map((meal, mealIndex) => (
                  <div key={mealIndex} className="mb-2">
                    <button onClick={() => toggleMeal(dayIndex, mealIndex)}>
                      <h3 className="text-xl font-semibold hover:text-gray-300 duration-200 bg-slate-950 p-2 rounded-md ml-10">
                        {meal.title}
                      </h3>
                    </button>
                    {expandedMeal[dayIndex] === mealIndex && (
                      <div className="flex">
                        <div>
                          <ul className="list-disc ml-16">
                            {meal.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="mb-2 text-justify">
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p className="mb-4 text-gray-200 text-justify ml-16">
                            {meal.macronutrients}
                          </p>
                        </div>
                        <div className="flex flex-wrap justify-center">
                          {meal.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Meal ${mealIndex + 1} ${index + 1}`}
                              className="md:w-40 md:h-40 w-28 h-28 object-cover m-2"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Diet;
