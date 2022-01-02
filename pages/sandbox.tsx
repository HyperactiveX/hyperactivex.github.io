import { Fragment } from "react";
import Layout from "../components/template/Layout";
import styles from "../styles/pages/Sandbox.module.css"

const Sandbox = () => {
  return (
    <Fragment>
      <Layout title="Tortoei">
        <div className={styles.content}>
            <h2>Coming Soon</h2>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Sandbox;
