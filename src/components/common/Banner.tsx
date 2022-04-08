import { GetServerSideProps } from 'next';
import 'swiper/css/bundle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import { Bannerprops } from '../../shared/const';

SwiperCore.use([Pagination, Navigation]);
//  { images: { img: string }[] }

const Banner = ({ images }: Bannerprops) => {
  return (
    <StyledBanner>
      <Swiper
        slidesPerView={1}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation
        loop={true}
      >
        {images.map((src: { img: string }, index: number) => {
          // console.log(src);
          return (
            <SwiperSlide key={`${index}`}>
              <Image src={src.img} layout="responsive" width={640} height={150} alt="test_image" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledBanner>
  );
};

const StyledBanner = styled.div``;

export default Banner;
