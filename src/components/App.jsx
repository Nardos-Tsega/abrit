import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Players from "./Players";
import TeamPage from "./TeamPage";
import Teams from "./Teams";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/:teamId" element={<TeamPage />} />
      </Routes>
    </div>
  );
}
