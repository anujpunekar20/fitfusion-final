// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/userProfile", {
//           method: "GET",
//           credentials: "include", // include cookies in the request
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch user profile");
//         }

//         const userData = await response.json();
//         setUser(userData);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!user) {
//     // Redirect to login page if user is not authenticated
//     navigate("/login");
//     return null;
//   }

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       {/* Add more profile data here */}
//     </div>
//   );
// };

// export default UserProfile;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/userProfile", {
          method: "GET",
          credentials: "include", // include cookies in the request
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login page if user is not authenticated
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white mb-2">User Profile</h1>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-700">Name: {user.name}</p>
        <p className="text-lg font-semibold text-gray-700">Email: {user.email}</p>
        {/* Add more profile data here */}
      </div>
    </div>
  );
};

export default UserProfile;
