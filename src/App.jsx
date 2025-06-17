import { useState } from 'react';
import './App.css';
import ResultPopup from './components/Analyze';

function App() {
  const [screen, setScreen] = useState('home');
  const [res_mes, setMes] = useState(null);

  const handleStartClick = () => {
    setScreen('analyze');
  };

  const handleResultClick = () => {
    setMes("Asim Cha");
  };

  const handleClosePopup = () => {
    setMes(null);
    setScreen('home');
  };

  return (
    <>
      {screen === 'home' ? (
        <div className="home-screen-container">
          <img
            src="src/assets/bin.png"
            alt="Cute Happy Trash Can"
            className="home-screen-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/200x200/cccccc/000000?text=Image+Error";
            }}
          />
          <h1 className="home-screen-title"></h1>
          <button onClick={handleStartClick} className="home-screen-button">
            Start
          </button>
        </div>
      ) : (
        <div className="analyze-screen-container">
          <div className='image-container'>
            <img src="src/assets/image-files.png" className='home-screen-image' />
          </div>
          <button onClick={handleResultClick} className="analyze-screen-button">
            Show Result
          </button>
        </div>
      )}

      {res_mes && <ResultPopup message={res_mes} onClose={handleClosePopup} />}
    </>
  );
}


export default App;
