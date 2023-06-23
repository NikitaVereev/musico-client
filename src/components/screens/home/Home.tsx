'use client'

import { FC } from 'react';
import Carousel from "@/src/components/ui/carousel/Carousel";
import {carouselItems} from "@/src/components/screens/home/carousel.data";

const Home: FC = () => {

  return <>
  <Carousel items={carouselItems} className='mb-10' />
  </>;
};

export default Home;
