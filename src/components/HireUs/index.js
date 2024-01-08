'use client'
import React, { useState, useRef } from 'react'
import styles from './HireUs.module.css'
import Container from 'react-bootstrap/Container'
import { ReactSVG } from 'react-svg'
import Link from 'next/link'
import { Field, Form, Formik } from 'formik'
import Modal from 'react-bootstrap/Modal'

import { API, graphqlOperation } from 'aws-amplify'
import { createPOAPKInquiry } from '../../graphql/mutations'

import * as Yup from 'yup'

const budgetList = [
  {
    name: 'Less Than $5k',
    value: '5k',
  },
  {
    name: '$5k-$10k',
    value: '5k-10k',
  },
  {
    name: '$10k-$20k',
    value: '10k-20k',
  },
  {
    name: '$20k-$50k',
    value: '20k-50k',
  },
  {
    name: 'More Than $50k',
    value: '50k',
  },
]

export default function HireUs({ Header, uniqueId, setContactUsModal }) {
  const formikRef = useRef()
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  return (
    <Container fluid className={styles.containerHire} id="contact-us">
      <section className={styles.hireUsSection}>
        {!Header && (
          <div className={styles.headerSection}>
            <h2 className={`${styles.header} ${styles.showDesktop}`}>
              Your Journey Starts Here
              <span className={styles.subHeader}>Let&apos;s Connect!</span>
            </h2>
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
          </div>
        )}
        <div className={styles.formSection}>
          {Header && (
            <div className={styles.showDesktop}>
              <div className={styles.hireUsHeader}>
                <hr className={styles.headerLine} />
                <h3 className={styles.headerText}>{Header}</h3>
              </div>
            </div>
          )}
          <Formik
            innerRef={formikRef}
            // validateOnChange={false}
            // validateOnBlur={false}
            initialValues={{
              name: '',
              projectDetails: '',
              email: '',
              companyName: '',
              budget: '',
              // engagement: '',
              // teamStrength: '',
              // services: {
              //   research: false,
              //   strategy: false,
              //   test: false,
              //   launch: false,
              //   ui_ux_audit: false,
              //   design: false,
              //   design_system: false,
              //   devops: false,
              //   development: false,
              //   ideation: false,
              //   other: false,
              // },
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string(),
              projectDetails: Yup.string(),
              budget: Yup.string(),
              companyName: Yup.string().required('This field is required*'),
              email: Yup.string()
                .email('Email must be a valid email')
                .test('custom-email', 'Invalid email format', function (value) {
                  if (!/@.*\.com$/.test(value)) {
                    return this.createError({
                      path: 'email',
                      message: 'Email must be a valid email',
                    })
                  }
                  return true
                })
                .required('This field is required*'),
              // 'Invalid email format. It should contain "@" and end with ".com"',
              // engagement: Yup.string().required('This field is required*'),
              // teamStrength: Yup.string().required('This field is required*'),
              // services: Yup.object().test(
              //   'atLeastOneSelected',
              //   'Select at least one service',
              //   (services) => {
              //     return Object.values(services).some((selected) => selected)
              //   },
              // ),
            })}
            onSubmit={async (values, { resetForm }) => {
              console.log(values)
              try {
                const response = await API.graphql({
                  ...graphqlOperation(createPOAPKInquiry, { input: values }),
                })

                console.log('response', response)

                setShow(true)
                resetForm()
              } catch (err) {
                console.log('ERROR:', err)
                setError('Something went wrong')
                setShow(true)
              }
            }}
          >
            {({
              values,
              isSubmitting,
              errors,
              touched,
              submitForm,
              handleChange,
            }) => (
              <Form className={styles.hireUsForm}>
                {/* HEADING SECTION */}
                {Header && (
                  <div className={styles.showMobile}>
                    <div className={styles.hireUsHeader}>
                      <hr className={styles.headerLine} />
                      <h3 className={styles.headerText}>{Header}</h3>
                    </div>
                  </div>
                )}

                {Header && (
                  <h2 className={`${styles.header}`}>
                    Your Journey Starts Here
                    <span className={styles.subHeader}>
                      Let&apos;s Connect!
                    </span>
                  </h2>
                )}
                {!Header && (
                  <h2 className={`${styles.header} ${styles.showMobile}`}>
                    Your Journey Starts Here
                    <span className={styles.subHeader}>
                      Let&apos;s Connect!
                    </span>
                  </h2>
                )}

                <div>
                  <h4
                    className={`${styles.formHeader} ${
                      Header ? styles.marginTop : ''
                    }`}
                  >
                    Budget in USD
                  </h4>
                  <div className={styles.serviceList}>
                    {budgetList.map((budget, index) => (
                      <div key={index}>
                        <Field
                          className="btn-check"
                          type="radio"
                          id={`budget.${budget.value}${uniqueId}`}
                          name="budget"
                          value={budget.value}
                          checked={values.budget === budget.value}
                          onChange={handleChange}
                        />
                        <label
                          className={
                            styles.btnCheckBox + ' btn btn-outline-secondary'
                          }
                          htmlFor={`budget.${budget.value}${uniqueId}`}
                        >
                          {budget.name}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.budget && touched.budget ? (
                    <div className={styles.errors}>{errors.budget}</div>
                  ) : null}
                </div>

                <div>
                  <label className={`${styles.formHeader} ${styles.marginTop}`}>
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className={`${styles.textField} form-control ${
                      errors.name && touched.name ? styles.errorBorder : ''
                    } `}
                    label="name"
                    placeholder="Your Name"
                  />
                  {errors.name && touched.name ? (
                    <div className={styles.errors}>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label className={`${styles.formHeader} ${styles.marginTop}`}>
                    Company Name
                  </label>
                  <Field
                    name="companyName"
                    type="text"
                    className={`${styles.textField} form-control ${
                      errors.companyName && touched.companyName
                        ? styles.errorBorder
                        : ''
                    } `}
                    label="companyName"
                    placeholder="Your Organization"
                  />
                  {errors.companyName && touched.companyName ? (
                    <div className={styles.errors}>{errors.companyName}</div>
                  ) : null}
                </div>
                <div>
                  <label className={`${styles.formHeader} ${styles.marginTop}`}>
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className={`${styles.textField} form-control ${
                      errors.email && touched.email ? styles.errorBorder : ''
                    } `}
                    label="email"
                    placeholder="Your Email"
                  />
                  {errors.email && touched.email ? (
                    <div className={styles.errors}>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label className={`${styles.formHeader} ${styles.marginTop}`}>
                    Project Details
                  </label>
                  <Field
                    name="projectDetails"
                    as="textarea"
                    rows={4}
                    className={`${styles.textAreaField} form-control ${
                      errors.projectDetails && touched.projectDetails
                        ? styles.errorBorder
                        : ''
                    } `}
                    label="projectDetails"
                    placeholder="Project Details"
                  />
                  {errors.projectDetails && touched.projectDetails ? (
                    <div className={styles.errors}>{errors.projectDetails}</div>
                  ) : null}
                </div>
                <div className={styles.letsTalkBtn}>
                  <Link
                    href="javascript:void(0)"
                    className={styles.navItem}
                    scroll={false}
                    onClick={() => {
                      submitForm()
                    }}
                  >
                    <div className={styles.layer}></div>
                    <div className={styles.navLink}>Let’s Talk</div>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        {Header && (
          <div
            className={`${styles.illustrationSection} ${styles.showDesktop}`}
          >
            <ReactSVG
              src="/assets/images/Illustration.svg"
              beforeInjection={(svg) => {
                svg.classList.add(styles.IllustrationImage)
              }}
            />
          </div>
        )}
      </section>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={` custom-model-css ${styles.customModal}`}
        centered
        animation
      >
        <Modal.Body className="p-0">
          <section className={styles.modalSection}>
            <ReactSVG
              src="assets/images/hireUs/explore.svg"
              className="d-flex justify-content-center"
              beforeInjection={(svg) => {
                svg.classList.add(styles.svgImage)
              }}
            />
            <div className="d-grid justify-content-center">
              {error ? (
                <>
                  <h2>{error}</h2>
                  <div className="d-flex justify-content-center">
                    <Link
                      href="/"
                      className={styles.consultUsLink}
                      onClick={() => {
                        setShow(false)
                        setContactUsModal?.()
                        setError('')
                      }}
                    >
                      <div className={styles.layer}></div>
                      <div className={styles.consultUs}>Again fill</div>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h2>Thank you!</h2>
                  <p>Expect a stellar reply soon!</p>
                  <div className="d-flex justify-content-center">
                    <Link
                      href="javascript:void(0)"
                      className={styles.consultUsLink}
                      onClick={() => {
                        setShow(false)
                        setContactUsModal?.()
                      }}
                    >
                      <div className={styles.layer}></div>
                      <div className={styles.consultUs}>
                        <span className={styles.defaultText}>Explore</span>
                        <span className={styles.changeText}>More</span>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </Container>
  )
}
