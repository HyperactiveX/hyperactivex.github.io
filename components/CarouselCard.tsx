import { Fragment } from "react"
import styles from "../styles/components/carousel/carouselCard.module.css";

interface CarouselProps {
    image: string;
    projectName: string;
    description: string;
  }

const CarouselCard = ({image, projectName, description}:CarouselProps) => {
    return <Fragment>
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.picture}>
                    <img className={styles.image} src={image}/>
                </div>
                <div className={styles.description}>
                    <div className={styles.projectName}>{projectName}</div>
                    <div className={styles.projectDescription}>{description}</div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default CarouselCard