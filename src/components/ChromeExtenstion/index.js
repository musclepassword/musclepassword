import { Row, Col, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { ChromeFilled } from '@ant-design/icons';

export default function ChromeExtenstionSection() {
    const { t } = useTranslation(['chrome', 'common']);
    const chromeExtensionContent = [
        { title: t("Strong Password Generation:"), text: t("Generates strong and random passwords.") },
        { title: t("Easy-to-Use Interface:"), text: t("Generate passwords with one click.") },
        { title: t("Customization Options:"), text: t("Set password length and character types according to your needs.") },
    ];

    return (
        <section className="chrome-ext-section">
            <div className="container">
                <Row>
                    <Col md={12} sm={24}>
                        <figure>
                            <Image
                                src={"/assets/images/chrome-extenstion-app.png"}
                                alt={"chrome-extenstion-app"}
                                width={353}
                                height={492}
                            />
                            <Image
                                className='chrome-ext-logo'
                                src={"/assets/images/chrome-extenstion-logo.png"}
                                alt={"chrome-extenstion-logo"}
                                width={143}
                                height={143}
                            />
                        </figure>
                    </Col>
                    <Col md={12} sm={24}>
                        <article>
                            <h2>{t("Chrome Extension")}</h2>
                            <h4>{t("Discover Chrome extensions !")}</h4>
                            {
                                chromeExtensionContent.map((item, index) => {
                                    return (
                                        <>
                                            <h5>{item.title}</h5>
                                            <p>{item.text}</p>
                                        </>
                                    )
                                })
                            }
                        </article>
                        <Link href="https://chromewebstore.google.com/detail/muscle-password/iimjcckbcjoehbfekigjpnlgmjllmgdk" target='_blank'>
                            <Button
                                className='black-button'
                                size="large"
                                type="link"
                                icon={<ChromeFilled />}
                            >
                                {t("Add to Chrome", { ns: 'common' })}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </section>
    );
};