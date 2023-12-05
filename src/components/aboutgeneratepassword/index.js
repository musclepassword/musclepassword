import React from "react";
import fingerIcon from '../../assets/img/fingerprint-solid.svg';

function AboutGeneratePassword() {

    return (
        <section className="about-generate-password">
            <h1>What makes a password strong?</h1>
            <div className="box-inclusive">
                <div className="box">
                    <img src={fingerIcon} alt="fingericon" />
                    <h2>Long</h2>
                    <p>The longer a password, the more secure it is. A strong password should be at least 10 characters long.</p>
                </div>
                <div className="box">
                    <img src={fingerIcon} alt="fingericon" />
                    <h2>Complex</h2>
                    <p>Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.</p>
                </div>
                <div className="box">
                    <img src={fingerIcon} alt="fingericon" />
                    <h2>Unique</h2>
                    <p>A strong password should be unique to each account to reduce vulnerability in the event of a hack.</p>
                </div>
            </div>
        </section>
    );
}

export default AboutGeneratePassword;