import React from "react";
import { Card, Row, Col } from 'antd';

const About = () => {

    return (
        <section className="about">
            <h1>What makes a password strong?</h1>
            <Row gutter={16}>
                <Col span={8}>
                    <Card
                        title={<h2>Long</h2>}
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>The longer a password, the more secure it is. A strong password should be at least 10 characters long.</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title={<h2>Complex</h2>}
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card
                        title={<h2>Unique</h2>}
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>A strong password should be unique to each account to reduce vulnerability in the event of a hack.</p>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}

export default About;