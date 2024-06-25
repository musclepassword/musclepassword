import React from "react";
import { Button } from "antd";
import { GithubOutlined, EditOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import logo from '../../assets/image/chrome-extensions.png';

const Contact = () => {
    const { i18n } = useTranslation();

    return (
        <div className="container">
            <section className="contact">
                <h1>{i18n.t('google_chrome_extension')}</h1>
                <p>{i18n.t('google_chrome_extension_desc')}</p>
                <img src={logo} alt="chrome_image" />
            </section>
            <section className="contact">
                <h1>{i18n.t('contact_for_support')}</h1>
                <p>{i18n.t('contact_description')}</p>
                <Button className="button-primary" type="primary" size="large" href="https://github.com/musclepassword" target="_blank"> <GithubOutlined />Github</Button>
                <Button className="button-primary" size="large" href="mailto:cuneydbolukogluu@gmail.com" target="_blank"> <EditOutlined />  Email</Button>
            </section>
        </div>
    );
}

export default Contact;