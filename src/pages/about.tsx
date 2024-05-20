import Head from 'next/head';
import siteConfig from '@/config/clap-chaos';
export default function About() {
    return (
        <div>
            <Head>
                <title>About Us | {siteConfig.SITENAME}</title>
                <meta name="description" content={siteConfig.SITEDESCRIPTION} />
            </Head>
            <main>
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </main>
        </div>
    );
}
