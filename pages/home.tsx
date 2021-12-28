import styles from "../styles/pages/Home.module.css";
import Image from 'next/image'

const HomeContent = () => {
  return (
  <div className={styles.content}>
      <div className={styles.fullname}>
          Chalanthorn Sirimongkholphawong
        </div>
        <div className={styles.introContainer}>
          <div className={styles.title}>Hi there, I'm <span className={styles.titleNickname}>TOEI</span></div>
          <div className={styles.description}>
            <p className={styles.descriptionElement}>I’m a junior year student in Computer Science </p>
            <p className={styles.descriptionElement}>at King Mongkut’s University of Technology Thonburi.</p>
            <p className={styles.descriptionElement}>I’m aspired to become a <span className={styles.highlightedCareer}>full stack developer.</span></p>
          </div>
        </div>
          <div className={styles.explorButton}>
            <div className={styles.buttonText}>Explore</div>
          </div>
          <Image 
            className={styles.quoteImage} 
            src={`/images/homepage/quote.svg`} 
            alt={`Quote by Franklin D. Roosevelt`} 
            width={1000}
            height={600}
            priority
          />
  </div>)
}

export default HomeContent;