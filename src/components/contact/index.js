import React from "react";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { i18n } = useTranslation();

    return (
        <div className="container">
            <section className="contact">
                <h1>{i18n.t('Contact for support !')}</h1>
                <p>I am developing the project, I am open to your ideas.</p>
                <Button className="button-primary" type="primary" size="large" href="https://github.com/musclepassword"> <GithubOutlined />Github</Button>
            </section>
        </div>
    );
}

export default Contact;