import React, { useState, useRef } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef();
    const [sending, setSending] = useState(false);

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            setSending(true);
            // Add current time to the form
            const now = new Date();
            const formattedTime = now.toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            form.current.querySelector('input[name="time"]').value = formattedTime;
            emailjs.sendForm(
                'service_pw4tjcs', // Replace with your EmailJS service ID
                'template_5v7ve1s', // Replace with your EmailJS template ID
                form.current,
                'FYBIe1XbYA33j7Gqp' // Replace with your EmailJS public key
            )
            .then((result) => {
                console.log(result.text);
                setSending(false);
                validator.hideMessages();
                setForms({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                });
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                setSending(false);
                alert('Failed to send message. Please try again.');
            });
        } else {
            validator.showMessages();
        }
    };    return (        <form ref={form} onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <input type="hidden" name="time" />
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className="form-control"
                            placeholder="Your phone" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            className="form-control"
                            type="text"
                            name="subject">
                            <option>Choose a Service</option>
                            <option>Inquiry</option>
                              
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12 comment-area">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        className="form-control"
                        placeholder="Message">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>                <div className="col col-lg-12 col-12">
                    <div className="submit-area">
                        <button 
                            type="submit" 
                            className="btn-style-1" 
                            disabled={sending}
                        >
                            {sending ? 'Sending...' : 'Submit Now'}
                        </button>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default ContactForm;