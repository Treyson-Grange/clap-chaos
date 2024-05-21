import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Footer from '@/components/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkQuery.matches);
        const handleDarkModeChange = (event: MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
        };
        darkQuery.addEventListener('change', handleDarkModeChange);
        return () => {
            darkQuery.removeEventListener('change', handleDarkModeChange);
        };
    }, []);

    return (
        <div data-bs-theme={isDarkMode ? "dark" : "light"}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={styles.nav}>
                <Link href="/">&#128079;</Link>
                <Link href="/metronome">Metronome</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
