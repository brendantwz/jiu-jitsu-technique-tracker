import logo from './logo.svg';
import footer from './components/Footer.js';
import header from './components/Header.js';
import sidebar from './components/Sidebar.js';
import navbar from './components/Navigation.js';
import TechniquesList from './components/TechniquesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jiu-jitsu Techniques</h1>
      </header>
      <TechniquesList />
    </div>
  );
}

export default App;
