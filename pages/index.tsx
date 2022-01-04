import HomeContent from './home'
import Layout from "../components/template/Layout";
import styles from "../styles/pages/Index.module.css";
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Layout title="Homepage | Tortoei">
        <div className={styles.content}>
          <div className={styles.section}>
              <HomeContent />
          </div>
       </div>
      </Layout>
    </Fragment>
  );
}

export default Home
