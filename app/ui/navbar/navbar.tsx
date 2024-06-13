"use client";

import Link from 'next/link';
import styles from './navbar.module.css';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import navItemEn from '../../../locales/en/navbar.json';
import navItemtr from '../../../locales/tr/navbar.json';
import { useLanguage } from '@/app/languageContextProvider';

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage } = useLanguage();
    const navItems = language === 'en' ? navItemEn.navbar : navItemtr.navbar;
    return (
        <nav className={styles.container}>
            <Link href="/home">
                <div className={styles.logo}>
                    <Image src="/hero-removebg-preview.png" alt="logo" width={100} height={100} />
                </div>
            </Link>
            <ul className={styles.nav}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>
                            <span className={`${styles.text} ${pathname.includes(item.href) && styles.selected}`}>
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
               <li>
                <li className={styles.language}>
                    <span onClick={() => setLanguage('en')}
                        className={language === 'en' ? styles.selectedSpan : ''}
                        >EN</span>
                    <span
                        className={language === 'tr' ? styles.selectedSpan : ''}
                    onClick={() => setLanguage('tr')}>TR</span>
                </li>
               </li>
            </ul>
            {isMobile && (
                <ul className={styles.mobileNav}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} onClick={() => setIsMobile(false)}>
                                <span className={`${styles.text} ${pathname.includes(item.href) && styles.selected}`}>
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}


                    <div className={styles.mobileLanguageChanger}>
                        <span onClick={() => setLanguage('en')}
                            className={language === 'en' ? styles.selectedSpan : ''}
                        >EN</span>
                        <span
                            className={language === 'tr' ? styles.selectedSpan : ''}
                            onClick={() => setLanguage('tr')}>TR</span>
                    </div>
            <div className={styles.menu}>
                <MdMenu size={30} onClick={() => setIsMobile(!isMobile)} />
            </div>
        </nav>
    );
}
