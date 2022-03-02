import { GetServerSideProps } from 'next';
import 'swiper/css/bundle';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import axios from 'axios';

SwiperCore.use([Pagination, Navigation]);

const Banner = ({ posts }: any) => {
  console.log(posts);
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      navigation
      loop={true}
    >
      {/* {images.map((src: string, index: number) => {
        console.log(src);
        return (
          <SwiperSlide key={`${index}`}>
            <Image src={src} layout="responsive" width={640} height={400} alt="test_image" />
          </SwiperSlide>
        );
      })} */}
    </Swiper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10');
  const posts = await res.json();
  // const images: object[] = [
  //   { img: 'https://cdn.pixabay.com/photo/2021/08/21/19/39/greyhound-6563435__340.jpg' },
  //   { img: 'https://cdn.pixabay.com/photo/2022/02/19/21/46/beach-7023446__340.jpg' },
  // ];
  return {
    props: {
      posts,
    },
  };
};

export default Banner;
