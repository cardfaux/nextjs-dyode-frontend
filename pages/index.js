import Head from 'next/head'
import Image from 'next/image'

import Hero from '../components/Carousel/Hero';
import ShopNow from '../components/ShopNow';
import Collections from '../components/Collections';
import ShopNew from '../components/ShopNew';
import FavoriteTees from '../components/FavoriteTees';
import SignUp from '../components/SignUp';

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Collections />
      <ShopNew />
      <FavoriteTees />
      <SignUp />
    </div>
  )
}