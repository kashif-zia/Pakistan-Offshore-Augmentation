'use client'
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'
import styles from '../AnimatedMenu/AnimatedMenu.module.css'
import ContactUsModal from '@/components/ContactUsModal'
import scrollToSection from '@/utils/scroll'

const AnimatedMenu = ({ isOpen, closeNavbar }) => {
  const HoverButton = (
    <div className="d-flex">
      <Link
        href="javascript:void(0)"
        className={styles.navItem}
        onClick={closeNavbar}
        scroll={false}
      >
        <div className={styles.layer}></div>
        <div className={styles.navLink}>Let’s Talk</div>
      </Link>
    </div>
  )

  return (
    <div className={`${styles.sideMenuWrapper} ${isOpen ? styles.open : ''}`}>
      <div className={styles.bgImage}></div>
      <div className={styles.containerWrapper}>
        <div className={styles.animationHeader}>
          <Link href="/" onClick={closeNavbar}>
            <Image
              src="/assets/images/logo.svg"
              width="166"
              height="50"
              alt="POA Logo"
              className={styles.idenbridLogo}
              loading="lazy"
            />
          </Link>
          <div
            onClick={closeNavbar}
            className={
              styles.scrolLink +
              ' d-flex justify-content-center align-items-center'
            }
          >
            <Image
              src="/assets/images/close-icon.svg"
              width="24"
              height="24"
              alt="Close"
              className={styles.closeIcon}
            />
          </div>
        </div>
      </div>

      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.overflowAuto}>
          <Container fluid className={styles.modalBody}>
            <div className={styles.headerSection}>
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
                  <ReactSVG src="assets/images/hireUs/japan-flag.svg" />
                  <p>
                    Japan Branch
                    <br />
                    Postal Code 140-0011
                    <br />
                    3-22-3-315 Higashioi, Shinagawa-ku, Tokyo
                    <br />
                  </p>
                </div>
                <div className={styles.addressCard}>
                  <ReactSVG src="assets/images/hireUs/pakistan-flag.svg" />
                  <p>
                    Pakistan Branch
                    <br />
                    Basement 1 Floor 176, DHA Y-block Lahore, 54000
                  </p>
                </div>
              </div>

              <ContactUsModal HoverButton={HoverButton} />
            </div>

            <hr className={styles.cardDivider} />
            <div className={styles.LinkSection}>
              <ul className={styles.mainNavItems}>
                <li>
                  <p className="p-0 m-0">01</p> <hr />
                  <Link href="/" onClick={closeNavbar}>
                    Home
                  </Link>
                </li>
                <li>
                  <p className="p-0 m-0">02</p> <hr />
                  <div
                    onClick={() => {
                      scrollToSection('about-us')
                      closeNavbar()
                    }}
                    className={styles.scrolLink}
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <p className="p-0 m-0">03</p> <hr />
                  <div
                    onClick={() => {
                      scrollToSection('service')
                      closeNavbar()
                    }}
                    className={styles.scrolLink}
                  >
                    Services
                  </div>
                </li>
                <li>
                  <p className="p-0 m-0">04</p> <hr />
                  <div
                    className={styles.scrolLink}
                    onClick={() => {
                      scrollToSection('work')
                      closeNavbar()
                    }}
                  >
                    Work
                  </div>
                </li>
                <li>
                  <p className="p-0 m-0">05</p> <hr />
                  <div
                    onClick={() => {
                      scrollToSection('contact-us')
                      closeNavbar()
                    }}
                    className={styles.scrolLink}
                  >
                    Contact Us
                  </div>
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default AnimatedMenu
