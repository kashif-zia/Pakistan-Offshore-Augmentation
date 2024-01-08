import { useState, useEffect } from 'react'
import styles from './ScrollToTopButton.module.css'
import { ReactSVG } from 'react-svg'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    setIsVisible(scrollTop > 20)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      id="scrollToTopBtn"
      onClick={scrollToTop}
      className={styles.scrollButton + ` ${isVisible ? styles.show : ''}`}
    >
      <ReactSVG src="/assets/images/UpperArrow.svg" />
    </div>
  )
}

export default ScrollToTopButton
