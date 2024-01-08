import styles from './Process.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Process({ element }) {
  return (
    <section className={styles.ProcessSection}>
      <Container fluid className={styles.customContainer}>
        <div className={styles.processHeader}>
          <hr className={styles.processheaderLine} />
          <p className={styles.processheaderText}>Process</p>
        </div>
        <Row>
          <Col md={6}>
            <h2 className={styles.processh2}>
              <span className={styles.whiteText}>At the first stage </span>
              <span>
                of development MVP we included only the most essential pages.
              </span>
            </h2>
            <p className={styles.processtext}>{element.process.processDes}</p>
          </Col>
          <Col md={6}>
            <div className={styles.processListCol}>
              <ul className={styles.processList}>
                {element.process.linkList.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
