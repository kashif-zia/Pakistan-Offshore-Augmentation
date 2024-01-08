'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Nav, Navbar, Container } from 'react-bootstrap'
import styles from './header.module.css'
import ContactUsModal from '@/components/ContactUsModal'
import AnimatedMenu from '@/components/AnimatedMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Effect to update scroll state on mount and scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Set state based on scroll position
      setIsScrolled(scrollPosition > 0)
    }

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const HoverButton = (
    <div className="d-flex">
      <Link href="" className={styles.navItem} scroll={false}>
        <div className={styles.layer}></div>
        <div className={styles.navLink}>Let’s Talk</div>
      </Link>
    </div>
  )
  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
        <Navbar
          expand="lg p-0"
          className={`${styles.customContainer} ${
            isScrolled ? styles.scrolled : ''
          }`}
        >
          <Container fluid className="p-0">
            <div>
              <Link href="/">
                <Image
                  src="/assets/images/logo.svg"
                  width="166"
                  height="50"
                  alt="POA Logo"
                  className={styles.idenbridLogo}
                />
              </Link>
            </div>
            <AnimatedMenu isOpen={isMenuOpen} closeNavbar={toggleMenu} />
            <div>
              <Navbar id="basic-navbar-nav" className="p-0">
                <Nav className={styles.navbarNav}>
                  <ContactUsModal HoverButton={HoverButton} />

                  <div className="hamburger-menu">
                    <div className={styles['humbger-btn']} onClick={toggleMenu}>
                      <div className={styles.menuIcon}>
                        <Image
                          src={'/assets/images/header_menu.svg'}
                          width={33}
                          height={26}
                          alt="hamburger"
                          className={styles.navToggle}
                        />
                      </div>
                    </div>
                  </div>
                </Nav>
              </Navbar>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  )
}
