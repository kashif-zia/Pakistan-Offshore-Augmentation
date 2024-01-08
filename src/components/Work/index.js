'use client'
import React from 'react'
import styles from './Work.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Link from 'next/link'
import Image from 'next/image'
import { ReactSVG } from 'react-svg'
import { work } from '../../../dummyData'
import { rgbDataURL } from '@/utils/index'

export default function Work() {
  return (
    <Container fluid className="p-0" id="work">
      <section className={styles.workSection}>
        <div className={styles.workHeader}>
          <hr className={styles.headerLine} />
          <h3 className={styles.headerText}>Our Work</h3>
        </div>
        <h4 className={styles.workDescription}>
          <span className={styles.subDescription}>Explore a selection</span> of
          our most cherished projects so far. Could yours be the next addition
          to our portfolio?
        </h4>

        <Row className={styles.workRow}>
          {work.map((workData) => (
            <Col key={workData.id} lg={6} md={6} sm={12}>
              <div className={styles.imageSection}>
                <Image
                  src={workData.image}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={rgbDataURL(234, 234, 234)}
                  width={500}
                  height={500}
                  className={styles.itemImage}
                  alt={workData.title}
                />

                <div className={styles.overlay}>
                  <Link href={`/work/${workData.id}`}>
                    <div className={styles.viewBtn}>
                      <p className={styles.techName}>View</p>
                    </div>
                  </Link>
                </div>
              </div>
              <Link href={`/work/${workData.id}`}>
                <h4 className={styles.itemName}>{workData.title}</h4>
              </Link>
              <div className={styles.techList}>
                {workData.tech.map((tech, index) => (
                  <div key={index} className={styles.techCard}>
                    <ReactSVG
                      src={tech.logo}
                      alt="aws-icon"
                      beforeInjection={(svg) => {
                        svg.classList.add(styles.svgImage)
                      }}
                    />
                    <p className={styles.techName}>{tech.name}</p>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
        {/* <div className="d-flex justify-content-center align-item-center">
          <Link href="/workdetails" className={styles.loadMoreLink}>
            <div className={styles.layer}></div>
            <div className={styles.loadMore}>
              <span className={styles.defaultText}>Load More</span>
              <span className={styles.changeText}>Work</span>
            </div>
          </Link>
        </div> */}
      </section>
    </Container>
  )
}
