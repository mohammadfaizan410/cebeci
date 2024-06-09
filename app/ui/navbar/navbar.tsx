"use client"
import { MdHome, MdShop, MdContactPage } from "react-icons/md";
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const navItems = [
        { href: "/home", label: "Home", icon : <MdHome size={30} />},
        { href: "/products", label: "Products", icon : <MdShop size={30}/>},
        { href: "/services", label: "Services", icon : <MdShop size={30}/>},
        { href: "/contact", label: "Contact", icon : <MdContactPage size={30}/>},

        ];
  return (
    <nav className={styles.container}>
        <Link href="/home">
            <div className={styles.logo}>
                <Image src="/hero.png" alt="logo" width={100}  height={100} />
            </div>
        </Link>
        <ul className={styles.nav}>
          {
              navItems.map((item, index) => (
                    <Link href={item.href} className={styles.item} key={index}>
                        <span className={`${styles.text} ${pathname.includes(item.href) && styles.selected}` }>{item.label}</span>
                    </Link>
            ))
        }
        </ul>
       
        {
            isMobile &&
            <ul className={styles.mobileNav}>
          {
              navItems.map((item, index) => (
                    <Link href={item.href} onClick={
                        () => setIsMobile(false)
                    
                    } className={styles.item} key={index}>
                        <span className={`${styles.text} ${pathname.includes(item.href) && styles.selected}` }>{item.label}</span>
                    </Link>
            ))
        }
        </ul>
        }
         <div className={styles.menu}>
        <MdMenu size={30} onClick={() => setIsMobile(!isMobile)} />
        </div>
        </nav>
  );
}