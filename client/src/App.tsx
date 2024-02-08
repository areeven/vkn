import React from 'react';
import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
