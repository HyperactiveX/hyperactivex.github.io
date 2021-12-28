import Link from "next/link";
import styles from "../../styles/components/template/navBar.module.css";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from 'next/router'

const NavBar = (props:any) => {
  const router = useRouter()
  const [isActive, setActive] = useState(false)
  const navContent = [
    {
      title: "Home",
      path: "#home",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Sandbox",
      path: "#sandbox",
    },
    {
      title: "About me",
      path: "#about-me",
    },
  ];

  // const redirectLink = (route:string) => {
  //   router.push(route)
  // }

  const openSideNav = (status:boolean) => {
    setActive(status)
    if (status) {
      document.getElementById("sideNav")!.style.opacity = '100%'
      document.getElementById("sideNav")!.style.top = '0%'
      document.getElementById("sideNav")!.style.pointerEvents = 'all'
    } else {
      document.getElementById("sideNav")!.style.opacity = '0%'
      document.getElementById("sideNav")!.style.top = '-1%'
      document.getElementById("sideNav")!.style.pointerEvents = 'none'
    }
  }

  return (
    <Fragment>
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <Link href="#home">
          <a href="#home">
            <h2 className={`${styles.title} ${styles.navItems}`}>
              TORTOEI.
            </h2>
          </a>
        </Link>
      </div>
      <div className={styles.menuContainer}>
        {navContent.map((element, key) => {
          return (
            // <div className={props.path.toLowerCase() === element.path ? `${styles.menuItems} ${styles.active}` : styles.menuItems} onClick={() => redirectLink(element.path)} key={key}>
            //   {element.title}
            // </div>
            <a className={styles.menuItems} href={element.path} key={key}>
              {element.title}
            </a>
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
          // <div className={props.path.toLowerCase() === element.path ? `${styles.menuItems} ${styles.active}` : styles.menuItems} onClick={() => redirectLink(element.path)} key={key}>
          //   {element.title}
          // </div>
          <a className={styles.menuItems} href={element.path} key={key}>
              {element.title}
            </a>
        );
      })}
    </div>
  </Fragment>
  );
};

export default NavBar;
