import { Route, Routes } from "react-router-dom";
import Header from "./pages/header";
import Login from "./pages/login";
import Registration from "./pages/registration";
import Home from "./pages/home";
import Workoutdays from "./pages/workout_days";
import Workoutmuscles from "./pages/workout_muscles";
import Diet from "./pages/diet";
import Yoga from "./pages/yoga";
import Analytics from "./pages/analytics";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/workout/item1" element={<Workoutdays />} />
        <Route path="/workout/item2" element={<Workoutmuscles />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
