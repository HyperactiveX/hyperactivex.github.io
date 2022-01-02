import { Fragment } from "react";
import Layout from "../components/template/Layout";
import styles from "../styles/pages/Sandbox.module.css"

const Sandbox = () => {
  return (
    <Fragment>
      <Layout title="Tortoei">
        <div className={styles.content}>
        <div className={styles.comingSoon}>Coming Soon</div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Sandbox;
