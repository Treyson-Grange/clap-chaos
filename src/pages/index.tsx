import Head from 'next/head';
import siteConfig from '@/config/clap-chaos';
export default function Index() {
    return (
        <div>
            <Head>
                <title>Home | {siteConfig.SITENAME}</title>
                <meta name="description" content={siteConfig.SITEDESCRIPTION} />
            </Head>
            <main>
                <div>
                    <h1>Welcome to the Home Page!</h1>
                    <p>This is the content of the home page.</p>
                    <div className="card">
                        <h2>Title</h2>
                        <p>This is a paragraph with <span>emphasized text</span>.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}