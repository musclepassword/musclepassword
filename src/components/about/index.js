import React from "react";
import { Card, Row, Col } from 'antd';
import { useTranslation } from "react-i18next";

const About = () => {
    const { i18n } = useTranslation();

    return (
        <section className="about">
            <div className="container">
                <h1>{i18n.t('What makes a password strong')}</h1>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            title={<h2>{i18n.t('long')}</h2>}
                            bordered={false}
                        >
                            <p>{i18n.t('long_desc')}</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title={<h2>{i18n.t('complex')}</h2>}
                            bordered={false}
                        >
                            <p>{i18n.t('complex_desc')}</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title={<h2>{i18n.t('unique')}</h2>}
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