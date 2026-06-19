import { useEffect, useState } from 'react';
import '../styles/FloatingButtons.css';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <button className="fab-btn" onClick={() => alert('Become a Member form modal/link placeholder')}>
        <span className="icon">📝</span>
        BECOME A MEMBER
      </button>

      <button
        className={`scroll-top-btn ${showScrollTop ? '' : 'hidden'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ▲
      </button>
    </>
  );
}
