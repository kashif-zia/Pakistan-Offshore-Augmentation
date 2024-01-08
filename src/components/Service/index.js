'use client'
import React from 'react'
import styles from './Service.module.css'
import Container from 'react-bootstrap/Container'
import HoverButton from '../hoverButton'
import { ReactSVG } from 'react-svg'

const serviceList = [
  {
    headingNo: '01',
    heading: 'Development',
    description: `We Bring Ideas To Life! Unlock the full potential of your digital
              presence with our comprehensive development services. Whether it's
              a dynamic website, a robust application, or even a software
              solution that requires complex components, we're here to turn your
              vision into reality`,
    techList: ['Websites', 'Web Apps', 'Mobile Apps', 'SaaS'],
  },
  {
    headingNo: '02',
    heading: 'Design',
    description: `You Think, We Ink! Elevate your brand and business with our stellar
    Design services. Our creative team is dedicated to transforming
    concepts into visually stunning realities. Our user-friendly
    interfaces and eye-catching logos ensure a memorable and engaging user
    experience.`,
    techList: ['Wireframes', 'Prototype', 'UI & UX', 'Web apps'],
  },

  {
    headingNo: '03',
    heading: 'AWS',
    description: `We ensure projects are not just functional but also future-ready.
    Whether you're migrating to the cloud, optimizing existing solutions,
    or exploring innovative AWS features, our team ensures seamless and
    secure integration. Focus on your core business and leave the
    technical complexities to us!`,
    techList: ['Consultancy', 'Implementation', 'Integration', 'Scaling'],
  },
]

const Service = () => {
  return (
    <Container fluid className="p-0" id="service">
      <section className={styles.serviceSection}>
        <div className={styles.serviceHeader}>
          <hr className={styles.headerLine} />
          <h3 className={styles.headerText}>Our Service</h3>
        </div>
        <div className={styles.scrollSection}>
          <div className={styles.contents}>
            <div className={styles.serviceList}>
              {serviceList.map((service, index) => (
                <div
                  key={index}
                  className={styles.serviceDetails}
                  id={service.heading}
                >
                  <div>
                    <h2 className={styles.serviceNo}>{service.headingNo}</h2>

                    <h3 className={styles.header}>{service.heading}</h3>

                    <p className={styles.description}>{service.description}</p>
                  </div>
                  <ul className={styles.techList}>
                    {service.techList.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  <HoverButton
                    key={index}
                    defaultText="Let’s Talk"
                    width="148px"
                    link="contact-us"
                  />
                </div>
              ))}
            </div>
          </div>
          <ReactSVG
            className={styles.serviceImage}
            src="assets/images/service/services_elements.svg"
            style={{ position: 'sticky', top: '125px' }}
            beforeInjection={(svg) => {
              svg.classList.add(styles.svgImage)
            }}
          />
        </div>
      </section>
    </Container>
  )
}

export default Service
