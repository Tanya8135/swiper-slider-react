import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import css from './App.module.css';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export const App = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={css.mySwiper}
      >
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 1</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 2</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 3</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 4</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 5</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 6</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 7</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 8</span>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={`${css.swiper_slide} ${css.swiper_slide_active}`}
        >
          <div className={css.box_stl}>
            <span className={css.box_text}>Box 9</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
