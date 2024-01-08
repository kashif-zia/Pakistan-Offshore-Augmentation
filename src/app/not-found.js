import React from 'react'
import styles from './404.module.css'
import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
  return (
    <section className={styles.section404}>
      <div className={styles.textSection}>
        <h1 className={styles.mainHeading}>404</h1>
        <h2 className={styles.subHeading}>
          <span className={styles.blueText}>Whoops! </span>
          This page got lost in conversation
        </h2>
        <div className={styles.linkButton}>
          <Link href="" className={styles.navItem} scroll={false}>
            <div className={styles.layer}></div>
            <div className={styles.navLink}>Explore</div>
          </Link>
        </div>
      </div>
      <div className={styles.imageSection}>
        <Image
          src="/assets/images/404/Plant.png"
          loading="eager"
          className={styles.image404}
          alt=""
          width={517}
          height={439}
        />
      </div>
    </section>
  )
}

export default NotFound
