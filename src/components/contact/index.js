import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/image/chrome-extensions.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
    const { i18n } = useTranslation();

    return (
        <>
            <section className="chrome_extension">
                <div className="container">
                    <h1>{i18n.t('google_chrome_extension')}</h1>
                    <p>{i18n.t('google_chrome_extension_desc')}</p>
                    <img src={logo} alt="chrome_image" />
                </div>
            </section>
            <div className="container">
                <section className="contact">
                    <h1>{i18n.t('contact_for_support')}</h1>
                    <p>{i18n.t('contact_description')}</p>
                    <Button className="button-primary" type="primary" size="large" href="https://github.com/musclepassword" target="_blank"><FontAwesomeIcon icon={faGithub} />Github</Button>
                    <Button className="button-primary" size="large" href="mailto:cuneydbolukogluu@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} />{i18n.t('email')}</Button>
                </section>
            </div>
        </>
    );
}

export default Contact;