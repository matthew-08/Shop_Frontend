import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

function Homepage() {
  return (
    <Flex width="40%" m="auto">
      <Swiper
        pagination
        spaceBetween={50}
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Flex>
  );
}

export default Homepage;
