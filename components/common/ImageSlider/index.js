import { useState } from "react";
import styles from "./styles.module.scss"





const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius:  '10px',
    backgroundSize:  'cover',
    backgroundPosition:  'center',
}
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={slideStyles}>
      <div>
        <div onClick={goToPrevious} className={styles['leftArrowStyles']}>
          ❰
        </div>
        <div onClick={goToNext} className={styles['rightArrowStyles']}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className={styles['dotsContainerStyles']}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles['dotStyle']}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;