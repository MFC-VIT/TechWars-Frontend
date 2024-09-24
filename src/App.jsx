import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import LobbyPage from "./pages/LobbyPage";
import QuizPage from "./pages/QuizPage";
import TerritoryPage from "./pages/TerritoryPage";
import Victory from "./pages/VictoryPage";
import Defeat from "./pages/DefeatPage";

function App() {
  return (
    // <Defeat />
    // <Victory />
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<AuthenticationPage />} />
    //     <Route path="/lobby" element={<LobbyPage />} />
    //     <Route path="/quiz" element={<QuizPage />} />
    //     <Route path="/territory" element={<TerritoryPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
