import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
// import scrollToSection from '@/utils/scroll'

export default function HeroSection({ element }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <Container fluid className="p-0">
      <section className={styles.HeroBannerSection}>
        <div className={styles.Herobreadcrumbs}>
          <div className={styles.HerobreadcrumbsDiv}>
            <span>
              <Link href="/">
                <svg className={styles.homeIcon}>
                  <use xlinkHref="/assets/images/svg/icons.svg#home-icon"></use>
                </svg>
              </Link>
            </span>
            <span>/</span>
            <span>
              <Link href="/">Work</Link>
            </span>
            <span>/</span>
            <span>{element.slug}</span>
          </div>
        </div>
        <div className={styles.heroBannerDiv}>
          <div className={styles.heroBannerTextDiv}>
            <h1 className={styles.heroHeader}>
              <div className={styles.heroHeaderh1}>See What we did on</div>
              <div className={styles.heroSubText}>{element.name}</div>
            </h1>
            <p className={styles.heroParagraph}>{element.tagLine}</p>
            <a
              href={element.webURL}
              className={styles.websiteUrlText}
              target="_blank"
            >
              {element.webName}
            </a>
          </div>

          <div className={styles.IdenbridImage}>
            <Image
              src={element.companyLogo}
              loading="eager"
              className={styles.IdenbridlogoImage}
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div
          // href="#thewebsite"
          onClick={() => scrollToSection('thewebsite')}
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
