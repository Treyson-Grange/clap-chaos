import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CardComp from '@/components/Card';
import siteConfig from '@/config/clap-chaos';

const ContactInfo: React.FC = () => {
    return (
        <Container>
            <Row className="py-3">
                <Col className="d-flex">
                    <CardComp
                        title="Contact Us"
                        subtitle="We'd love to hear from you!"
                        text={`Have a question or comment? Feel free to reach out to us regarding any comments, questions, or concerns. We're here to help!`}
                        buttonText="Contact Us"
                        url={`mailto:${siteConfig.CONTACTEMAIL}`}
                    />
                </Col>
                <Col className="d-flex">
                    <CardComp
                        title="Feature Requests or Bug Reports?"
                        subtitle="Let us know!"
                        text={`If you have a feature request or found a bug, please submit an issue on our GitHub page.`}
                        buttonText="GitHub"
                        url={`${siteConfig.GITHUBURL}/issues`}
                    />
                </Col>
            </Row>
            <Row className="py-2">
                <Col>
                    <CardComp
                        title="Open Source Software"
                        subtitle="Our code is open source!"
                        text={`Our code is open source and available on GitHub. We welcome contributions from the community. Please don't hesitate to create a pull request if you have a feature you'd like to add or a bug you'd like to fix.`}
                        buttonText="Blog Post on OSS"
                        url="https://shorturl.at/s5QdX"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;
