import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./pages/AuthenticationPage";
// import LobbyPage from "./pages/LobbyPage";
import QuizPage from "./pages/QuizPage";
// import TerritoryPage from "./pages/TerritoryPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lobby from "./pages/Lobby";
import { AuthProvider } from "./Providers/AuthProvider";
import GalaxyMap from "./sections/GalaxyMap";
import { QuizHandler } from "./Providers/QuizHandler";
import Admin from "./pages/Admin";
import Volunteer from "./pages/Volunteer";
import Leaderboard from "./pages/Leaderboard";
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthenticationPage />} />
          <Route
            path="/lobby"
            element={
              <AuthProvider>
                <Lobby />
              </AuthProvider>
            }
          />
          <Route
            path="/map"
            element={
              <AuthProvider>
                <GalaxyMap />
              </AuthProvider>
            }
          />
          <Route
            path="/quiz"
            element={
              <AuthProvider>
                <QuizHandler>
                  <QuizPage />
                </QuizHandler>
              </AuthProvider>
            }
          />
          <Route path="/admin-mfc" element={<Admin />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route path="/volunteer" element={<Volunteer />} />
          {/* <Route path="/territory/:id" element={<TerritoryPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
