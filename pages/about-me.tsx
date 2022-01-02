import { Fragment } from "react";
import Layout from "../components/template/Layout";
import styles from "../styles/pages/AboutMe.module.css"

const AboutMe = () => {
  return (
    <Fragment>
      <Layout title="Tortoei">
        <div className={styles.content}>
          <div className={styles.imageBox}>
            <img
              className={styles.profileImage}
              src={`/images/mypf.jpg`}
              alt={`My profile picture`}
              />
          </div>
          <div className={styles.descriptionBox}>
            This contains description
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default AboutMe;
