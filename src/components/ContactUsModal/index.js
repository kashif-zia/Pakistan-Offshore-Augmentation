'use client'
import styles from './ContactUsModal.module.css'
import Link from 'next/link'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import HireUs from '@/components/HireUs'
import Image from 'next/image'

export default function ContactUsModal({ HoverButton, justify }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={`d-flex ${justify ? 'justify-content-center' : ''} `}>
        <div className="d-block" onClick={() => setShow(true)}>
          {HoverButton}
        </div>
      </div>

      <Modal
        className={styles.fullScreenModal}
        scrollable={true}
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
      >
        <section className={styles.modalSection}>
          <div className={styles.modalHeader}>
            <div>
              <Link href="/" scroll={false}>
                <Image
                  src="/assets/images/logo.svg"
                  width="165"
                  height="50"
                  alt="POA Logo"
                  className="idenbridLogo"
                  loading="lazy"
                />
              </Link>
            </div>
            <div
              onClick={() => setShow(false)}
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

          <Modal.Body className="p-0">
            <HireUs key="modal" uniqueId="modal" setContactUsModal={setShow} />
          </Modal.Body>
        </section>
      </Modal>
    </>
  )
}
