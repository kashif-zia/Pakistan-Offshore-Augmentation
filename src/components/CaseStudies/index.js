'use client'
import React from 'react'
import styles from './CaseStudies.module.css'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
import CaseStudies1 from 'public/assets/images/caseStudies/CaseStudies1.svg'
import CaseStudies2 from 'public/assets/images/caseStudies/CaseStudies2.svg'

import { rgbDataURL } from '@/utils/index'

export default function CaseStudies() {
  return (
    <Container fluid className="p-0" id="case-studies">
      <section className={styles.CaseStudies_sec}>
        <div className={styles.caseStdHeader}>
          <hr className={styles.headLine} />
          <h3 className={styles.headText}>Case Studies</h3>
        </div>
        <h4 className={styles.caseStdDescription}>
          <span className={styles.caseStdsubDesc}>Witness</span> the impact of
          our IT services through these case studies.
        </h4>

        <div className={styles.stockCardContainer}>
          <div className={styles.largeImage}>
            <Image
              src={CaseStudies1}
              loading="lazy"
              placeholder="blur"
              blurDataURL={rgbDataURL(234, 234, 234)}
              className={styles.image}
              quality={100}
              alt="CaseStudies"
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className={styles.dataSection}>
              <h2 className={styles.cardMainHeading}>
                Online Webinar Platform
              </h2>
              <p className={`${styles.cardDesc} ${styles.marginY}`}>
                <span className={styles.cardSubHeadnig}>Client: </span>
                Remo Co.
              </p>
              <p className={styles.cardDescription}>
                <span className={styles.cardSubHeadnig}>Challenge: </span>
                Implementing a robust real-time communication system for live
                voice & video streaming.
              </p>
              <p className={`${styles.cardDescription} ${styles.marginTop}`}>
                <span className={styles.cardSubHeadnig}>Solution: </span>
                Our team conquered real-time communication challenges by
                implementing WebRTC for high-quality video/audio and optimizing
                with CDNs.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.viewPalsCardContainer}>
          <div className={styles.largeImage}>
            <Image
              src={CaseStudies2}
              loading="lazy"
              placeholder="blur"
              blurDataURL={rgbDataURL(234, 234, 234)}
              className={styles.image}
              alt="CaseStudies"
              quality={100}
            />
          </div>
          <div className="d-flex justify-content-center">
            <div className={styles.viewPalsDataSection}>
              <h2 className={styles.cardMainHeading}>Freelancing Platform</h2>
              <p className={`${styles.cardDesc} ${styles.marginY}`}>
                <span className={styles.cardSubHeadnig}>Client:&nbsp;</span>
                Nanotasker Co.
              </p>
              <p className={styles.cardDescription}>
                <span className={styles.cardSubHeadnig}>Challenge:&nbsp;</span>
                Implement features such as escrow services, milestone payments,
                and a transparent fee structure.
              </p>
              <p className={`${styles.cardDescription} ${styles.marginTop}`}>
                <span className={styles.cardSubHeadnig}>Solution:&nbsp;</span>
                Our team successfully integrated a secure payment system into,
                prioritizing trust with features like encryption, multi-currency
                support, and innovative fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
