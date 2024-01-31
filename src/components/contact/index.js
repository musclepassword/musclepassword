import React from "react";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const Contact = () => {

    return (
        <section className="contact">
            <h1>Lorem ipsum dolar</h1>
            <p>Join over 30 million people who use lorem every day to make their writing shine.</p>

            <Button type="primary" size="large" href="http://github.com/cuneydbolukoglu"> <GithubOutlined /> Other project <b> GitHub</b></Button>
        </section>
    );
}

export default Contact;