'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import styles from './Video.module.css'
import { Container, Modal } from 'react-bootstrap'
import { ReactSVG } from 'react-svg'

export default function Video() {
  const videoRef = useRef(null)
  const [show, setShow] = useState(false)
  const handleFullscreen = () => {
    setShow(true)
  }

  return (
    <Container fluid className="p-0" id="video-section">
      <section className={styles.videoSection}>
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            src="/assets/video/POA-Video.mp4"
            autoPlay
            loop
            muted
            className={styles.introVideo}
          />

          <div className={styles.overlay}>
            <Link
              href="javascript:void(0)"
              className={styles.playBtn}
              scroll={false}
              onClick={handleFullscreen}
            />
          </div>
        </div>
      </section>
      <Modal
        show={show}
        fullscreen={true}
        className={show ? styles.showFullScreen : ''}
        onHide={() => setShow(false)}
      >
        <div
          className={styles.exitFullscreenBtn}
          onClick={() => setShow(false)}
        >
          <ReactSVG
            src="/assets/images/close-icon-white.svg"
            width="24"
            height="24"
            alt="Close"
            beforeInjection={(svg) => {
              svg.classList.add(styles.closeIcon)
            }}
          />
        </div>
        <video
          src="/assets/video/POA-Video.mp4"
          id="video-section"
          className={styles.videoStyle}
          autoPlay
          loop
          controls
          controlsList="nodownload"
        />
      </Modal>
    </Container>
  )
}
