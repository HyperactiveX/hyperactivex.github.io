import Layout from "../components/template/Layout";
import styles from "../styles/pages/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <Layout title="Homepage | Tortoei">
        <div className={styles.container}>
          <div className={styles.boxContainer1}>
            <div className={styles.description}>
              <h1>Hello, I'm Toei</h1>
            </div>
            <div className={styles.profilePicture}>
              {/* <Image
                src="/images/mypf.jpg"
                height="200px"
                width="200px"
              ></Image> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
