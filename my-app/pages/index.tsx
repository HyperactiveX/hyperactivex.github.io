import Layout from "../components/template/Layout";
import styles from "../styles/pages/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Layout title="Homepage | Tortoei">
        <div className={styles.container}>
          <div className={styles.boxContainer1}>
            <div className={styles.innerBoxContainer}>
              <div className={styles.profilePicture}>
                <Image
                  className={styles.image}
                  alt="Picture of the author"
                  src="/images/mypf.jpg"
                  height={256}
                  width={256}
                />
                <div className={styles.verticalLine} />
              </div>
              <div className={styles.description}>
                <h1>Hi there, I'm Toei</h1>
                <p>
                  I'm a junior year student in Computer Science at King
                  Mongkut's University of Technology Thonburi. I'm aspired to
                  become a full stack developer.
                </p>
              </div>
            </div>
            <div className={styles.statusContainer}>
              <p className={styles.status}>Current progress: 57.4%</p>
              <div className={styles.progressBar}>
                <div className={styles.currentProgress} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
