'use client'
import React from 'react'
import styles from './HoverButton.module.css'
import Link from 'next/link'
import scrollToSection from '@/utils/scroll'

const HoverButton = ({ defaultText, changeText, width, link }) => {
  return (
    <Link
      href="javascript:void(0)"
      onClick={() => scrollToSection(link)}
      className={styles.contactUsLink}
      style={{
        width: width,
      }}
    >
      <div className={styles.layer}></div>
      <div className={styles.contactUsBtn}>{defaultText}</div>
    </Link>
  )
}

export default HoverButton
