import HomeContent from './home'
import ProjectsContent from './projects'
import SandboxContent from './sandbox'
import AboutMeContent from './about-me'
import Layout from "../components/template/Layout";
import styles from "../styles/pages/Index.module.css";

const Home = () => {
  const sections = [
    {
      id: 'home',
      content: <HomeContent/>,
    },
    {
      id: 'projects',
      content: <ProjectsContent/>,
    },
    {
      id: 'sandbox',
      content: <SandboxContent/>,
    },
    {
      id: 'about-me',
      content: <AboutMeContent/>,
    },
  ]

  return (
    <div className={styles.page}>
      <Layout title="Tortoei">
        <div className={styles.content}>
          {sections ? sections.map((element, key) => {
            return (<section className={styles.section} id={element.id} key={key}>
              {element.content}
            </section>)
          }) : ""}
       </div>
      </Layout>
    </div>
  );
}

export default Home
