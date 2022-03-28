import Image from 'next/image';

import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ShopNow from '../ShopNow';
import HeroOne from '../../public/ResizedHeroOne.png';
import HeroTwo from '../../public/ResizedHeroTwo.png';
import HeroThree from '../../public/ResizedHeroThree.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from '../../styles/Hero.module.scss';

const Hero = () => {
  return (
    <>
    <section className={styles.hero}>
      <Swiper
      pagination={true}
      modules={[Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.swiper}
    >
      <SwiperSlide>
        <Image layout="responsive" src={HeroOne} alt='change this' width={375} height={227} />
      </SwiperSlide>
      <SwiperSlide>
        <Image layout="responsive" src={HeroTwo} alt='change this' width={375} height={227} />
      </SwiperSlide>
      <SwiperSlide>
        <Image layout="responsive" src={HeroThree} alt='change this' width={375} height={227} />
      </SwiperSlide>
    </Swiper>
    </section>
    <ShopNow title='Shop new arrivals' subTitle='Our coolest new items are waiting for you!' buttonText='shop now' />
    </>
  );
}

export default Hero;