import { useState } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Container from "~/components/base/Container";
import BannerItem from "./BannerItem";
import Image from "next/image";
import { Calendar } from "~/public/assets/svgs";



const ImageSlider = () => {
  const slides = [
    {
      url:'https://images.unsplash.com/photo-1681589436610-ee3b350e57d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      description: 'csjci cij jcijc jicj jicjs jis sxdc',
      date: '23/02/2004'
    },
    {
      url:'https://images.unsplash.com/photo-1681651987346-a6db3ba3441f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      description: 'csjci cij jcijc jicj jicjs jis sxdc',
      date: '10/03/2026'
    },
    {
      url:'https://images.unsplash.com/photo-1682106446688-19a29ffb0b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 
      description: 'cs mot cai chuyen gi do s jis sxdc',
      date: '05/11/2023'
    },
  ]
  
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
      <div className={styles['slider']}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={{
            nextEl: '.' + styles['navigation-right'],
            prevEl: '.' + styles['navigation-left'],
          }}
          // spaceBetween={device === 'extra-small' ? 20 : 40}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ el: '.' + styles['swiper-pagination'], clickable: true }}
        >
          {slides?.map((item, index) => {
            return (
              <SwiperSlide>
                <BannerItem image={item?.url} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={`${styles['swiper-pagination']} swiper-pagination`}></div>
      </div>
  );
};

export default ImageSlider;

// return (
//   <div className={styles['sliderStyles']}>
//     <div>
//       <div onClick={goToPrevious} className={styles['leftArrowStyles']}>
//         ❰
//       </div>
//       <div onClick={goToNext} className={styles['rightArrowStyles']}>
//         ❱
//       </div>
//     </div>
//     <div className={styles['slideStylesWidthBackground']}>
//       <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className={styles['slide__img']}>
//           <div className={styles['desc-container']}>
//             <div className={styles['desc__date']}>
//               <Calendar />
//               {slides[currentIndex].date}
//             </div>
//             <div className={styles['desc__heading']}>{slides[currentIndex].description}</div>
//           </div>
//       </div>
//     </div>
//     <div className={styles['dotsContainerStyles']}>
//       {slides.map((slide, slideIndex) => (
//         <div
//           className={styles['dotStyle']}
//           key={slideIndex}
//           onClick={() => goToSlide(slideIndex)}
//         >
//           ●
//         </div>
//       ))}
//     </div>
//   </div>
// );