import Head from 'next/head';
import siteConfig from '@/config/clap-chaos';

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact Us | {siteConfig.SITENAME}</title>
                <meta name="description" content={siteConfig.SITEDESCRIPTION} />
            </Head>
            <main>
                <h1>Contact Us</h1>
                <p>This is the contact page.</p>
            </main>
        </div>
    );
}
