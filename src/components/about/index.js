import React from "react";
import { Card, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faKey, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const { i18n } = useTranslation();

    return (
        <section className="about">
            <div className="container">
                <h3>{i18n.t('What makes a password strong')}</h3>
                <Row className="about-row" gutter={16}>
                    <Col className="about-col" sm={24} md={8}>
                        <Card
                            title={<h4><FontAwesomeIcon icon={faRulerHorizontal} color="#1677ff" size="xs"/> {i18n.t('long')}</h4>}
                            bordered={false}
                        >
                            <p>{i18n.t('long_desc')}</p>
                        </Card>
                    </Col>
                    <Col className="about-col" sm={24} md={8}>
                        <Card
                            title={<h4><FontAwesomeIcon icon={faKey} color="#1677ff" size="xs"/> {i18n.t('complex')}</h4>}
                            bordered={false}
                        >
                            <p>{i18n.t('complex_desc')}</p>
                        </Card>
                    </Col>
                    <Col className="about-col" sm={24} md={8}>
                        <Card
                            title={<h4><FontAwesomeIcon icon={faFingerprint} color="#1677ff" size="xs"/> {i18n.t('unique')}</h4>}
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