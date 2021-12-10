import Layout from "../components/template/Layout";
import { Fragment } from "react";

const ContactMe = () => {
  return (
    <Fragment>
      <Layout title="Contact me | Tortoei">
        <div className="page">Coming soon</div>
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

export default ContactMe;
