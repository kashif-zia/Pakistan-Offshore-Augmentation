'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Hero.module.css'
import { Container } from 'react-bootstrap'
import scrollToSection from '@/utils/scroll'
import ContactUsModal from '../ContactUsModal'

export default function Hero() {
  const HoverButton = (
    <Link href="" scroll={false} className={styles.contactUsLink}>
      <div className={styles.layer}></div>
      <div className={styles.contactUsBtn}>
        <span className={styles.defaultText}>Discuss your Project</span>
        <span className={styles.changeText}>Let’s Work Together</span>
      </div>
    </Link>
  )

  return (
    <Container fluid className="p-0">
      <section className={styles.heroSection}>
        <div className={styles.bgImage}></div>
        <div className={styles.headerSection}>
          <h1 className={styles.heroHeader}>
            Expand Your
            <span className={styles.heroSubHeader}>Team Virtually</span>
          </h1>
          <div className={styles.subContainer}>
            <p className={styles.heroDescription}>
              Virtual Vibes, Real Results! Our skilled engineers are ready to
              amplify your projects&apos; success. Try it out, no strings
              attached.
            </p>

            <ContactUsModal HoverButton={HoverButton} />
          </div>
        </div>
        <div
          onClick={() => scrollToSection('video-section')}
          className={styles.exploreBtn}
        >
          <div className={styles.ovalAnimation}>
            <div className={styles.ball}></div>
          </div>
          <div>Explore</div>
        </div>
      </section>
    </Container>
  )
}
