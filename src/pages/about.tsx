import styles from '@/styles/Home.module.css';
import AboutInfo from '@/components/About';
import PageHead from '@/components/PageHead';

export default function About() {
    return (
        <div>
            <PageHead pageTitle="About" />
            <main className={styles.main}>
                <AboutInfo />
            </main>
        </div>
    );
}
