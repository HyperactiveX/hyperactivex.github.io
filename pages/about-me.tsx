import styles from "../styles/pages/AboutMe.module.css"

const AboutMe = () => {
  return (
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
  );
};

export default AboutMe;
