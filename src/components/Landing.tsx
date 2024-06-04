import React from "react";
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const Landing: React.FC = () => {
    return (
        <Container>
            <h1>Clap Chaos</h1>
            <Row className="mb-3">
                <Col className="d-flex mb-3" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Don't take our word for it</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>
                            <Card.Text>
                                <Rating value={0} readOnly />
                                <br />
                                This is the worst app ever! It stole all of my data, and installed ransomware on my device!!
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Jane Doe</Card.Subtitle>
                            <Card.Text>
                                <Rating value={5} readOnly />
                                <br />
                                This is the best app ever! It saved my life, and installed a new kitchen sink in my house!! It even gave me some free data from a guy named John Doe!!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;