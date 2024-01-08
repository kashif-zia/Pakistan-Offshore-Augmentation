'use client'
import React from 'react'
import styles from './Technology.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'

export default function Technology({ element }) {
  return (
    <section className={styles.TechnologySection}>
      <Container fluid className="p-0">
        <div className={styles.technologyHeader}>
          <hr className={styles.technologyheaderLine} />
          <p className={styles.technologyheaderText}>TECHNOLOGIES USED</p>
        </div>
        <Row className={styles.rowReverse}>
          <Col md={6}>
            <h2
              className={`${styles.technologyHeading} ${styles.showDesktop}`}
              dangerouslySetInnerHTML={{ __html: element.techHeading }}
            >
              {/* The Frontend and Backend of the application has been built using
              <span className={styles.technologyBlueHeading}> NEXT.JS </span>
              and
              <span className={styles.technologyBlueHeading}> Node.js </span>
              respectively. */}
            </h2>

            <div className={styles.techList}>
              {element.tech.map((tec, index) => (
                <div key={index} className={styles.techCard}>
                  <ReactSVG
                    src={tec.logo}
                    width="32"
                    alt="aws-icon"
                    beforeInjection={(svg) => {
                      svg.classList.add(styles.svgImage)
                    }}
                  />
                  <p className={styles.techName}>{tec.name}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            {/* <h2 className={`${styles.technologyh2} ${styles.showMobile}`}>
              <span className={styles.technologyHeading}>
                The Frontend and Backend of the application has been built using
              </span>
              <span className={styles.technologyBlueHeading}> NEXT.JS </span>
              <span className={styles.technologyHeading}>and </span>
              <span className={styles.technologyBlueHeading}>Node.js </span>
              <span className={styles.technologyHeading}>respectively.</span>
            </h2> */}
            <h2
              className={`${styles.technologyHeading} ${styles.showMobile}`}
              dangerouslySetInnerHTML={{ __html: element.techHeading }}
            >
              {/* The Frontend and Backend of the application has been built using
              <span className={styles.technologyBlueHeading}> NEXT.JS </span>
              and
              <span className={styles.technologyBlueHeading}> Node.js </span>
              respectively. */}
            </h2>
            <div className={styles.technologyp}>
              <p className={styles.technologyText}>
                The backend includes but not limited to{' '}
                <span className={styles.technolgyTextBold}>
                  AWS, GitHub, AppSync, Node.js.
                </span>
              </p>
              <br />
              <p className={styles.technologyText}>
                This strategic choice in technology empowers and ensures robust
                and scalable infrastructure to support the seamless functioning
                of the entire application.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
