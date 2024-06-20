import React from "react";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { i18n } = useTranslation();

    return (
        <div className="container">
            <section className="contact">
                <h1>{i18n.t('contact_for_support')}</h1>
                <p>{i18n.t('contact_description')}</p>
                <Button className="button-primary" type="primary" size="large" href="https://github.com/musclepassword"> <GithubOutlined />Github</Button>
            </section>
        </div>
    );
}

export default Contact;