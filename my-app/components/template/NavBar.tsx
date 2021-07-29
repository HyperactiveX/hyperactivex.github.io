import Link from "next/link";
import styles from "../../styles/components/template/navBar.module.css";

const NavBar = () => {
  const navContent = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Sandbox",
      path: "/sandbox",
    },
    {
      title: "About me",
      path: "/about-me",
    },
    {
      title: "Contact me",
      path: "/contact-me",
    },
  ];

  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <a href="/">
            <h2 className={`${styles.title} ${styles.navItems}`}>
              Tortoei.com
            </h2>
          </a>
        </Link>
      </div>
      <div className={styles.menuContainer}>
        {navContent.map((element, key) => {
          return (
            <Link href={element.path} key={key}>
              <a href={element.path}>
                <div className={`${styles.menuItems} ${styles.navItems}`}>
                  {element.title}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
