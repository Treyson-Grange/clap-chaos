import React from "react";
import { Row, Container, Col, Button } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';

type HerobannerProps = {
    title: string;
    subtitle?: string;
    buttonText?: string;
    buttonVariant?: string;
    buttonLink?: string;
};

const Herobanner: React.FC<HerobannerProps> = ({ title, subtitle, buttonText, buttonVariant = "primary", buttonLink = "#" }) => {
    return (
        <Container fluid className={`text-center py-5 ${styles.herobanner}`}>
            <Row>
                <Col>
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                    {buttonText && <Button href={buttonLink} variant={buttonVariant}>{buttonText}</Button>}
                </Col>
            </Row>
        </Container>
    );
}

export default Herobanner;