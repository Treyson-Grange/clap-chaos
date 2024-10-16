import React from 'react';
import { Card, Button } from 'react-bootstrap';

type CardProps = {
    title?: string;
    subtitle?: string;
    text?: string;
    img?: string;
    imgLocation?: string;
    buttonText?: string;
    buttonVariant?: string;
    url?: string;
};

/**
 * Basic Card Component. Handles title, subtitle, text, image, button, and button URL.
 */
const CardComp: React.FC<CardProps> = ({
    title,
    subtitle,
    text,
    img,
    imgLocation = 'top',
    buttonText,
    buttonVariant = 'primary',
    url,
}) => {
    return (
        <Card>
            {img && imgLocation === 'top' && (
                <Card.Img variant="top" src={img} />
            )}
            <Card.Body>
                {title && (
                    <Card.Title>
                        <h2>{title}</h2>
                    </Card.Title>
                )}
                {subtitle && (
                    <Card.Subtitle>
                        <h3>{subtitle}</h3>
                    </Card.Subtitle>
                )}
                {text && <Card.Text>{text}</Card.Text>}
                {buttonText && (
                    <Button href={url} variant={buttonVariant}>
                        {buttonText}
                    </Button>
                )}
            </Card.Body>
            {img && imgLocation === 'bottom' && (
                <Card.Img variant="bottom" src={img} />
            )}
        </Card>
    );
};

export default CardComp;
