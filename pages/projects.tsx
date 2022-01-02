import { Fragment } from "react";
import Layout from "../components/template/Layout"
import styles from "../styles/pages/Projects.module.css"

const Projects = () => {
  return (
    <Fragment>
      <Layout title="Tortoei">
        <div className={styles.content}>
            <h2>THIS IS PROJECTS SECTION</h2>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Projects;
