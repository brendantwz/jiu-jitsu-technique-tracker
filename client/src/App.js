import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import TechniquesList from './components/TechniquesList';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    //TODO - Include DashboardPage after successful registration or login
    //TODO - Include TechniqueList on DashboardPage specifically tied to User upon login 
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
