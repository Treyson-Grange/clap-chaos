import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        const handleDarkModeChange = (event: MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
        };

        darkModeMediaQuery.addListener(handleDarkModeChange);

        return () => {
            darkModeMediaQuery.removeListener(handleDarkModeChange);
        };
    }, []);

    return (
        <div data-bs-theme={isDarkMode ? "dark" : "light"}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Should bring this navbar to bootstrap probably */}
            <nav className={styles.nav}>
                <Link href="/">&#128079;</Link>
                <Link href="/metronome">Metronome</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
