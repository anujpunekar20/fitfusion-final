// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { TailSpin } from "react-loader-spinner";

// // const Login = () => {
// //   const [loading, setLoading] = useState(false);

// //   return (
// //     <div className="w-full flex flex-col items-center bg-slate-900 h-screen">
// //       <h1 className="text-xl font-bold text-white mt-10">Login</h1>
// //       <div class="p-2 w-1/2 md:w-1/3">
// //         <div class="relative">
// //           <label for="message" class="leading-7 text-sm text-gray-300">
// //             Email
// //           </label>
// //           <input
// //             type="number"
// //             class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
// //           />
// //         </div>
// //       </div>
// //       <div class="p-2 w-1/2 md:w-1/3">
// //         <div class="relative">
// //           <label for="message" class="leading-7 text-sm text-gray-300">
// //             Password
// //           </label>
// //           <input class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
// //         </div>
// //       </div>
// //       <button class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg mt-4">
// //         {loading ? <TailSpin height={25} color="white" /> : "Login"}
// //       </button>
// //       <div className="mt-6 text-gray-300">
// //         <p>
// //           Do not have account?{" "}
// //           <Link to={"/registration"}>
// //             <span className="text-blue-500">Sign Up</span>
// //           </Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { TailSpin } from "react-loader-spinner";

// const API_URL = "http://localhost:5000"

// const Login = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_URL}/api/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Login failed");
//       }

//       // If login is successful, you might want to redirect user or set some state
//       console.log("Login successful!");
//       navigate("/profile");
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col items-center bg-slate-900 h-screen">
//       <h1 className="text-xl font-bold text-white mt-10">Login</h1>
//       <div className="p-2 w-1/2 md:w-1/3">
//         <div className="relative">
//           <label htmlFor="email" className="leading-7 text-sm text-gray-300">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//       </div>
//       <div className="p-2 w-1/2 md:w-1/3">
//         <div className="relative">
//           <label htmlFor="password" className="leading-7 text-sm text-gray-300">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//       </div>
//       {error && <div className="text-red-500">{error}</div>}
//       <button
//         onClick={handleLogin}
//         className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg mt-4"
//       >
//         {loading ? <TailSpin height={25} color="white" /> : "Login"}
//       </button>
//       <div className="mt-6 text-gray-300">
//         <p>
//           Do not have account?{" "}
//           <Link to={"/registration"}>
//             <span className="text-blue-500">Sign Up</span>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const API_URL = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        credentials: "include", // Send cookies with the request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
  
      // Redirect to profile page after successful login
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
      setError("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="w-full flex flex-col items-center bg-slate-900 h-screen">
      <h1 className="text-xl font-bold text-white mt-10">Login</h1>
      <div className="p-2 w-1/2 md:w-1/3">
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
      <div className="p-2 w-1/2 md:w-1/3">
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
        onClick={handleLogin}
        className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg mt-4"
      >
        {loading ? <TailSpin height={25} color="white" /> : "Login"}
      </button>
      <div className="mt-6 text-gray-300">
        <p>
          Do not have an account?{" "}
          <Link to={"/registration"}>
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
