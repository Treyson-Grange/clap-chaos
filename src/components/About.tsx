import React from "react";
import { useState, useEffect } from 'react'
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

const AboutInfo: React.FC = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    return (
        <Container>
            <Row>
                <Col lg={8} className="d-flex">
                    <Card>
                        <Card.Body>
                            <Card.Title><h2>About Clap Chaos</h2></Card.Title>
                            <Card.Text>

                                Introducing Clap Chaos, the innovative React-based
                                web app designed to rescue musicians from the turmoil
                                of audience clap chaos. Ever felt the frustration of
                                your audience clapping along, only to find their rhythm
                                veering off course? Bid farewell to the disarray and
                                embrace clarity with our intuitive platform. Clap Chaos
                                is your ally in deciphering and rectifying misplaced
                                claps, ensuring that the beat stays true and your
                                performance remains untainted. Whether it's a subtle
                                syncopation or a full-blown rhythm deviation, our
                                tools equip you to seamlessly guide your audience
                                back to the groove. Join us and revolutionize the
                                way you navigate the unpredictable world of
                                audience engagement.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="Untitled.svg" alt="asdf" />
                    </Card>
                </Col>
                <Col lg={4} className="d-flex">
                    <Card>
                        <Card.Body>
                            <Card.Title><h2>Why? &#127928;</h2></Card.Title>
                            <Card.Text>
                                I love live music. On one occasion, I was at a concert,
                                when a group of people started clapping along to the
                                music. The clapping was off beat, and it was distracting.
                                I remember the guitarist of course it was the guitarist
                                started to play off beat, he was visibly confused on what
                                the beat was. I thought to myself, "Wouldn't it be cool if
                                there was an app that could help live performers practice
                                their timing with these off beat clappers?" And that's how
                                Clap Chaos was born.<br /><br />
                                If you perform live, this app is perfect for you. Regular
                                metronomes are too simple. They don't prepare you for audience
                                members who don't have a musical bone in their body. It's sad,
                                but you need to prepare for this.
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="Untitled.svg" alt="asdf" />
                    </Card>
                </Col>
            </Row>
        </Container >
    )
}

export default AboutInfo;