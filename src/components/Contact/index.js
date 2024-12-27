import { Button } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { GithubOutlined } from '@ant-design/icons';

export default function ContactSection() {
    const { t } = useTranslation('contact');

    return (
        <section className="contact-section">
            <div className="container">
                <article>
                    <h2>{t("Contact for support !")}</h2>
                    <h4>{t("I am developing the project, I am open to your ideas.")}</h4>
                </article>
                <Link href="https://github.com/musclepassword" target='_blank'>
                    <Button
                        className='black-button'
                        size="large"
                        type="link"
                        icon={<GithubOutlined />}
                    >
                        {t("Star us on GitHub")}
                    </Button>
                </Link>
                <Image
                    src={"/images/contact-circle.png"}
                    alt={"contact-circle"}
                    className='circle'
                    width={56}
                    height={46}
                />
            </div>
        </section>
    );
};