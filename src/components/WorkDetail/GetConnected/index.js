import React from 'react'
import styles from './Connected.module.css'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
// import Image from 'next/image'

export default function ConnectedSection() {
  return (
    <Container fluid className="p-0">
      <section className={styles.GetConnectedSection}>
        <div className={styles.GetConnectedHeader}>
          <hr className={styles.GetConnectedheaderLine} />
          <p className={styles.GetConnectedheaderText}>Let’s get connected</p>
        </div>
        <Row>
          <Col md={4} className={styles.iconItemsCol}>
            <div className={styles.iconItems}>
              <div className={styles.iconBox}>
                <div className={styles.emaiSvgIcon}>
                  <svg className={styles.emailicon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#emailicon"></use>
                  </svg>
                </div>
                <div className={styles.underline}></div>
              </div>
              <Link
                href="mailto:contact@idenbrid.jp"
                className={styles.iconboxEmail}
              >
                contact@idenbrid.jp
              </Link>
            </div>
          </Col>
          <Col md={4} className={styles.iconItemsCol}>
            <div className={styles.iconItems}>
              <div className={styles.iconBox}>
                <div className={styles.emaiSvgIcon}>
                  <svg className={styles.emailicon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#maplocationicon"></use>
                  </svg>
                </div>
                <div className={styles.underline}></div>
              </div>
              <p className={styles.iconboxText}>
                Japan Branch
                <br />
                Postal Code 140-0011, 3-22-3-315 Higashioi, Shinagawa-ku, Tokyo
              </p>
            </div>
          </Col>
          <Col md={4} className={styles.iconItemsCol}>
            <div className={styles.iconItems}>
              <div className={styles.iconBox}>
                <div className={styles.emaiSvgIcon}>
                  <svg className={styles.emailicon}>
                    <use xlinkHref="/assets/images/svg/icons.svg#maplocationicon"></use>
                  </svg>
                </div>
                <div className={styles.underline}></div>
              </div>
              <p className={styles.iconboxText}>
                Pakistan Branch
                <br />
                Basement 1 Floor 176, DHA Y-block Lahore, 54000
                <br />
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  )
}
