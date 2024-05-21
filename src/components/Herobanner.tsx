import React from "react";
import { Row, Container, Col, Button } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';

const Herobanner: React.FC = () => {
    return (
        <Container fluid className={`text-center py-5 ${styles.herobanner}`}>
            <Row>
                <Col>
                    <h1>Stay in Sync, Every Beat Matters</h1>
                    <p>Combat misleading audience claps with precision.</p>
                    <Button variant="primary">Get Started</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Herobanner;