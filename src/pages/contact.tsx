import styles from '@/styles/Home.module.css';
import ContactInfo from '@/components/Contact';
import PageHead from '@/components/PageHead';

export default function Contact() {
    return (
        <div>
            <PageHead pageTitle="Contact" />
            <main className={styles.main}>
                <ContactInfo />
            </main>
        </div>
    );
}
