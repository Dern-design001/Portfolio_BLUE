import { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const bg = document.getElementById('bg-canvas');
    let mouseX = 50,
      mouseY = 50,
      currentX = 50,
      currentY = 50;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 100;
      mouseY = (e.clientY / window.innerHeight) * 100;
    };

    const animateBg = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      bg.style.setProperty('--mouse-x', currentX + '%');
      bg.style.setProperty('--mouse-y', currentY + '%');
      requestAnimationFrame(animateBg);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateBg();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Home />;
}

export default App;
