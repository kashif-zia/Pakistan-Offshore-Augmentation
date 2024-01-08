'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container, Row, Col } from 'react-bootstrap'

import { ReactSVG } from 'react-svg'

import { Controller, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import Image from 'next/image'
import { rgbDataURL } from '@/utils/index'

const ClientTestimonials = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null)
  const [secondSwiper, setSecondSwiper] = useState(null)

  return (
    <section className="section-testimonial">
      <Container fluid className="p-0">
        <div className="testimonialsHeader">
          <hr className="headerLine" />
          <h3 className="headerText">Our team member</h3>
        </div>
        <div className="swiper-content position-relative">
          <Container fluid className="custom-padding">
            <Row>
              <Col md={6} lg={5} className="category-img-box d-flex full-width">
                <Swiper
                  className="popular-category-img"
                  modules={[Controller]}
                  speed={1000}
                  slidesPerView={1}
                  spaceBetween={50}
                  loop={true}
                  onSwiper={setFirstSwiper}
                  controller={{ control: secondSwiper }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                  <SwiperSlide>
                    <div className="client-image">
                      <div>
                        <Image
                          src="/assets/images/clientTestimonials/MuhammadAhmad.svg"
                          alt="image"
                          width={500}
                          height={500}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(234, 234, 234)}
                          // quality={100}
                        />
                      </div>
                      <div className="client-info-sp">
                        <h5>Muhammad Ahmad</h5>
                        <h6>Project Manager</h6>
                        <ReactSVG
                          src="/assets/images/logo.svg"
                          beforeInjection={(svg) => {
                            svg.classList.add('svgImage')
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-image">
                      <div>
                        <Image
                          src="/assets/images/clientTestimonials/FaizanHaider.svg"
                          alt="image"
                          width={500}
                          height={500}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(234, 234, 234)}
                          // quality={100}
                        />
                      </div>
                      <div className="client-info-sp">
                        <h5>Faizan Haider,</h5>
                        <h6>Business Developer</h6>
                        <ReactSVG
                          src="/assets/images/logo.svg"
                          beforeInjection={(svg) => {
                            svg.classList.add('svgImage')
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="client-image">
                      <div>
                        <Image
                          src="/assets/images/clientTestimonials/BushraRiaz.svg"
                          alt="image"
                          width={500}
                          height={500}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={rgbDataURL(234, 234, 234)}
                          // quality={100}
                        />
                      </div>
                      <div className="client-info-sp">
                        <h5>Bushra Riaz,</h5>
                        <h6>HR Manager</h6>
                        <ReactSVG
                          src="/assets/images/logo.svg"
                          beforeInjection={(svg) => {
                            svg.classList.add('svgImage')
                          }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>

              <Col md={6} lg={7} className="category-slide my-auto full-width">
                <div className="popularcategory-Slider">
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '$--Primary-Color',
                      '--swiper-pagination-color': '$--Primary-Color',
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    speed={1000}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Controller, Navigation, Autoplay]}
                    onSwiper={setSecondSwiper}
                    controller={{ control: firstSwiper }}
                    className="popular-category-list"
                  >
                    <SwiperSlide>
                      <div className="testimonial-desc-section">
                        <div>
                          <p className="testimonial-desc">
                            Because of POA, my expertise in both Project and
                            Resource Management has gone up to new heights. It’s
                            been an honour for me to resolve the user pain of
                            our clients with Staff Augmentation.
                          </p>
                          <div className="client-info-pc">
                            <h5>Muhammad Ahmad,</h5>
                            <h6>Project Manager</h6>
                            <ReactSVG
                              src="/assets/images/logo.svg"
                              beforeInjection={(svg) => {
                                svg.classList.add('svgImage')
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="my-auto testimonial-desc-section">
                        <div>
                          <p className="testimonial-desc">
                            As a Business Developer, I thrive on fostering
                            partnerships and strategically aligning talent
                            solutions to deliver value. Being part of a team
                            that consistently meets client expectations is both
                            fulfilling and motivating.
                          </p>
                          <div className="client-info-pc">
                            <h5>Faizan Haider,</h5>
                            <h6>Business Developer</h6>
                            <ReactSVG
                              src="/assets/images/logo.svg"
                              beforeInjection={(svg) => {
                                svg.classList.add('svgImage')
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="my-auto testimonial-desc-section">
                        <div>
                          <p className="testimonial-desc">
                            Working at POA, my HR skills have grown
                            significantly. Contributing to resolving client
                            challenges through seamless talent integration in
                            projects is something to be very proud of.
                          </p>
                          <div className="client-info-pc">
                            <h5>Bushra Riaz,</h5>
                            <h6>HR Manager</h6>
                            <ReactSVG
                              src="/assets/images/logo.svg"
                              beforeInjection={(svg) => {
                                svg.classList.add('svgImage')
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  )
}

export default ClientTestimonials
