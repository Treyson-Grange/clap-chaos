import Head from "next/head";
import siteConfig from "@/config/clap-chaos";
import Metronome from "@/components/Metronome";

export default function MetronomePage() {
    return (
        <div>
            <Head>
                <title>Metronome | {siteConfig.SITENAME}</title>
                <meta name="description" content={siteConfig.SITEDESCRIPTION} />
            </Head>
            <Metronome />
        </div>
    );
}