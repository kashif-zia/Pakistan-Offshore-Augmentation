'use client'
import React from 'react'
import styles from './design.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { rgbDataURL } from '@/utils/index'

export default function Design({ element }) {
  return (
    <section className={styles.designSection}>
      <Container fluid className="p-0">
        <div className={styles.designHeader}>
          <hr className={styles.designheaderLine} />
          <p className={styles.designheaderText}>Design</p>
        </div>
        <Row>
          <Col md={12}>
            <h2 className={styles.designh2}>
              <span className={styles.designHeading}>We Helped Them With</span>
              <span className={styles.designBlueHeading}> Design Too </span>
            </h2>
            <p className={styles.designText}>{element.design.designDes}</p>
          </Col>
          {element.design.designImage.map((image, index) => (
            <Col md={4} key={index}>
              <Image
                src={image}
                loading="lazy"
                className={styles.designImage}
                alt="design images"
                width={407}
                height={306}
                placeholder="blur"
                blurDataURL={rgbDataURL(234, 234, 234)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
