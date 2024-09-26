import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
import LobbyPage from "./pages/LobbyPage";
import QuizPage from "./pages/QuizPage";
import TerritoryPage from "./pages/TerritoryPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lobby from "./pages/Lobby";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthenticationPage />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/map" element={<LobbyPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/territory/:id" element={<TerritoryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
