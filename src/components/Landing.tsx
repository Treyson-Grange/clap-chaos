import React from "react";
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const Landing: React.FC = () => {
    return (
        <Container>
            <h1>Clap Chaos</h1>
            <Row className="mb-3">
                <Col lg={6} className="d-flex mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} className="d-flex mb-3" >
                    <Card>
                        <Card.Body>
                            <Card.Title>Don't take our word for it</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">John Doe</Card.Subtitle>
                            <Card.Text>
                                <Rating value={0} readOnly></Rating>
                                <br />
                                This is the worst app ever! It stole all of my data, and installed ransomware on my device!!
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;