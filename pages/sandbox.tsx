import { Fragment } from "react";
import Layout from "../components/template/Layout";

const Sandbox = () => {
  return (
    <Fragment>
      <Layout title="Sandbox | Tortoei">
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

export default Sandbox;
