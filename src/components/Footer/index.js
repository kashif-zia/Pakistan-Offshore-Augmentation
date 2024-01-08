'use client'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './footer.module.css'
import { ReactSVG } from 'react-svg'

export default function Footer() {
  return (
    <>
      <section className="section-footer">
        <Container fluid className="p-0">
          <Row className="justify-content-between">
            <Col md="4">
              <ReactSVG
                src="/assets/images/footer_logo.svg"
                beforeInjection={(svg) => {
                  svg.classList.add('footer-logo-img')
                }}
              />

              <div className="footer-poa-desc">
                <p>
                  Pakistan Offshore Augmentation provides IT Engineer for both
                  part-time and full-time engagements, allowing you to focus on
                  your core business while we handle the technical aspects.
                </p>
              </div>
              <div className="follow-us-heading">
                <p>Follow us on!</p>
              </div>
              <div className="social-links">
                <Link href="javascript:void(0)">
                  <div className="social-link linkdinIcon">
                    <ReactSVG src="/assets/images/facebook.svg" />
                  </div>
                </Link>
                <Link href="javascript:void(0)">
                  <div className="social-link youtueIcon">
                    <ReactSVG src="/assets/images/youtube.svg" />
                  </div>
                </Link>
                <Link href="javascript:void(0)">
                  <div className="social-link facebookIcon">
                    <ReactSVG src="/assets/images/linkedin.svg" />
                  </div>
                </Link>
              </div>
            </Col>
            <Col md="7" className={styles.addressContainer}>
              <div className={styles.mailSection}>
                <p className={styles.lineHeight}>
                  You can also write us on our e-mail
                </p>
                <Link href="mailto:contact@idenbrid.jp" className={styles.mail}>
                  contact@idenbrid.jp
                </Link>
              </div>
              <div className={styles.addressSection}>
                <p className={styles.lineHeight}>We are located at:</p>
                <div className={styles.addressCard}>
                  <ReactSVG src="/assets/images/hireUs/japan-flag.svg" />
                  <p>
                    Japan Branch
                    <br />
                    Postal Code 140-0011
                    <br />
                    3-22-3-315 Higashioi, Shinagawa-ku, Tokyo
                  </p>
                </div>
                <div className={styles.addressCard}>
                  <ReactSVG src="/assets/images/hireUs/pakistan-flag.svg" />
                  <p>
                    Pakistan Branch
                    <br />
                    Basement 1 Floor 176, DHA Y-block Lahore, 54000
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
