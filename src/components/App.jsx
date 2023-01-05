import { Route, Routes } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Home from "./Home";
import Navbar from "./Navbar";
import Player from "./Player";
import Players from "./Players";
import Team from "./Team";
import TeamPage from "./TeamPage";
import Teams from "./Teams";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />}>
          <Route path=":playerId" element={<Player />} />
          <Route
            path=""
            element={
              <div className="sidebar-instruction">
                <h1>Select player</h1>
              </div>
            }
          />
        </Route>
        <Route path="/teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route
            path=""
            element={
              <div className="sidebar-instruction">
                <h1>Select team</h1>
              </div>
            }
          />
        </Route>
        <Route path="/:teamId" element={<TeamPage />} />
        <Route path="/:teamId/articles" element={<Articles />}>
          <Route path=":articleId" element={<Article />} />
          <Route
            path=""
            element={
              <div className="sidebar-instruction">
                <h1>Select article</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}
