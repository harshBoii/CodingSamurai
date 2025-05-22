'use client'
import { Navigation } from './components/Navigation.jsx'
import Len from './components/Len.jsx'
import Promo from './components/Promo.jsx'
import Scrolley from './components/Scrolley.jsx'
import RotatingCarousel from './components/Carousel.jsx'
import FeedBack from './components/FeedBack.jsx'
import Foot from './components/Footer.jsx'

import Link from "next/link";


export default function Home() {
  return (
    <>

      <Navigation/>

      <Len/>

      <Promo/>


      <Scrolley/>

      <RotatingCarousel/>

      <FeedBack/>

      <Foot/>

     
    </>
  )
}
