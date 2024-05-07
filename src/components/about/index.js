import React from "react";
import { Card, Row, Col } from 'antd';
import { useTranslation } from "react-i18next";

const About = () => {
    const { i18n } = useTranslation();

    return (
        <section className="about">
            <div className="container">
                <h2>{i18n.t('What makes a password strong')}</h2>
                <Row className="about-row" gutter={16}>
                    <Col className="about-col" sm={24} md={8}>
                        <Card
                            title={<h3>{i18n.t('long')}</h3>}
                            bordered={false}
                        >
                            <p>{i18n.t('long_desc')}</p>
                        </Card>
                    </Col>
                    <Col className="about-col" sm={24} md={8}>
                        <Card
                            title={<h3>{i18n.t('complex')}</h3>}
                            bordered={false}
                        >
                            <p>{i18n.t('complex_desc')}</p>
                        </Card>
                    </Col>
                    <Col className="about-col" sm={24} md={8}>
                        <Card
                            title={<h3>{i18n.t('unique')}</h3>}
                            bordered={false}
                        >
                            <p>{i18n.t('unique_desc')}</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default About;