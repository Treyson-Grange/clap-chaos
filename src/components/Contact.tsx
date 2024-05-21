import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CardComp from '@/components/Card';
import siteConfig from '@/config/clap-chaos';

const ContactInfo: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col lg={6} className='d-flex'>
                    <CardComp
                        title="Contact Us"
                        subtitle="We'd love to hear from you!"
                        text={`Have a question or comment? Feel free to reach out to us regarding any comments, questions, or concerns. We're here to help!`}
                        buttonText='Contact Us'
                        url={`mailto:${siteConfig.CONTACTEMAIL}`}
                    />
                </Col>
                <Col lg={6} className='d-flex'>
                    <CardComp
                        title="Feature Requests or Bug Reports?"
                        subtitle="Let us know!"
                        text={`If you have a feature request or found a bug, please submit an issue on our GitHub page.`}
                        buttonText='GitHub'
                        url='https://github.com/Treyson-Grange/clap-chaos'
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default ContactInfo;