import React from "react";
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

const Landing: React.FC = () => {
    return (
        <Container>
            <h1>Clap Chaos</h1>
            <p>This is the content of the Landing page.</p>
            <Row className="mb-3">
                <Col lg={6} className="d-flex mb-3">

                </Col>
                <Col lg={6} className="d-flex mb-3" >

                </Col>
            </Row>
        </Container>
    );
}
export default Landing;