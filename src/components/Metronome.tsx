import React, { useEffect, useState } from "react";
import siteConfig from "@/config/clap-chaos";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

const Metronome: React.FC = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6} className="d-flex">
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
                    <Col lg={6} className="d-flex">
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

                </Row>
            </Container>
        </div>
    );
}

export default Metronome;
