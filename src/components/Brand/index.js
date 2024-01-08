'use client'
// import React from 'react'
import styles from './Brand.module.css'
import Container from 'react-bootstrap/Container'

import { ReactSVG } from 'react-svg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const logoList = [
  'assets/images/brand/idenbrid-logo.svg',
  'assets/images/brand/nano-logo.svg',
  'assets/images/brand/viewpals-logo.svg',
  'assets/images/brand/crypo-logo.svg',
  'assets/images/brand/itorchard-logo.svg',
  'assets/images/brand/tic-tac-toe-logo.svg',
  'assets/images/brand/marui-logo.svg',
  'assets/images/brand/idenbrid-logo.svg',
  'assets/images/brand/nano-logo.svg',
  'assets/images/brand/viewpals-logo.svg',
  'assets/images/brand/crypo-logo.svg',
  'assets/images/brand/itorchard-logo.svg',
  'assets/images/brand/tic-tac-toe-logo.svg',
  'assets/images/brand/marui-logo.svg',
]

export default function Brand() {
  return (
    <Container fluid className={styles.brandContainer}>
      <section className={styles.brandSection}>
        <Swiper
          className="mySwiper"
          slidesPerView={'auto'}
          spaceBetween={81}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            1440: {
              slidesPerView: 8,
              spaceBetween: 81,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 81,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            425: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {logoList.map((logo, index) => (
            <SwiperSlide key={index} className="swiperSlide">
              <ReactSVG className={styles.logo} src={logo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  )
}
