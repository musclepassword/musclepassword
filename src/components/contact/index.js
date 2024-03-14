import React from "react";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const Contact = () => {

    return (
        <div className="container">
            <section className="contact">
                <h1 style={{ color: "#1677ff" }}>Get in touch!</h1>
                <div>
                    <Button type="primary" size="large" href="http://github.com/cuneydbolukoglu"> <GithubOutlined />Contact</Button>
                </div>
            </section>
        </div>
    );
}

export default Contact;