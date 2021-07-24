import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import BuilderForm from './BuilderForm';
import Signature from './Signature';

const { Title } = Typography;

const SignatureBuilder = () => {
    const [name, setName] = useState("JohnDoe.");
    const [size, setSize] = useState(60);
    const [colour, setColour] = useState('#000000');
    const [font, setFont] = useState('Photograph Signature');

    const fonts = [
        'Richard Hamilton',
        'Rodrigues',
        'Photograph Signature',
        'Beauty'
    ];

    const _handleSubmit = (values) => {
        setName(values.name);
        setSize(values.size);
        setColour(values.colour);
        setFont(values.font);
    }

    return (
        <section className="signature-builder" id="signature-builder" tabIndex="-1">
            <div className="container">
                <div className="text-container">
                    <Title level={1}>Create and download your signature with ease.</Title>
                </div>
                <Row gutter={{ lg: 32 }}>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <BuilderForm
                            fonts={fonts}
                            handleSubmit={_handleSubmit}
                            formInitialValues={{
                                name: name,
                                size: size,
                                colour: colour,
                                font: font
                            }}
                        />
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Signature
                            fill={colour}
                            size={size}
                            font={font}
                            text={name}
                        />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default SignatureBuilder;