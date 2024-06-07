import Link from "next/link";
import styles from "./footer.module.css"
const Footer = () => {
    const navItems = [
        { href: "/home", label: "Home"},
        { href: "/products", label: "Products"},
        { href: "/services", label: "Services"},
        { href: "/contact", label: "Contact"},

        ];
    return (
        <></>
        // <div className={styles.footer}>
        //     <div className={styles.footerContainer}>
        //         <p className={styles.footerText}>© 2024 Cebeci Makina. All rights reserved.</p>
               
        //     </div>
        // </div>
    );
};

export default Footer;