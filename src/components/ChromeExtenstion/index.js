import { Row, Col, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { ChromeFilled } from '@ant-design/icons';

export default function ChromeExtenstionSection() {
    const { t } = useTranslation('common');

    return (
        <section className="chrome-ext-section">
            <div className="container">
                <Row>
                    <Col md={12} sm={24}>
                        <figure>
                            <Image
                                src={"/images/chrome-extenstion-app.png"}
                                alt={"chrome-extenstion-app"}
                                width={353}
                                height={492}
                            />
                            <Image
                                className='chrome-ext-logo'
                                src={"/images/chrome-extenstion-logo.png"}
                                alt={"chrome-extenstion-logo"}
                                width={143}
                                height={143}
                            />
                        </figure>
                    </Col>
                    <Col md={12} sm={24}>

                        <article>
                            <h2>{t("Chrome Extension")}</h2>
                            <h4>Discover Chrome extensions !</h4>
                            <h5>Strong Password Generation:</h5>
                            <p>Generates strong and random passwords.</p>
                            <h5>Easy-to-Use Interface:</h5>
                            <p>Generate passwords with one click.</p>
                            <h5>Customization Options:</h5>
                            <p>Set password length and character types according to your needs.</p>
                        </article>
                        <Link href="https://chromewebstore.google.com/detail/muscle-password/iimjcckbcjoehbfekigjpnlgmjllmgdk" target='_blank'>
                            <Button
                                className='black-button'
                                size="large"
                                type="link"
                                icon={<ChromeFilled />}
                            >
                                {t("Add to Chrome")}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </section>
    );
};