import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import TechniquesList from './components/TechniquesList';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Jiu-jitsu Techniques</h1>
    //   </header>
    //   <TechniquesList />
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
