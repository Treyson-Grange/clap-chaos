import Landing from '@/components/Landing';
import Herobanner from '@/components/Herobanner';
import styles from '@/styles/Home.module.css';
import PageHead from '@/components/PageHead';

export default function Index() {
    return (
        <div>
            <PageHead pageTitle="Home" />
            <Herobanner />
            <main className={styles.main}>
                <Landing />
            </main>
        </div >
    );
}