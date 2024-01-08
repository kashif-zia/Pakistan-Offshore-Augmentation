'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Col, Modal, Container } from 'react-bootstrap'
import styles from './BookAMeeting.module.css'
import { rgbDataURL } from '@/utils/index'

export default function BookAMeeting({ HoverButton }) {
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  /* Hover btn */

  const [buttonText1, setButtonText1] = useState('Consult us')
  const [buttonText2, setButtonText2] = useState('Consult us')
  const [buttonText3, setButtonText3] = useState('Consult us')

  const handleMouseEnter1 = () => {
    setButtonText1('Schedule Now')
  }

  const handleMouseLeave1 = () => {
    setButtonText1('Consult us')
  }

  const handleMouseEnter2 = () => {
    setButtonText2('Schedule Now')
  }

  const handleMouseLeave2 = () => {
    setButtonText2('Consult us')
  }

  const handleMouseEnter3 = () => {
    setButtonText3('Schedule Now')
  }

  const handleMouseLeave3 = () => {
    setButtonText3('Consult us')
  }

  return (
    <>
      <div className="d-block" onClick={() => setShow(true)}>
        {HoverButton}
      </div>

      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className={styles.BookMeetingModal}
      >
        <Container className={styles.customContainer}>
          <Modal.Header className={styles.BookMeetingModalHeader}>
            <Modal.Title>
              <div>
                <Link href="/">
                  <Image
                    src="/assets/images/logo.svg"
                    width="165"
                    height="50"
                    alt="POA Logo"
                    className={styles.idenbridLogo}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={rgbDataURL(234, 234, 234)}
                  />
                </Link>
              </div>
            </Modal.Title>
            <div
              onClick={() => setShow(false)}
              className={
                styles.scrolLink +
                ' d-flex justify-content-center align-items-center'
              }
            >
              <Image
                src="/assets/images/close-icon.svg"
                width="24"
                height="24"
                alt="Close"
                className={styles.closeIcon}
              />
            </div>
          </Modal.Header>
          <Modal.Body className={styles.BookMeetingModalBody}>
            <div className={styles.BookMeetingheader}>
              <h2 className={styles.BookMeetingH2}>
                <span className={styles.BookMeetingdark}>Talk To Any Of</span>
                <span className={styles.BookMeetingblue}>Our Experts</span>
              </h2>
              <p className={styles.BookMeetintext}>
                We are here to answer your queries. Feel free to book a call
                with any of our board members and consult for free!
              </p>
            </div>
            <Container fluid className="p-0">
              <Row>
                <Col md={4}>
                  <div className={styles.expertItem}>
                    <Image
                      src="/assets/images/CeoSouga.png"
                      width={417}
                      height={413}
                      alt="CEO IDENBRID"
                      quality={100}
                      className={styles.expertItemImage}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={rgbDataURL(234, 234, 234)}
                    />
                    <div className={styles.expertItemheader}>
                      <div>
                        <div className={styles.expertItemName}>
                          Souga Nakamura
                        </div>
                        <div className={styles.expertItemdesignation}>CEO</div>
                      </div>

                      <Link
                        href="/"
                        className={styles.expertConsultBtn}
                        onMouseEnter={handleMouseEnter1}
                        onMouseLeave={handleMouseLeave1}
                      >
                        <div className={styles.modallayer}></div>
                        <div className={styles.expertConsultText}>
                          {buttonText1}
                        </div>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.expertItem}>
                    <Image
                      src="/assets/images/CtoAska.png"
                      width={417}
                      height={413}
                      alt="CEO IDENBRID"
                      className={styles.expertItemImage}
                      quality={100}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={rgbDataURL(234, 234, 234)}
                    />
                    <div className={styles.expertItemheader}>
                      <div>
                        <div className={styles.expertItemName}>Aska Ikeda</div>
                        <div className={styles.expertItemdesignation}>CTO</div>
                      </div>

                      <a
                        className={styles.expertConsultBtn}
                        onMouseEnter={handleMouseEnter2}
                        onMouseLeave={handleMouseLeave2}
                      >
                        <div className={styles.modallayer}></div>
                        <div className={styles.expertConsultText}>
                          {buttonText2}
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={styles.expertItem}>
                    <Image
                      src="/assets/images/Ahmad.png"
                      width={500}
                      height={500}
                      alt="CEO IDENBRID"
                      className={styles.expertItemImage}
                      quality={100}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={rgbDataURL(234, 234, 234)}
                    />
                    <div className={styles.expertItemheader}>
                      <div>
                        <div className={styles.expertItemName}>
                          Muhammad Ahmad
                        </div>
                        <div className={styles.expertItemdesignation}>PM</div>
                      </div>

                      <a
                        href="/"
                        className={styles.expertConsultBtn}
                        onMouseEnter={handleMouseEnter3}
                        onMouseLeave={handleMouseLeave3}
                      >
                        <div className={styles.modallayer}></div>
                        <div className={styles.expertConsultText}>
                          {buttonText3}
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Container>
      </Modal>
    </>
  )
}
