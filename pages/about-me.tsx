import { Fragment } from "react";
import Layout from "../components/template/Layout";
import styles from "../styles/pages/AboutMe.module.css"

const AboutMe = () => {
  return (
    <Fragment>
      <Layout title="About me | Tortoei">
        <div className={styles.content}>
          <div className={styles.upperLayer}>
            <div className={styles.imageBox}>
              <img
                className={styles.profileImage}
                src="/images/aboutMe/myProfilePicture.svg"
                alt="Picture of author"
                />
            </div>
            <div className={styles.descriptionBox}>
              <div className={styles.firstname}>CHALANTHORN</div>
              <div className={styles.lastname}>Sirimongkholphawong</div>
              <div className={styles.description}>Hi, I'm Toei — full-stack developer and junior year student in Computer Science at at King Mongkut’s University of Technology Thonburi.</div>
            </div>
          </div>
          <div className={styles.lowerLayer}>
            <div className={styles.technologySection}>
              <div className={styles.heading}>
                <div className={styles.headingTitle}>Technology Skills</div>
              </div>
              <div className={styles.listContainer}>
                <div className={`${styles.list} ${styles.web}`}>
                  <h3 className={styles.title}>Web Development</h3>
                  <ul>
                    <li>HTML & CSS</li>
                    <li>JavaScript & TypeScript</li>
                    <li>NextJS</li>
                  </ul>
                </div>
                <div className={`${styles.list} ${styles.mobile}`}>
                  <h3 className={styles.title}>Mobile Development</h3>
                  <ul>
                    <li>Flutter (Dart)</li>
                  </ul>
                </div>
                <div className={`${styles.list} ${styles.tools}`}>
                  <h3 className={styles.title}>Database & Tools</h3>
                  <ul>
                    <li>RDBMS</li>
                    <li>Git & Github</li>
                    <li>Microsoft Azure</li>
                    <li>Google Colab</li>
                  </ul>
                </div>
                <div className={`${styles.list} ${styles.others}`}>
                  <h3 className={styles.title}>Others</h3>
                  <ul>
                    <li>C</li>
                    <li>Java</li>
                    <li>Python 3</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.educationSection}>
              <div className={styles.heading}>
                <div className={styles.headingTitle}>Education</div>
              </div>
              <div className={styles.listContainer}>
                <ul className={styles.box}>
                  <li className={styles.uniLink}>
                    <a href="https://www.kmutt.ac.th/" target="_blank">
                      King Mongkut's University of Technology Thonburi
                    </a>
                  </li>
                </ul>
                <ul className={styles.box}>
                  <li className={styles.schoolLink}>
                    <a href="https://syas.edu.sg/" target="_blank">
                      San Yu Adventist School
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default AboutMe;
