import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function AboutSection() {
    const { t } = useTranslation('about');

    return (
        <section className="about-section">
            <div className="container">
                <article>
                    <h2>{t("What makes a password strong?")}</h2>
                </article>
                <Row>
                    <Col md={8} sm={24}>
                        <Card
                            style={{
                                height: 422,
                                borderRadius: "15px",
                                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
                                margin: "40px",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                            }}
                        >
                            <Image
                                src={"/assets/images/about/about-circle.png"}
                                alt={"about-circle"}
                                className='circle-left'
                                width={56}
                                height={46}
                            />
                            <Image
                                src={"/assets/images/about/long.svg"}
                                alt={"long"}
                                width={105}
                                height={56}
                            />
                            <h4>{t("Long")}</h4>
                            <p>{t("The longer a password, the more secure it is. A strong password should be at least 10 characters long.")}</p>
                        </Card>
                    </Col>
                    <Col md={8} sm={24}>
                        <Card
                            style={{
                                height: 482,
                                borderRadius: "15px",
                                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
                                backgroundColor: "#47a4f4",
                                color: "#fff",
                                margin: "40px",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                            }}
                        >
                            <Image
                                src={"/assets/images/about/lock.svg"}
                                alt={"long"}
                                width={105}
                                height={56}
                            />
                            <h4 style={{ color: "#fff" }}>{t("Complex")}</h4>
                            <p>{t("Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.")}</p>
                        </Card>
                    </Col>
                    <Col md={8} sm={24}>
                        <Card
                            style={{
                                height: 422,
                                borderRadius: "15px",
                                boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
                                margin: "40px",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                            }}
                        >
                            <Image
                                src={"/assets/images/about/about-circle.png"}
                                alt={"about-circle"}
                                className='circle-right'
                                width={56}
                                height={46}
                            />
                            <Image
                                src={"/assets/images/about/finger.svg"}
                                alt={"long"}
                                width={105}
                                height={56}
                            />
                            <h4>{t("Unique")}</h4>
                            <p>{t("A strong password should be unique to each account to reduce vulnerability in the event of a hack.")}</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
};