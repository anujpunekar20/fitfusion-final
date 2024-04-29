// import React from "react";
// import { useState } from "react";
// import { TailSpin } from "react-loader-spinner";
// import { Link } from "react-router-dom";

// const API_URL = "http://localhost:5000"

// const Registration = () => {
//   const [loading, setLoading] = useState(false);
//   return (
//     <div className="w-full flex flex-col items-center bg-slate-900 h-screen ">
//       <>
//         <h1 className="text-xl font-bold mt-8 text-white">Sign Up</h1>
//         <div class="p-2 w-1/2 md:w-1/2">
//           <div class="relative">
//             <label for="message" class="leading-7 text-sm text-gray-300">
//               Name
//             </label>
//             <input
//               class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//         <div className="p-2 w-1/2 md:w-1/2">
//           <div class="relative">
//             <label for="message" class="leading-7 text-sm text-gray-300">
//               Email
//             </label>
//             <input
//               type="number"
//               class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//         <div className="p-2 w-1/2 md:w-1/2">
//           <div class="relative">
//             <label for="message" class="leading-7 text-sm text-gray-300">
//               Password
//             </label>
//             <input
//               type="password"
//               class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//         </div>
//         <button
//           class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg mt-4"
//         >
//           {loading ? <TailSpin height={25} color="white" /> : "Sign Up"}
//         </button>
//       </>
//       <div className="mt-6 text-gray-300">
//         <p>
//           Already have an account?{" "}
//           <Link to={"/login"}>
//             <span className="text-blue-500">Login</span>
//           </Link>
//         </p>
//       </div>
//       <div id="recaptcha-container"></div>
//     </div>
//   );
// };

// export default Registration;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const API_URL = "http://localhost:5000";

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      console.log("Registration successful!");
      // Redirect the user to login page after successful registration
      window.location.href = "/login";
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center bg-slate-900 h-screen ">
      <>
        <h1 className="text-xl font-bold mt-8 text-white">Sign Up</h1>
        <div className="p-2 w-1/2 md:w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2 md:w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2 md:w-1/2">
          <div className="relative">
            <label htmlFor="password" className="leading-7 text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          onClick={handleRegister}
          className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg mt-4"
        >
          {loading ? <TailSpin height={25} color="white" /> : "Sign Up"}
        </button>
      </>
      <div className="mt-6 text-gray-300">
        <p>
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-blue-500">Login</span>
          </Link>
        </p>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Registration;
