import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import LobbyPage from "./pages/LobbyPage";
import QuizPage from "./pages/QuizPage";
import TerritoryPage from "./pages/TerritoryPage";
import Attackpage1 from "./components/Attackpage1";
import Defensepage1 from "./components/Defensepage1";

function App() {
  return (
    <>
    <Defensepage1 />
    <Attackpage1 />

    </>
    /*<Router>
      <Routes>
        <Route exact path="/" element={<AuthenticationPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/territory" element={<TerritoryPage />} />
      </Routes>
    </Router>
    */

export default App;
