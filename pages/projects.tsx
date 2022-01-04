import { Fragment } from "react";
import Layout from "../components/template/Layout"
import styles from "../styles/pages/Projects.module.css"
import projects from "../data/projectsData";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {

  return (
    <Fragment>
      <Layout title="Projects | Tortoei">
        <div className={styles.content}>
            <div className={styles.upperLayer}>
              <div className={styles.laptopContainer}>
                <img className={styles.laptop} src="/images/projects/laptop.png" alt="laptop image"/>
              </div>
              <div className={styles.descriptionContainer}>
                <p className={styles.titleText}>Here is what I have done.</p>
                <p className={styles.descriptionText}>These are the projects I have done in the past</p>
              </div>
            </div>
            <div className={styles.lowerLayer}>
              {projects.map((element, key) => {
                return <div className={styles.projectCardsContainer} key={key}>
                  <ProjectsCard type={element.type} projectName={element.projectName} description={element.description}/>
                </div>
              })}
            </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Projects;
