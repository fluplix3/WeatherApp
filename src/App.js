import './css/normalize.css'
import './css/App.css';
import LeftSide from './leftSide/LeftSide';
import RightSide from './rightSide/RightSide';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const html = document.querySelector('html');
  const body = document.querySelector('body')
  if (darkMode) {
    html.classList.add('dark-mode');
    body.classList.add('dark-mode');
  } else {
    html.classList.remove('dark-mode');
    body.classList.remove('dark-mode');
  }

  return (
    <main>
      <LeftSide darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
      <RightSide darkMode={darkMode} />
    </main>
  );
}

export default App;