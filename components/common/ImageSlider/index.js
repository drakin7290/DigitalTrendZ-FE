import { useState } from "react";
import styles from "./styles.module.scss"
import Image from "next/image";
import { Calendar } from "~/public/assets/svgs";



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

  return (
    <div className={styles['sliderStyles']}>
      <div>
        <div onClick={goToPrevious} className={styles['leftArrowStyles']}>
          ❰
        </div>
        <div onClick={goToNext} className={styles['rightArrowStyles']}>
          ❱
        </div>
      </div>
      <div className={styles['slideStylesWidthBackground']}>
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className={styles['slide__img']}>
            <div className={styles['desc-container']}>
              <div className={styles['desc__date']}>
                <Calendar />
                {slides[currentIndex].date}
              </div>
              <div className={styles['desc__heading']}>{slides[currentIndex].description}</div>
            </div>
        </div>
      </div>
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