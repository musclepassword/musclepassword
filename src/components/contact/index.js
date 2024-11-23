import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import chromeExtensionIcon from '../../assets/image/chrome-extension-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    const { i18n } = useTranslation();

    return (
        <>
            <section className="chrome_extension">
                <div className="container">
                    <h2>{i18n.t('google_chrome_extension')}</h2>
                    <p>{i18n.t('discover-chrome-extension')}</p>
                    <img src={chromeExtensionIcon} alt="chrome_image" />
                    <div>
                        <Button className="button-primary" icon={<FontAwesomeIcon icon={faChrome} />} size="large" href="https://chromewebstore.google.com/detail/muscle-password/iimjcckbcjoehbfekigjpnlgmjllmgdk" target="_blank">{i18n.t('add_to_chrome')}</Button>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="contact">
                    <h2>{i18n.t('contact_for_support')}</h2>
                    <p>{i18n.t('contact_description')}</p>
                    <Button className="button-primary" icon={<FontAwesomeIcon icon={faGithub} />} type="primary" size="large" href="https://github.com/musclepassword" target="_blank">Github</Button>
                    <Button className="button-primary" icon={<FontAwesomeIcon icon={faEnvelope} />} size="large" href="mailto:cuneydbolukogluu@gmail.com" target="_blank">{i18n.t('email')}</Button>
                </section>
            </div>
        </>
    );
}

export default Contact;