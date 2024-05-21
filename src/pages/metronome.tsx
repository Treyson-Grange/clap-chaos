import Metronome from "@/components/Metronome";
import styles from '@/styles/Home.module.css';
import PageHead from '@/components/PageHead';

export default function MetronomePage() {
    return (
        <div>
            <PageHead pageTitle="Metronome" />
            <main className={styles.main}>
                <Metronome />
            </main>
        </div>
    );
}