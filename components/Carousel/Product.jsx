import Image from 'next/image';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { products } from '../../store/products';
import ProductImage from '../../public/Product.png';

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
          },
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.swiper}
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id.toString()}>
              <article>
                <Image
                  layout='responsive'
                  src={product.image}
                  alt='change this'
                  width={147}
                  height={221}
                />
                <h1>{product.title}</h1>
                <h2>{product.subTitle}</h2>
                <p>{product.price}</p>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Product;
