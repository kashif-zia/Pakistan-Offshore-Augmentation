'use client'
import React from 'react'
import styles from './AboutUs.module.css'
import { Container } from 'react-bootstrap'

export default function AboutUs() {
  return (
    <Container fluid className="p-0" id="about-us">
      <section className={styles.aboutSection}>
        <div className={styles.bgImage}>
          <div className={styles.aboutUsContent}>
            <div className={styles.header}>
              <hr className={styles.headerLine} />
              <h4 className={styles.aboutUsHeader}>About Us</h4>
            </div>

            <p className={styles.aboutUsDescription}>
              POA solution is designed to empower your company with the agility,
              expertise, and productivity required to thrive in today&apos;s
              ever-evolving technology landscape. We help companies fill the
              tech talent gap at a fraction of the cost of hiring locally. Let
              us empower your organization with the right talent, at the right
              time.
            </p>

            {/* <div
              onClick={() => scrollToSection('engagementSection')}
              className={styles.linkSection}
            >
              <div className={styles.learnMoreLink}>Learn More</div>
              <Image
                src="assets/images/rightArrow.svg"
                width={18}
                height={10}
                alt="right-arrow"
                className={styles.rightArrow}
              />
            </div> */}
          </div>
        </div>
      </section>
    </Container>
  )
}
