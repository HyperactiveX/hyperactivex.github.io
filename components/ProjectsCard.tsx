import { Fragment } from "react"
import styles from "../styles/components/projectsCard.module.css";

interface CarouselProps {
    type: string;
    projectName: string;
    description: string;
  }

const ProjectsCard = ({type, projectName, description}:CarouselProps) => {
    const descriptionLength = 100
    const handleIcons = (type:string) => {
        switch (type) {
            case "web":
                return "/images/projects/web.svg"
            case "mobile":
                return "/images/projects/mobile.svg"
            default:
                return "/images/projects/misc.svg"
        }
    }

    return <Fragment>
        <div className={styles.cardContianer}>
            <div className={styles.typeIcon}>
                <img className={styles.icon} src={handleIcons(type)} alt="project type"/>
            </div>
            <div className={styles.description}>
                <p className={styles.projectName}>{projectName}</p>
                <p className={styles.projectDescription}>{description.split(".")[0]+"."}</p>
            </div>
            <div className={styles.rightIcon}>
                <img src="/images/projects/right.svg" alt="arrow icon"/>
            </div>
        </div>
    </Fragment>
}

export default ProjectsCard