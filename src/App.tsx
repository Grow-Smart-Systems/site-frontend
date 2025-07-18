import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "@src/pages/LoginPage/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
