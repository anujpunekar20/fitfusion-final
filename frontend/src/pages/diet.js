import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import days from "../utils/nonvegDietData";
import { MdNoFood } from "react-icons/md";
import { PiBowlFoodDuotone } from "react-icons/pi";

const Diet = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedMeal, setExpandedMeal] = useState([]);
  const [motivationQuote, setMotivationQuote] = useState(null);

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
    setMotivationQuote(getRandomMotivationQuote());
  };

  const toggleMeal = (dayIndex, mealIndex) => {
    const newExpandedMeals = [...expandedMeal];
    if (newExpandedMeals[dayIndex] === mealIndex) {
      newExpandedMeals[dayIndex] = null;
      setMotivationQuote(getRandomMotivationQuote());
    } else {
      newExpandedMeals[dayIndex] = mealIndex;
      setMotivationQuote(null);
    }
    setExpandedMeal(newExpandedMeals);
  };

  const getRandomMotivationQuote = () => {
    const quotes = [
      "Push yourself, because no one else is going to do it for you.",
      "The only bad workout is the one that didn't happen.",
      "Your body can stand almost anything. It's your mind that you have to convince.",
      "Success starts with self-discipline.",
      "The only way to finish is to start.",
      "Don't stop when you're tired. Stop when you're done.",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen pb-10 bg-cover">
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Weekly Diet Plan</h1>
      </header>
      <div className="m-4 text-sm md:text-base">"Welcome to our weekly culinary journey! Delve into our carefully crafted diet plan, designed to nourish your body and tantalize your taste buds.<br></br> Embrace the artistry of nutrition with our meticulously curated selection of meals, thoughtfully prepared to support your well-being. <br></br>Step into a world of flavor and vitality as we embark on this delicious adventure together. Behold, our weekly diet plan awaits, nestled within the essence of wholesome living."</div>
      <div className="container mx-auto mx px-4">
        <div className="grid grid-cols-2 gap-4 my-8">
          {/* Card 1 */}
          <motion.div
            ref={ref1}
            className="bg-gray-950 rounded-md p-6"
            initial={{ opacity: 0, y: -50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-center">Importance of Good Diet</h2>
            <div className="flex items-center justify-center"><MdNoFood size={40}/></div>
            <p className="text-gray-300">A balanced diet is essential for maintaining good health and well-being. It provides the necessary nutrients, vitamins, and minerals that our bodies need to function properly.</p>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            ref={ref2}
            className="bg-gray-950 rounded-md p-6"
            initial={{ opacity: 0, y: -50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-center">Nutritional Benefits</h2>
            <div className="flex items-center justify-center"><PiBowlFoodDuotone size={40}/></div>
            <p className="text-gray-300">Eating a variety of foods from all food groups ensures that we get the right balance of nutrients. It supports growth and development, boosts immunity, and reduces the risk of chronic diseases.</p>
          </motion.div>
        </div>
        
        {days.map((day, dayIndex) => (
          <section key={dayIndex} className="my-8">
            <button
              className="text-2xl font-bold border-gray-400 border-4 bg-gray-950 rounded-md p-6 w-full mb-2 "
              onClick={() => toggleDay(dayIndex)}
            >
              {day.day}
            </button>
            {expandedDay === dayIndex && (
              <div className="mt-4 flex">
                <div className="w-full">
                  {day.meals.map((meal, mealIndex) => (
                    <div key={mealIndex} className="mb-8">
                      <button onClick={() => toggleMeal(dayIndex, mealIndex)}>
                        <h3 className="text-2xl font-semibold hover:text-gray-300 duration-200 border-4 border-gray-400 bg-slate-950 p-3 rounded-md">
                          {meal.title}
                        </h3>
                      </button>
                      {expandedMeal[dayIndex] === mealIndex && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8 }}
                          className="flex flex-wrap items-center justify-center bg-slate-800 rounded-md mt-2 p-4"
                        >
                          <div className="w-full md:w-1/2 ">
                            <ul className="list-disc ml-10 md:text-lg">
                              {meal.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="mb-2 text-justify text-gray-300"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="mb-4 text-gray-200 text-justify ml-10 md:text-lg">
                              {meal.macronutrients}
                            </p>
                          </div>
                          <div className="w-full md:w-1/2 flex justify-center">
                            <div className="overflow-x-auto flex">
                              {meal.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`Meal ${mealIndex + 1} ${index + 1}`}
                                  className="md:w-40 md:h-40 size-44 object-cover m-2 border-4 rounded-md hover:scale-105 duration-200 border-gray-400 "
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="ml-4 flex items-center justify-start">
                  {motivationQuote && (
                    <div className="mb-4 text-3xl text-gray-400 italic ">
                      {motivationQuote}
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Diet;

