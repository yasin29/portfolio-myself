import React, { useState } from 'react';
import { decode } from 'html-entities';
import { Button } from 'react-bootstrap';
import './NewsletterForm.css'

const NewsletterForm = ({ status, message, onValidated }) => {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);


    const handleFormSubmit = () => {

        setError(null);

        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });


        return email && email.indexOf("@") > -1 && isFormValidated;
    }


    const handleInputKeyEvent = (event) => {
        setError(null);

        if (event.keyCode === 13) {

            event.preventDefault();

            handleFormSubmit();
        }
    }


    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    }

    return (
        <>
            <section style={{ color: '#fff' }} className="d-flex flex-column justify-content-center align-items-center text-center mb-2 p-2 footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe to receive newsletter of my new articles.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input onChange={(event) => setEmail(event?.target?.value ?? '')} type="email" name="email" placeholder="Your Email"
                            onKeyUp={(event) => handleInputKeyEvent(event)} className="footer-input" />
                        <Button onClick={handleFormSubmit} className="btn1">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div>
                {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
                {status === "error" || error ? (
                    <div style={{ color: "red" }}
                        className="newsletter-form-error"
                        dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                    />
                ) : null}
                {status === "success" && status !== "error" && !error && (
                    <div style={{ color: "green", fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: decode(message) }} />
                )}
            </div>
        </>
    );
}

export default NewsletterForm