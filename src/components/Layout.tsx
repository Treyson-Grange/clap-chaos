import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material';

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
    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <div data-bs-theme={isDarkMode ? 'dark' : 'light'}>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                {children}
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default Layout;
