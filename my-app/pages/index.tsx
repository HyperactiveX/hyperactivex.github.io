import Layout from "../components/template/Layout";
import styles from "../styles/pages/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Layout title="Homepage | Tortoei">
        <div className={styles.content}>
          <div className={styles.cardContainer}>
            <h2 className={styles.title}>Hi there, I'm Toei</h2>
            <div className={styles.description}>
              <p className={styles.descriptionElement}>I’m a junior year student in Computer Science </p>
              <p className={styles.descriptionElement}>at King Mongkut’s University of Technology Thonburi.</p>
              <p className={styles.descriptionElement}>I’m aspired to become a full stack developer.</p>
            </div>
          </div>
       </div>
      </Layout>
    </div>
  );
}
