import { GetServerSideProps } from 'next';
import 'swiper/css/bundle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';

SwiperCore.use([Pagination, Navigation]);

const Banner = ({ test }: any): any => {
  return (
    <div>
      {test.map((data: any, index: any): any => (
        <div>{data.title}</div>
      ))}
    </div>
    // <Swiper
    //   slidesPerView={1}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   navigation
    //   loop={true}
    // >

    //   {/* {images.map((src: string, index: number) => {
    //     console.log(src);
    //     return (
    //       <SwiperSlide key={`${index}`}>
    //         <Image src={src} layout="responsive" width={640} height={400} alt="test_image" />
    //       </SwiperSlide>
    //     );
    //   })} */}
    // </Swiper>
  );
};

export default Banner;
