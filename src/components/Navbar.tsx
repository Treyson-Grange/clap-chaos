import React from "react";
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">&#128079;</Link>
            <Link href="/metronome"><b>Metronome</b></Link>
            <Link href="/about"><b>About</b></Link>
            <Link href="/contact"><b>Contact</b></Link>
        </nav>
    )
}

export default Navbar;