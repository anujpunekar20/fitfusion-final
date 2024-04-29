import React from "react";
import bg_img from "../images/bg_img.jpg";
import img3 from "../images/img3.jpg";
import workout_female from "../images/workout_female.jpg";
import { FaAngleDown } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { PiBowlFoodFill } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";
import { useEffect, useState, useMemo } from "react";

const HomePage = () => {
  const images = useMemo(() => [bg_img, workout_female, img3], []);
  const [bgIndex, setbgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setbgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div>
      <div className="relative bg-gray-900 text-white">
        <img
          src={images[bgIndex]}
          alt="background home"
          className="absolute w-full h-full object-cover brightness-50 blur-sm"
        />
        <div className=" relative z-10 md:p-40 ml-16 md:ml-0 pt-32 mr-16 pb-10">
          <p className="text-3xl md:text-4xl py-1 font-home">SWEAT, ACHIEVE</p>
          <p className="text-3xl md:text-4xl  py-1 font-home">
            REPEAT, SUCCEED!
          </p>
          <p className=" text-gray-200 py-4 text-justify font font-home">
            Welcome to FitFusion, your premier destination for yoga and fitness
            enthusiasts. Here, we strive to cultivate a sanctuary where the
            harmony of mind, body, and spirit intertwines seamlessly. Get ready
            to unleash your potential and awaken your senses.
          </p>
          <p className=" text-gray-200 py-4 text-justify font-home">
            Whether you're a seasoned yogi, a fitness enthusiast, or someone
            just beginning their journey to a healthier lifestyle, FitFusion has
            something for everyone. From energizing yoga flows to heart-pumping
            HIIT workouts, soothing meditation sessions to nutritional guidance,
            our platform is your one-stop-shop for holistic wellness.
          </p>
          <div className="mt-6 flex items-center md:text-base text-sm">
            <button className="bg-gray-800 border border-gray-400 rounded-md px-3 py-2 font-semibold ">
              Get started
            </button>
            <div className="mx-10 cursor-pointer font-semibold flex items-center">
              Our services
              <div className="pt-1 pl-1">
                <FaAngleDown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="text-3xl md:text-4xl font-home font-semibold text-white flex items-center justify-center pt-10">
          Our services
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center mt-8 mx-6 pb-6">
          <div className="text-gray-200 bg-gray-950 rounded-lg p-4 border-4 border-gray-400">
            <h3 className="text-lg font-semibold items-center justify-center flex">
              Workouts
            </h3>
            <div className="flex items-center justify-center py-2">
              <IoIosBody size={60} />
            </div>
            <p className="text-sm text-justify">
              We provide you with the best suited workouts possible for each
              day, giving you different variety of exercises so that you are
              never bored of taking care of yourself anytime soon!
            </p>
          </div>
          {/* Diet Card */}
          <div className="text-gray-200 bg-gray-950 rounded-lg p-4 border-4 border-gray-400">
            <h3 className="text-lg font-semibold items-center justify-center flex">
              Diet
            </h3>
            <div className="flex items-center justify-center py-2">
              <PiBowlFoodFill size={60} />
            </div>
            <p className="text-sm text-justify">
              Personalized diet plans tailored to your goals and needs. Whether
              you're looking to lose weight, gain muscle, or improve your
              overall health, our nutritionists will create a customized plan
              just for you.
            </p>
          </div>
          {/* ChatBot Card */}
          <div className="text-gray-200 bg-gray-950 rounded-lg p-4 border-4 border-gray-400">
            <h3 className="text-lg font-semibold items-center justify-center flex">
              ChatBot
            </h3>
            <div className="flex items-center justify-center py-2">
              <TbDeviceAnalytics size={60} />
            </div>
            <p className="text-sm text-justify">
              Get instant answers to your questions with our ChatBot. Whether
              you're seeking workout advice, nutritional tips, or motivation,
              our ChatBot is here to assist you on your fitness journey. Ask
              anything and receive personalized responses to help you achieve
              your health and fitness goals.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0 mr-6">
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <p className="text-sm">
                FitFusion is your go-to destination for holistic wellness,
                offering a variety of services to help you achieve your fitness
                goals and live a healthier life.
              </p>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
              <p className="text-sm">
                Email: tomarshivansh12@gmail.com <br />
                Address: C/O Maulana Azad National Institute of Technology
                (MANIT), New Teaching Block, MANIT, Bhopal, MP, India
              </p>
            </div>
            <div></div>
          </div>
          <hr className="border-gray-700 my-6" />
          <div className="text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} FitFusion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
