'use client'
import React from 'react'
import styles from './Feedback.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import ContactUsModal from '@/components/ContactUsModal'
import { rgbDataURL } from '@/utils/index'

export default function Feedback({ element }) {
  const HoverButton = (
    <div className={styles.consultationBtn}>
      <Link
        href="javascript:void(0)"
        className={styles.consultationButton}
        scroll={false}
      >
        <div className={styles.HoverLayer}></div>
        <div className={styles.consultationLink}>Let’s Talk</div>
      </Link>
    </div>
  )

  return (
    <section className={styles.FeedbackSection}>
      <Container fluid className="p-0">
        <div className={styles.feedbackHeader}>
          <hr className={styles.feedbackheaderLine} />
          <p className={styles.feedbackheaderText}>Feedback</p>
        </div>
        <div className={styles.feedbackdiv}>
          <Row>
            <Col md={6}>
              <h2 className={styles.feedbackh2}>
                <span className={styles.blueText}>
                  Here is what POA has to say
                </span>
                <span> about the development challenges of the Webiste.</span>
              </h2>
            </Col>
            <Col md={6}>
              <svg className={styles.vectoricon}>
                <use xlinkHref="/assets/images/svg/icons.svg#vectoricon"></use>
              </svg>
              <p
                className={styles.feedbacktext}
                dangerouslySetInnerHTML={{ __html: element.feedback.review }}
              ></p>
              {/* <p className={styles.feedbacktext}>
                &#34;IDENBRID is one of the most interesting Python projects
                I’ve had the chance to work on. I have learned so much from it.
                I had to use pretty advanced technologies like Django, Flask,
                Fast API, Tkinter challenging my programming skills.
              </p>
              <p className={styles.feedbacktext}>
                I&apos;m so happy that I have the chance to work on such
                projects, as they push you constantly to think on a deeper
                level, plan better and execute more efficiently.&#34;
              </p> */}
              {/* <div className={styles.profile}>
                <Image
                  src="/assets/images/ahmadprofile.png"
                  width={100}
                  height={100}
                  alt="ahmad profile image"
                />
                <div className={styles.profilebox}>
                  <h4 className={styles.designation}>POA</h4>
                  <p className={styles.layer}>Lead Developer</p>
                </div>
              </div> */}
              <div className={styles.profile}>
                <Image
                  src={element.feedback.image}
                  width={100}
                  height={100}
                  alt="ahmad profile image"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={rgbDataURL(234, 234, 234)}
                />
                <div className={styles.profilebox}>
                  <h4 className={styles.designation}>
                    {element.feedback.designation}
                  </h4>
                  <p className={styles.layer}>{element.feedback.layer}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.consultationdiv}>
          <Row>
            <Col md={12} className={styles.consultationCol}>
              <p className={styles.consultationText}>
                Ready to bring your idea to the digital world?
                <br />
                Get a free constultation.
              </p>

              <ContactUsModal HoverButton={HoverButton} justify />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}
