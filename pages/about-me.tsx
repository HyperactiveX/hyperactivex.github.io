import Layout from "../components/template/Layout";
import { Fragment } from "react";

const AboutMe = () => {
  return (
    <Fragment>
      <Layout title="About me | Tortoei">
        <div className="page">
          <i>Coming soon</i>
        </div>
      </Layout>
      <style jsx>
        {`
          .page {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </Fragment>
  );
};

export default AboutMe;
