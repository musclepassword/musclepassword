import React from "react";
import { Card, Row, Col } from 'antd';
import i18n from '../../i18n';

const About = () => {

    return (
        <section className="about">
            <div className="container">
                <h1>What makes a password strong?</h1>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            title={<h2>{i18n.t('long')}</h2>}
                            bordered={false}
                        >
                            <p>The longer a password, the more secure it is. A strong password should be at least 10 characters long.</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title={<h2>{i18n.t('complex')}</h2>}
                            bordered={false}
                        >
                            <p>Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title={<h2>{i18n.t('unique')}</h2>}
                            bordered={false}
                        >
                            <p>A strong password should be unique to each account to reduce vulnerability in the event of a hack.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default About;