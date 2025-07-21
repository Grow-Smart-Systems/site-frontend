import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '@src/pages/LoginPage/LoginPage';
import './App.css';
import HomePage from '@src/pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
