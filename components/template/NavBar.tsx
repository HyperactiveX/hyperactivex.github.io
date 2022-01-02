import Link from "next/link";
import styles from "../../styles/components/template/navBar.module.css";
import Image from 'next/image';
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

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
  ];
  const listOfContacts = [
    {
      title: "Email",
      image: "/images/navBar/mail.svg",
      link: "chalanthorn.s@mail.kmutt.ac.th",
    },
    {
      title: "Github",
      image: "/images/navBar/github.svg",
      link: "https://github.com/HyperactiveX",
    },
    {
      title: "Phone",
      image: "/images/navBar/phone.svg",
      link: "0983163177",
    },
  ]

  const handleClick = (path:string) => {
    router.push(path)
  }

  const handleActive = (path:string) => {
    if (router.asPath === path) {
      return `${styles.menuItems} ${styles.active}`
    }
    return styles.menuItems
    
  }
  const handleMobileClick = (path:string) => {
    router.push(path)
    openSideNav(!isActive)
  }

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
            <a className={handleActive(element.path)} onClick={() => { handleClick(element.path)}} key={key}>
              {element.title}
            </a>
          );
        })}
      </div>
      <div className={styles.contactList}>
        {listOfContacts.map((element, key) => {
          return <div className={styles.contactIcons}>
          <Image
            src={element.image}
            height={20}
            width={20}
          />
          </div>
        })}
      </div>
      <div className={styles.hamburgerSideNav}>
        <Image className={styles.hamburgerIcon} 
          src="/images/navBar/hamburger.svg" 
          height={32} 
          width={32} 
          onClick={() => openSideNav(!isActive)}/>
      </div>
    </div>
    <div className={styles.sideNav} id="sideNav">
      {navContent.map((element, key) => {
        return (
          <a className={handleActive(element.path)} onClick={() => handleMobileClick(element.path)} key={key}>
            {element.title}
          </a>
        );
      })}
    </div>
  </Fragment>
  );
};

export default NavBar;
