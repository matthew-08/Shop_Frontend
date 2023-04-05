import { Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuid } from 'uuid';
import { Navigation } from 'swiper';
import CARO_IMAGES from '../../utils/carouselImages';

import 'swiper/css';
import 'swiper/css/navigation';

function Homepage() {
  const carouselImages = Object.values(CARO_IMAGES);
  return (
    <Flex justify="center" mt="4rem">
      <Flex mr="2rem" textAlign="left" flexDir="column">
        <Text fontSize="1.9rem" color="gray.800" mb="2rem">
          An unbelievable online store.
        </Text>
        <Heading fontSize="6rem" fontFamily="Poppins">
          This is
          <br />
          not a real
          <br />
          store
        </Heading>
        <Button>Shop now!</Button>
      </Flex>
      <Flex maxW="40%">
        <Swiper navigation modules={[Navigation]}>
          {carouselImages.map((imgSrc) => {
            return (
              <SwiperSlide
                key={uuid()}
                style={{
                  borderRadius: '10px',
                }}
              >
                <Flex width="100%" height="100%">
                  <Image
                    src={imgSrc}
                    borderRadius="30px"
                    objectFit="cover"
                    maxH="540px"
                    width="100%"
                    height="100%"
                  />
                </Flex>
                ...
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </Flex>
  );
}

export default Homepage;
