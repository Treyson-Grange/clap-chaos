import styles from '@/styles/Home.module.css';
import ContactInfo from '@/components/Contact';
import PageHead from '@/components/PageHead';
import Herobanner from '@/components/Herobanner';

export default function Contact() {
    return (
        <div>
            <PageHead pageTitle="Contact" />
            <Herobanner
                title="Contact Us"
                subtitle="We'd love to hear from you!"
            />
            <main className={styles.main}>
                <ContactInfo />
            </main>
        </div>
    );
}
