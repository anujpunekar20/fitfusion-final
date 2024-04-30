import { Route, Routes } from "react-router-dom";
import Header from "./pages/header";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Workoutmuscles from "./pages/workout_muscles";
import Diet from "./pages/diet";
import ChatBot from "./pages/chatBot";
import UserProfile from "./pages/userProfile";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/workout" element={<Workoutmuscles />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;

