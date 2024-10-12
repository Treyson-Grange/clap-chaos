import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
