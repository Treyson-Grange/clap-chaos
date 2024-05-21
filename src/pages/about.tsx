import styles from '@/styles/Home.module.css';
import AboutInfo from '@/components/About';
import PageHead from '@/components/PageHead';
import Herobanner from '@/components/Herobanner';

export default function About() {
    return (
        <div>
            <PageHead pageTitle="About" />
            <Herobanner
                title="Clap Chaos"
                subtitle="Empower Your Performance: Tackle Misleading Applause with Clap Chaos"
            />
            <main className={styles.main}>
                <AboutInfo />
            </main>
        </div>
    );
}
