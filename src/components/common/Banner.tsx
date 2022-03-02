import { GetServerSideProps } from 'next';
import 'swiper/css/bundle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';

SwiperCore.use([Pagination, Navigation]);

const Banner = ({ images }: any): any => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation
      loop={true}
    >
      {images.map((src: { img: string }, index: number) => {
        console.log(src);
        return (
          <SwiperSlide key={`${index}`}>
            <Image src={src.img} layout="responsive" width={640} height={400} alt="test_image" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Banner;
