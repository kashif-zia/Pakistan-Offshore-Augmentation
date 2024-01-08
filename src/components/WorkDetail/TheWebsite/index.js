'use client'
import React, { useState, useEffect } from 'react'
import styles from './TheWebsite.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { rgbDataURL } from '@/utils/index'

export default function TheWebsite({ element }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  })

  return (
    <section id="thewebsite" className={styles.TheWebsiteSection}>
      <Container fluid className="p-0">
        <div className={styles.websiteHeader}>
          <hr className={styles.websiteheaderLine} />
          <p className={styles.websiteheaderText}>the website</p>
        </div>
        <Row>
          <Col md={6}>
            <h2
              className={styles.theWebsiteh2}
              dangerouslySetInnerHTML={{ __html: element.website.webHeading }}
            >
              {/* <span>ViewPals Promote your content on </span>
              <span className={styles.blueText}>
                TikTok, YouTube, Instagram
              </span>
              <span> and </span>
              <span className={styles.blueText}>Twitter</span>

              <span> like never done before.</span> */}
            </h2>
          </Col>
          <Col md={6}>
            <p className={styles.theWebsiteText}>{element.website.webDes}</p>
          </Col>
          <Col md={12}>
            <div className={styles.theWebsiteImage}>
              <Image
                loading="lazy"
                src={element.website.webImage}
                alt="the website image"
                width={1280}
                height={852}
                placeholder="blur"
                blurDataURL={rgbDataURL(234, 234, 234)}
                className={
                  // scrollY > 850
                  scrollY > 650
                    ? styles['normal-image']
                    : styles['blurred-image']
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
