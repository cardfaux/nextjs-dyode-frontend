import Image from 'next/image';

import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductImage from '../../public/Product.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from '../../styles/Carousel.module.scss';

const Product = () => {
  return (
    <section className={styles.carousel}>
      <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={2}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 0,
        }
      }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.swiper}
    >
      <SwiperSlide>
        <article>
        <Image layout="responsive" src={ProductImage} alt='change this' width={147} height={221} />
        <h1>product title</h1>
        <h2>women's t-shirt</h2>
        <p>$19.99</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article>
        <Image layout="responsive" src={ProductImage} alt='change this' width={147} height={221} />
        <h1>product title</h1>
        <h2>women's t-shirt</h2>
        <p>$19.99</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article>
        <Image layout="responsive" src={ProductImage} alt='change this' width={147} height={221} />
        <h1>product title</h1>
        <h2>women's t-shirt</h2>
        <p>$19.99</p>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article>
        <Image layout="responsive" src={ProductImage} alt='change this' width={147} height={221} />
        <h1>product title</h1>
        <h2>women's t-shirt</h2>
        <p>$19.99</p>
        </article>
      </SwiperSlide>
    </Swiper>
    </section>
  );
}

export default Product;