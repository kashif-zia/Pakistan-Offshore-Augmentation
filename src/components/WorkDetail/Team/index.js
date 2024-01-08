import styles from './Team.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Team({ element }) {
  return (
    <section className={styles.TeamSection}>
      <Container fluid className="p-0">
        <div className={styles.teamHeader}>
          <hr className={styles.teamheaderLine} />
          <p className={styles.teamheaderText}>The team</p>
        </div>
        <Row>
          <Col md={6}>
            <h2
              className={styles.teamh2}
              dangerouslySetInnerHTML={{ __html: element.team.teamHeading }}
            >
              {/* <span>
                A team of four – Frontend Engineer, Backend Engineer, UI/UX
                Designer, and Project Manager – collaborated to{' '}
              </span>
              <span className={styles.blueText}>
                build the Social Media Promotion Application.
              </span> */}
            </h2>
          </Col>
          <Col md={6}>
            <p className={styles.teamText}>{element.team.teamDes}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
