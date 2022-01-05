import { Fragment } from "react";
import Layout from "../components/template/Layout";
import styles from "../styles/pages/404.module.css"

const Sandbox = () => {
  return (
    <Fragment>
      <Layout title="Page Not Found | Tortoei">
        <div className={styles.content}>
            <div className={styles.errorContainer}>
                <div className={styles.gifContainer}>
                    <img className={styles.gif} src="https://qph.fs.quoracdn.net/main-qimg-52d9f9223a04d93e447c4926a4659911"/>
                </div>
                <div className={styles.errorStatus}>
                    <div className={styles.errorCode}>404</div>
                    <div className={styles.errorStatusTitle}>Page Not Found</div>
                    <div className={styles.errorStatusDescription}>
                        Either I broke something or you came to the wrong path...
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Sandbox;