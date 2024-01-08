'use client'
import React from 'react'
import styles from './Engagement.module.css'
import Container from 'react-bootstrap/Container'
import { ReactSVG } from 'react-svg'
import Link from 'next/link'
import BookAMeeting from '@/components/BookAMeeting'

export default function Engagement() {
  const HoverButton = (
    <div className="d-flex">
      <Link href="" scroll={false} className={styles.consultUsLink}>
        <div className={styles.layer}></div>
        <div className={styles.consultUs}>
          <span className={styles.defaultText}>Consult us</span>
          <span className={styles.changeText}>Schedule Now</span>
        </div>
      </Link>
    </div>
  )

  return (
    <Container fluid className="p-0" id="engagementSection">
      <section className={styles.engagementSection}>
        <div className={styles.headerSection}>
          <div className={styles.engagementHeader}>
            <hr className={styles.headerLine} />
            <h3 className={styles.headerText}>Engagement Model</h3>
          </div>

          <h3 className={styles.header}>
            <span className={styles.subHeader}>
              No matter how big or small your team is,
            </span>
            you have the option to build from scratch or expand.
          </h3>
          <p className={styles.description}>
            We work in two business models: IT Team As A Service and
            Project-Based. Despite their differences in name and working, both
            models strive to solve your users&apos; pains. Take a brief peek at
            these services.
          </p>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.serviceCard}>
            <ReactSVG src="/assets/images/engagement/team_service.svg" />
            <h5 className={styles.serviceHeader}>Team as a Service</h5>
            <p className={styles.serviceDescription}>
              Experience top-notch quality, unparalleled expertise, and a
              commitment to excellence with our IT Team as a Service. It&apos;s
              like having your dream team without the HR hassle. Choose us for a
              seamless blend of quality, affordability, and adaptability in
              meeting your IT requirements.
            </p>
            <BookAMeeting HoverButton={HoverButton} />
          </div>
          <hr className={styles.cardDivider} />
          <div className={styles.projectCard}>
            <ReactSVG src="/assets/images/engagement/project-icon.svg" />
            <h5 className={styles.serviceHeader}>Project-Based Engagement</h5>
            <p className={styles.serviceDescription}>
              You can count on us to deliver exceptional results tailored to
              your specific requirements. Our transparent pricing model ensures
              cost-effectiveness, providing maximum value for your investment.
              Enjoy the flexibility to customize project scopes and resources,
              empowering your business to navigate dynamic challenges
              effortlessly.
            </p>
            <BookAMeeting HoverButton={HoverButton} />
          </div>
        </div>
      </section>
    </Container>
  )
}
