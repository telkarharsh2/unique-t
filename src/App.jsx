import React, { useEffect } from 'react';
import Home from './pages/Home';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;