import Head from 'next/head';
import siteConfig from '@/config/clap-chaos';

const PageHead = ({ pageTitle }: { pageTitle: string }) => {
    return (
        <Head>
            <title>{pageTitle} | {siteConfig.SITENAME}</title>
            <meta name="description" content={siteConfig.SITEDESCRIPTION} />
        </Head>
    )
}

export default PageHead;