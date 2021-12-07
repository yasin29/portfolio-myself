import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './NewsletterForm';

const NewsLetterSubscribe = () => {

    const mailchimpUrl = process.env.REACT_APP_MAILCHIMP_URL;
    console.log(mailchimpUrl);
    return (
        <MailchimpSubscribe
            url={mailchimpUrl}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <NewsletterForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                );
            }}
        />
    );
};
export default NewsLetterSubscribe;