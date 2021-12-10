import Layout from "../components/template/Layout";
import { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <Layout title="Projects | Tortoei">
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

export default Projects;
