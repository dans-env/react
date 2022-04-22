import { useEffect } from 'react';

//used css
import './assets/css/spotify.css';

//used components
import MainTemplate from './templates/MainTemplate';

const App = () => {

  const disableRightClick = () => {
    window.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    });
  };

  useEffect(() => {
    disableRightClick();
  });

  return (
    <MainTemplate />
  );
};

export default App;
