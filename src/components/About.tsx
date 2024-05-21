import React from "react";
import { Col, Row, Container } from 'react-bootstrap';
import CardComp from '@/components/Card';

const AboutInfo: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col lg={8} className="d-flex">
                    <CardComp
                        title="About Clap Chaos"
                        subtitle="The Ultimate Rhythm Guide"
                        text="Introducing Clap Chaos, the innovative React-based
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
                        audience engagement."
                        img="file.png"
                        imgLocation="bottom"
                    />
                </Col>
                <Col lg={4} className="d-flex">
                    <CardComp
                        title="Why? &#127928;"
                        subtitle=""
                        text={`I love live music. On one occasion, I was at a concert,
                        when a group of people started clapping along to the
                        music. The clapping was off beat, and it was distracting.
                        I remember the guitarist (of course it was the guitarist)
                        started to play off beat, he was visibly confused on what
                        the beat was. I thought to myself, "Wouldn't it be cool if
                        there was an app that could help live performers practice
                        their timing with these off beat clappers?" And that's how
                        Clap Chaos was born. If you perform live, this app is perfect for you. Regular
                        metronomes are too simple. They don't prepare you for audience
                        members who don't have a musical bone in their body. It's sad,
                        but you need to prepare for this.`}
                        img="file.png"
                        imgLocation="bottom"
                    />
                </Col>
            </Row>
        </Container >
    )
}

export default AboutInfo;