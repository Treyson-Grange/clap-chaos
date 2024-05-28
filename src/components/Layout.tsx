import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Footer from '@/components/Footer';
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Dark mode for bs
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
    // Dark mode for MUI
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const isMUIDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = isMUIDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
};

export default Layout;
