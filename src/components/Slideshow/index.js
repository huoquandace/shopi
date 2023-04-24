import styles from './Slideshow.module.scss'
import { useEffect, useState, useRef } from 'react';


const colors = ["https://dummyimage.com/1980x1080/999/fff&text=lorem", "https://dummyimage.com/1980x1080/999/fff&text=ipsum", "https://dummyimage.com/1980x1080/999/fff&text=dolor"];

export default function Slideshow({ delay=2000, height='100%', width='100%' }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() { if (timeoutRef.current) clearTimeout(timeoutRef.current); }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === colors.length - 1 ? 0 : prevIndex + 1), delay);
    return () => resetTimeout();
  }, [index, delay]);

  return (
    <div className={styles.Slideshow} style={{width, height}}>
      <div className={styles.SlideshowSlider} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
        {colors.map((backgroundColor, index) => (
          <img className={styles.Slide} key={index} src={ backgroundColor } alt=''/>
        ))}
      </div>

      <div className={styles.SlideshowDots}>
        {colors.map((_, idx) => (
          <div key={idx} className={`${styles.SlideshowDot} ${index === idx ? styles.active : ""}`} onClick={() => { setIndex(idx); }} ></div>
        ))}
      </div>
    </div>
  );
}

