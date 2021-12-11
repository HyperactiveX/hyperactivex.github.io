import Link from "next/link";
import styles from "../../styles/components/template/navBar.module.css";
import { Fragment, useState } from "react";
import { useRouter } from 'next/router'

const NavBar = (props:any) => {
  const router = useRouter()
  const [isActive, setActive] = useState(false)
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

  const redirectLink = (route:string) => {
    router.push(route)
  }

  const openSideNav = (status:boolean) => {
    setActive(status)
    if (status) {
      document.getElementById("sideNav")!.style.top = '0%'
    } else {
      document.getElementById("sideNav")!.style.top = '-50%'
    }
  }

  return (
    <Fragment>
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
            <div className={props.path.toLowerCase() === element.path ? `${styles.menuItems} ${styles.active}` : styles.menuItems} onClick={() => redirectLink(element.path)} key={key}>
              {element.title}
            </div>
          );
        })}
      </div>
      <div className={styles.hamburgerSideNav}>
        <img className={styles.hamburgerIcon} src="/images/navBar/hamburger.svg" onClick={() => openSideNav(!isActive)}/>
      </div>
    </div>
    <div className={styles.sideNav} id="sideNav">
      {navContent.map((element, key) => {
        return (
          <div className={props.path.toLowerCase() === element.path ? `${styles.menuItems} ${styles.active}` : styles.menuItems} onClick={() => redirectLink(element.path)} key={key}>
            {element.title}
          </div>
        );
      })}
    </div>
  </Fragment>
  );
};

export default NavBar;
